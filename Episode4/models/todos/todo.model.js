import mongoose, { model }  from "mongoose";

const todoSchema=new mongoose.Schema({

    content:{

        type:String, 
        required:true,

    },

    complete:{
        type:Boolean, 
        default:false

    },

    createdBy:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
        // we alease give ref which is mention in mongoose.model("User",userSchema)

    },

    subTodos:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"SubTodo"

    }] // array of subtodos


},{timestamps:true})

export const Todo=mongoose.model("Todo,todoSchema")

