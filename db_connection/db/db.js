import mongoose from 'mongoose'

const connectDB = ()=>{
    return mongoose.connect("mongodb://localhost:27017/test")
        .then(()=>{
            console.log("Connetion successful........")
        }).catch((err)=>{
            console.log(err)
        })
}

export default connectDB