import * as dotenv from "dotenv";
dotenv.config();

import express from "express";
import cors from "cors";
import careerRouter from "./routes/careerRouter";
import userRouter from "./routes/userRouter";
import connectToDB from "./config/db";

const app = express();
const PORT = 8001;

// Connect mongodb
connectToDB();

// Middleware
app.use(cors());
app.use(express.json());

// Setup routes
app.use("/careers", careerRouter);
app.use("/admin", userRouter);

// Test Call Sever
app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(PORT, () => {
  console.log(`Server is listening at PORT ${PORT}`);
});
