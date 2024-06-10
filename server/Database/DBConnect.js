
const mongoose = require('mongoose');

const connectDatabase=async(uri)=>{
    try{
        await mongoose.connect(uri)
        console.info("Database connected successfully")
    }
    catch(error){
        console.error(error)
    }
}


module.exports={connectDatabase}