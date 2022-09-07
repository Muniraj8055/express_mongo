import mongoose from 'mongoose'


// Defining schema

const studentSchema = new mongoose.Schema({
    name:{type:String, required:true},
    age:{type:Number},
    city:{type:String},
    houseno:{type:Number}
   

})

//creating model
const studentModel = mongoose.model("student", studentSchema)

const createDoc = async (nm,age,city,hsn)=>{
    try {
             //Creating document
            const studentdoc = new studentModel({
                name:nm,
                age:age,
                city: city,
                houseno:hsn
            })

            //saving document

            const result = await studentdoc.save()
            console.log(result)

    } catch (error) {
        console.log(error)
    }
}



// Update document
const updateDocById = async(id)=>{
  try {
    const result = await studentModel.findByIdAndUpdate(id, 
        {name:"Muniraj"},
        {returnDocument:'after'}
        )
    console.log(result)

  } catch (error) {
      console.log(error)
  }
}

const updateOneDoc = async (id)=>{
    try {
     const result = await studentModel.updateOne({_id:id},
        {name:'Danny'},
        {upsert:true}
        )   

     console.log(result)
        
    } catch (error) {
        console.log(error)
    }
}


export {updateOneDoc}














// export {createDoc}






