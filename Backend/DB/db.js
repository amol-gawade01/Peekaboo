import mongoose from "mongoose";

export const  connectToDb = () =>{
       mongoose.connect(process.env.db_connect)
       .then(()=>{
        console.log("Connected to Databse");
       })
}