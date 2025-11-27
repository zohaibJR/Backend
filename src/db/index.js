// Database connection logic

import mongoose from "mongoose";
import { DB_Name } from "../constant.js"; // ✅ Corrected path (one folder up)

const connectDBFunction = async () => {
  try {
    // Connect to MongoDB using environment variable and database name
    const connectionInstance = await mongoose.connect(
      `${process.env.MONGODB_URI}/${DB_Name}`
    );

    console.log(`\n✅ MongoDB Connected! DB Host: ${connectionInstance.connection.host}`);
  } catch (error) {
    console.error("❌ MongoDB Connection Error:", error);
    process.exit(1); // Stop the app if DB connection fails
  }
}; 

export default connectDBFunction;
