const mongoose=require('mongoose')

const fitnessSchema=new mongoose.Schema({
    programname:{
        type:String,
        required:true
    },
    Excersies:[
        {
            ExcersiseName:String,
            ExcersiseLength:Number
        } 
    ]
})

module.exports=mongoose.model('Fitnesss',fitnessSchema);