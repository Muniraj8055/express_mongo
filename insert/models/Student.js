import mongoose from 'mongoose'


// Defining schema
const studentSchema = new mongoose.Schema({
    name:{type:String, required:true},
    age:{type:Number},

})

//creating model
const studentModel = mongoose.model("student", studentSchema)




//for entering on single data
const createDoc = async ()=>{
    try {
             //Creating document
            const studentdoc = new studentModel({
                name:"muni",
                age:23
            })

            //saving document

            const result = await studentdoc.save()
            console.log(result)

    } catch (error) {
        console.log(error)
    }
}


//passing data through arguments
const createDoc = async (nm,age)=>{
    try {
             //Creating document
            const studentdoc = new studentModel({
                name:nm,
                age:age
            })

            //saving document

            const result = await studentdoc.save()
            console.log(result)

    } catch (error) {
        console.log(error)
    }
}




//____________________________Entering multiple docs___________________________


const createMultiDoc = async ()=>{
    try {

        const shreyasDoc = new studentModel({
            name:"Shreyas",
            age:23
        })


        const maheshDoc = new studentModel({
            name:"Mahesh",
            age:23
        })


        const pranitDoc = new studentModel({
            name:"pranit",
            age:23
        })


        const result = await studentModel.insertMany([shreyasDoc,maheshDoc,pranitDoc])
        console.log(result)

    }
    catch (error) {
        console.log(error)
    }
         
}



export {createDoc,createMultiDoc}


