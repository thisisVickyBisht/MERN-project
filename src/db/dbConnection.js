import mongoose from "mongoose";
import {DB_NAME} from "../constants.js"


export const connectDB = async ()=>{
    try{    
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
    }
    catch(error){
        console.log("MongoDB Connection Error", error.message)
    }
}