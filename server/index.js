
const express=require('express')

const app=express()

const mongoose=require('mongoose')

require('dotenv').config()

app.use(express.json())



const port=process.env.PORT

app.listen(port,()=>{
    console.debug(`Server started on port ${port}`)
})