import "dotenv/config"

if(!process.env.PORT){
    console.log("PORT is not set in the env");
}

if(!process.env.MONGODB_URI){
    console.log("MONGODB_URI is not set in the env");
}

const config = {
    PORT: process.env.PORT,
    MONGODB_URI: process.env.MONGODB_URI
}

export default config;