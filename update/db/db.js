import mongoose from 'mongoose'

const connectDB = async ()=>{
    try {
        await mongoose.connect("mongodb://localhost:27017/StudentDB")
        console.log("Connetion successful........")
    } catch (err) {
        console.log(err)
    }
}

export default connectDB