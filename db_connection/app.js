import express from 'express'
const app = express()
const port = process.env.PORT || '3000'

import mongoose from 'mongoose'
import connectDB from './db/db.js'


// 1st way of connection
// mongoose.connect("mongodb://localhost:27017/test").then(()=>{
//     console.log("Connetion successful........")
// }).catch((err)=>{
//     console.log(err)
// })


//2nd way of connection
connectDB()

app.listen(port, ()=>{
    console.log(`Listening at http://localhost:${port}`)
})