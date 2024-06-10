
const express=require('express')

const app=express()

const mongoose=require('mongoose')
const {connectDatabase} = require("./Database/DBConnect");



require('dotenv').config()

app.use(express.json())




const uri=process.env.MONGO_URI
// console.log(uri)
const port=process.env.PORT

connectDatabase(uri)

app.listen(port,()=>{
    console.debug(`Server started on port ${port}`)
})