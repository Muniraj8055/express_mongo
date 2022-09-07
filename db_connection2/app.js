import express from 'express'
const app = express()
const port = process.env.PORT || '3000'

const DATABASE_URL = process.env.DATABASE_URL || "mongodb://localhost:27017/test"

import connectDB from './db/db.js'

//Database connection
connectDB(DATABASE_URL)

app.listen(port, ()=>{
    console.log(`Listening at http://localhost:${port}`)
})