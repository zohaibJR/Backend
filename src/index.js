// Main entry point of the backend

import dotenv from "dotenv";
import mongoose from "mongoose";
import { DB_Name } from "./constant.js";
import connectDBFunction from "./db/index.js"; // ✅ Now correctly linked

// Load environment variables from ./env
dotenv.config({ path: "./env" });

// Connect to MongoDB
connectDBFunction();

/*
// --- Express app setup (uncomment when ready) ---

import express from "express";
const app = express();

(async () => {
  try {
    await mongoose.connect(`${process.env.MONGODB_URI}/${DB_Name}`);

    app.on("error", (error) => {
      console.log("Server Error:", error);
      throw error;
    });

    app.listen(process.env.PORT, () => {
      console.log(`🚀 App is running on Port ${process.env.PORT}`);
    });

  } catch (error) {
    console.error("Startup Error:", error);
    throw error;
  }
})();
*/
