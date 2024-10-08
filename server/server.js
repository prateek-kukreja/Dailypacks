import dotenv from "dotenv";
dotenv.config();
import express from "express";
import mongoose from "mongoose";
import { router as authRouter } from "./routes/authRoutes.js";
import { cartRouter } from "./routes/cartRoutes.js";

import cors from "cors";

// express app
const app = express();

const port = process.env.PORT;

// middlewares
app.use(express.urlencoded({ extended: true })); // middleware which fetches the form data
app.use(express.json());
app.use(cors());

// database connection
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    console.log("successfully connected to database");
  })
  .catch((err) => {
    console.log("database connection failed", err);
  });

// listening to port
app.listen(port, () => {
  console.log("listening for requests on port", process.env.PORT);
});

app.use("/api/auth", authRouter);
app.use("/api", cartRouter);
