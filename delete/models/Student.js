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

//Delete document
const deleteDocById = async(id) =>{
    try {
        //The findByIdAndDelete() is a function in Mongoose used to find a document by the 
        //_id field and then remove the document from the collection. It returns the document removed or deleted.

        const result = await studentModel.findByIdAndDelete(id)
        console.log(result)

    } catch (error) {
        console.log(error)
    }
}

const deleteOneDoc= async(id) =>{
    try {
        // The deleteOne() method deletes the first document from the collection that matches the given selection 
        // criteria.It will delete/remove a single document from the collection.It takes four parameters, the first 
        // parameter is the selection criteria and the others are optional.
        
        const result = await studentModel.deleteOne({_id:id})
        console.log(result)

    } catch (error) {
        console.log(error)
    }
}


export {deleteOneDoc}




















// export {createDoc}






