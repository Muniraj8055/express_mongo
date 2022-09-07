import express from 'express'
import './models/Student.js'
const app = express()
const port = process.env.PORT || '3000'


// import mongoose from 'mongoose'
import connectDB from './db/db.js'


connectDB()

app.listen(port, ()=>{
    console.log(`Listening at http://localhost:${port}`)
})