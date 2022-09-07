import express from 'express'
import './models/Student.js'
const app = express()
const port = process.env.PORT || '3000'


// import mongoose from 'mongoose'
import connectDB from './db/db.js'
import {deleteOneDoc } from './models/Student.js'



connectDB()


deleteOneDoc("62fe285e368853c77a7e06f4")

app.listen(port, ()=>{
    console.log(`Listening at http://localhost:${port}`)
})