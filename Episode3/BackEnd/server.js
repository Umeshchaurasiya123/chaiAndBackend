//require('dotenv').config()
import 'dotenv/config'  // ES6 

//const express =require('express');

import express from "express";

const app=express()

app.get('/',(req,res)=>{
    res.send("server is ready")
})


app.get('/api/jokes',(req,res)=>{

    const jokes=[
    {
      id:1,
      title:"first joke",
      content:"this is a first joke"  
    },
    {   
        id:2,
        title:"secound joke",
        content:"this is a secound joke" 
        

    },
    {   
        id:3,
        title:"Third joke",
        content:"this is a third joke" 

    }];
    res.send(jokes);
})


const port=process.env.port||3000


app.listen(port,()=>{
    console.log(`server at http://localhost:${port}`)
})




