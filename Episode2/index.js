require('dotenv').config()

const express=require('express')

const app=express()
//const port=3000


app.get('/',(req,res)=>{
    res.send("Hellow World !")
})

app.get('/twitter',(req,res)=>{
    res.send("Umesh Chaurasiya")
})

app.get('/login',(req,res)=>{
    res.send('<h1>please login at chai aur code </h1>')
})


// app.listen(port,()=>{

//     console.log(`Example app listing on port ${port}`)
// })



app.listen(process.env.port,()=>{
    console.log(`Example app listing on port ${process.env.port}`)
})

