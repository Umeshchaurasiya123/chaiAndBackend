import  mongoose  from "mongoose";


const orderItemsSchema=new mongoose.Schema({

    prodctId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Product"
    },

    quantity:{
        type:'Number',
        required:true
    }

})


const orderSchema=new mongoose.Schema({

    orderPrice:{
        type:Number,
        required:true
    },

    customer:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
    },

    // order id is array as there can be multiple product and each product can have multiple quantity. 

    orderItems:{
        type:[orderItemsSchema]
    },

    address:{
        type:String,
        required:true
    },

    status:{
        type:String, 
        enum:["PENDING","CANCELLED","DELIVERED"],
        default:"PENDING"

    }
    


},{timeseries:true})


export const Order=mongoose.model("Order",orderSchema)
