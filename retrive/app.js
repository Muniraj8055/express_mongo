import express from 'express'
import './models/Student.js'
const app = express()
const port = process.env.PORT || '3000'


// import mongoose from 'mongoose'
import connectDB from './db/db.js'
import { getSingleDocByField} from './models/Student.js'


connectDB()

//retrive doc
// getAllDoc()

//retriving specific field
// getAllDocSpecificField()


//retriving single document
getSingleDoc()

//retriving document by field
getSingleDocByField()



app.listen(port, ()=>{
    console.log(`Listening at http://localhost:${port}`)
})