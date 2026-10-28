const mongoose = require('mongoose')


async function connectDB (){
    await mongoose.connect(process.env.DBurl)

    console.log("Your Database is now ready");
}

module.exports = connectDB