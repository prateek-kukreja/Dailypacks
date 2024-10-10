import jwt from "jsonwebtoken";
import { User } from "../models/userModel.js";

const authenticateToken = async (req, res, next) => {
  // Get the token from the request header
  const token = req.header("Authorization")?.split(" ")[1];
  console.log(token);

  if (!token) {
    return res
      .status(401)
      .json({ message: "Access Denied. No token provided." });
  }

  try {
    // Verify the token
    const { _id } = jwt.verify(token, process.env.SECRET_KEY);

    const user = await User.findOne({ _id });
    if (!user) {
      return res.status(401).json({ message: "User not found." });
    }

    // Attach user information to the request object
    req.user = user;

    next();
  } catch (error) {
    console.error("Token verification error:", error); // Log the error for debugging
    return res.status(403).json({ message: "Invalid or expired token." });
  }
};

export { authenticateToken };
