// require ('.dotenv').config({path:'./env'})
import dotenv from "dotenv";
dotenv.config({ path: './.env' });

// import mongoose from "mongoose";
import express from "express";
// import {DB_NAME} from "./constants.js";
import connectDB from "./db/index.js"
import app from "./app.js";


connectDB()
.then(()=>{
    app.listen(process.env.PORT,()=>{
        console.log(`server running on port ${process.env.PORT}`);
    })
})
.catch((err)=>{
    console.log("MONGODB connection failed!!!",err);
})

























/*
(async()=>{
    try {
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)

        app.on("error",(error)=>{
            console.log("errr:",error)
            throw error
        })
        
        app.listen(process.env.PORT,()=>{
            console.log(`http://localhost:${process.env.PORT}`)
        })
    } 
    
    
    
    catch (error) {
        console.error("error",error);
        throw error
    }
})()
*/
