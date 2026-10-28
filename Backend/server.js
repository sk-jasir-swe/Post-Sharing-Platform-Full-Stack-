require('dotenv').config()

const app = require('./src/app')

const connectDB = require('./src/db/db')

connectDB();

app.listen(4000,()=>{
    console.log("Your port is now live on port 4000")
})