import mongoose from "mongoose";
import {DB_NAME} from "../constants.js";

const connectDB = async()=>{

    try {
        // mongoose ap ko aik retuirn object deta hy to ap is ko kisi bhi variable myn store kr skty history, yani ab us variable myn response hy

        const connectionInstance=await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)

        // database production ka development ka testing ka alg hota hy to agr glti se kisi or database py host ho ajyein to pta ho
        console.log(`\n MongoDB connection DB host:${connectionInstance.connection.host}`)
        
    } catch (error) {
        console.error("error",error)
        throw error
        // process hmary nodejs myn hota hy isy khin bhi use kr skty withour package install kisy, hmari jo current application hy vo kisi na kisi process py chl ri ho gi ye us ka reference hy
        process.exit(1)
    }
    
}

export default connectDB;