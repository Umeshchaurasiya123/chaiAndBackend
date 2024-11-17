import mongoose  from "mongoose";

const productSchema=new mongoose.Schema({

    description:{

        required:true,
        type:String,

    },

    name:{

        required:true,
        type:String
    },

    productImage:{
    // imahe shoud usually not to be store in database. image , pdf are kind of buffer valeus. 
    // this kind of thing usally stored in your own server or 3rd party server. who gave you  url of that images. 
    // exapmle is cloudnary where we stores the images , video and in respoce it gives us url in string formate. 
    type:String
    },


    price:{
        type:Number, 
        default:0


    },

    stock:{
        default:0,
        type:Number  
    },

    category:{
            type:mongoose.Schema.Types.ObjectId,
            ref:"Category",
            required:true,
    },

    owner:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User'

    }
    

},{timestamps:true})


export const User=mongoose.model("User",userSchema)

