import express from "express";
const router = express.Router();
import { User } from "../models/userModel.js";
import jwt from "jsonwebtoken";

const createToken = (_id) => {
  return jwt.sign({ _id }, process.env.SECRET_KEY, { expiresIn: "1d" });
};

// register route
router.post("/register", async (req, res) => {
  const { name, email, password } = req.body;

  try {
    const userData = await User.register(name, email, password);

    // create a token
    const token = createToken(userData._id);

    res.status(201).json({ name, email, token });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// login route
router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    const userData = await User.login(email, password);

    // create a token
    const token = createToken(userData._id);

    res.status(200).json({ email, token });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

export { router };
