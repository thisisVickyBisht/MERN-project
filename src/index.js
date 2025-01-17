import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./db/dbConnection.js";

const app = express();
dotenv.config();
const PORT = process.env.PORT || 5000;


//connect MONGODB
connectDB()

// Routes
app.get("/", (req, res) => {
  res.send("Hello, World!");
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
