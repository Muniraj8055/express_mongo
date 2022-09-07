import mongoose from 'mongoose'


// Defining schema

const studentSchema = new mongoose.Schema({
    name:{type:String, required:true},
    age:{type:Number},
    fees:{type:Number},
    hobbies:{type:Array},
    isactive:{type:Boolean}

})

//creating model
const studentModel = mongoose.model("student", studentSchema)

