import mongoose from "mongoose";
import config from "../config/config.js";

async function ConnectToDB(){
    try{
        await mongoose.connect(config.MONGODB_URI);
        console.log("Database is Connected");
    }catch(err){
        console.log("Database Connection Error: ", err);
        process.exit(1);
    }
}

export default ConnectToDB;