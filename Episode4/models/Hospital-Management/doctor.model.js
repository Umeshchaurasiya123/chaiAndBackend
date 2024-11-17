import mongoose from "mongoose";

const hospitalWorkingHourSchema=new mongoose.Schema({

    hospitalId:{
        type:mongoose.Schema.Types.ObjectId,

        ref:"Hospital"

    },

    WorkingHour:{
        type:Number,
        required:true,
        default:0

    }

})


const doctorSchema=new mongoose.Schema({

    name:{
        type:String, 
        required:true
    },

    salary:{
        type:String,
        required:true
    },
    qualification:{
        type:String,
        required:true
    },
    experienceInYears:{

        type:Number,
        default:0
    },

    worksInHospitals:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Hospital",
    }],

    hospitalWorkingHour:[{hospitalWorkingHourSchema}] 


},{timestamps:true})


export const Doctor=mongoose.model("Doctor",doctorSchema)