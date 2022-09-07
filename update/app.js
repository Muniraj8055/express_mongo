import express from 'express'
import './models/Student.js'
const app = express()
const port = process.env.PORT || '3000'

// import { createDoc } from './models/Student.js'

// import mongoose from 'mongoose'
import connectDB from './db/db.js'
import { updateOneDoc } from './models/Student.js'


connectDB()
// updateDocById("62fe285e368853c77a7e06f0")
updateOneDoc("62fe285e368853c77a7e06f2")

// createDoc("Muniraj",22,"Vijayapura",223)
// createDoc("Shreyas",23,"Bangalore",123)
// createDoc("Danush",23,"RajajiNagar",243)
// createDoc("Jaydeep",32,"Gandhinagar",293)
// createDoc("Abhishek",22,"Davanagere",220)


app.listen(port, ()=>{
    console.log(`Listening at http://localhost:${port}`)
})