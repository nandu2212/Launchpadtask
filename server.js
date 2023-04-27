const express=require('express')
const mongoose=require('mongoose')

const app=express();

app.listen(3007,()=>{
    console.log('port listened')
})

//Database connection
mongoose.connect('mongodb+srv://chinni:chinni@cluster0.6dkm45w.mongodb.net/?retryWrites=true&w=majority').then(()=>{
    console.log('database connected')
}).catch((err)=>{
    console.log(err)
})