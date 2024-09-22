import mongoose from "mongoose";

const dbConnection = async () => {

    const DB_URI = "mongodb+srv://admin:admin@job-portal.fxy1e.mongodb.net/"
    try {
        await mongoose.connect(DB_URI, { useunifiedTopology: true });
        console.log("Connected to MongoDB successfully");
    }catch(e) {
        console.error(`Error connecting to MongoDB: ${e.message}`);
                process.exit(1);
    }
}

export default dbConnection;