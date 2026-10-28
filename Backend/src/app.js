const path = require('path')
const express = require('express')
const multer = require('multer')
const uploadFile = require('./service/storage.service')
const cors = require('cors')

const postModel = require('./model/post.model')
const app = express()
app.use(cors())
app.use(express.json())
const upload = multer({ storage: multer.memoryStorage() })

const publicDir = path.join(__dirname, '../public/dist')
app.use(express.static(publicDir))

app.post('/post-create', upload.single("image"), async (req, res) => {
    
    const result = await uploadFile(req.file.buffer)
    const post = await postModel.create({
        images: result.url,
        caption: req.body.caption
    })

    res.status(201).json({
        message: "Your data is created",
        post
    })
})

app.get('/posts', async(req,res)=>{
    const posts = await postModel.find()

    res.status(201).json({
        message : "Your post is here",
        posts
    })
})


app.get('/{*path}', (_req, res) => {
    res.sendFile(path.join(publicDir,'index.html'))
})

module.exports = app