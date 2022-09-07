import mongoose from 'mongoose'


// Defining schema

const studentSchema = new mongoose.Schema({
    name:{type:String, required:true},
    age:{type:Number},

})

//creating model
const studentModel = mongoose.model("student", studentSchema)

//retriving document
const getAllDoc = async ()=>{
  const result = await studentModel.find()
  console.log(result)
//   result.map((item)=>{
//       console.log(item.name)  //retriving name only
//   })
}


//retriving all document with specific field
const getAllDocSpecificField = async ()=>{
    const result = await studentModel.find().select(['name','age'])
    console.log(result)

  }

// //retriving single document
const getSingleDoc = async()=>{
    const result = await studentModel.findById("62fcf911b31355aec7f25a95")
    console.log(result)
    console.log(result.name)
}

//retriving document by field
const getSingleDocByField = async()=>{
    const result = await studentModel.find({name:'Mahesh'})
    console.log(result)
}






// export {getAllDoc}

// export {getAllDocSpecificField}

// export {getSingleDoc}

export {getSingleDocByField}
