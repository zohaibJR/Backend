// Main entry point of the backend

import dotenv from "dotenv";
import mongoose from "mongoose";
import { DB_Name } from "./constant.js";
import connectDBFunction from "./db/index.js"; // ✅ Now correctly linked

// Load environment variables from ./env
dotenv.config({ path: "./env" });

// Connect to MongoDB
connectDBFunction()
.then( () => {
  app.listen(process.env.PORT || 8000, () => {
    console.log(`Server is running at Port : ${process.env.PORT}`)
  })
})
.catch((err) => {
  console.log("Mango DB Connection failed ",err);
})