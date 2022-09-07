import express from 'express'
import {createDoc,createMultiDoc} from './models/Student.js' 
import './models/Student.js'
const app = express()
const port = process.env.PORT || '3000'


// import mongoose from 'mongoose'
import connectDB from './db/db.js'


connectDB()

//create and save document
createDoc()
// createDoc("shreyas",23)
// createDoc("Danny", 23)
createMultiDoc()


app.listen(port, ()=>{
    console.log(`Listening at http://localhost:${port}`)
})