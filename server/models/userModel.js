import mongoose from "mongoose";
import bcrypt from "bcryptjs";

// create schema
const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      require: true,
    },
    email: {
      type: String,
      require: true,
      unique: true,
      lowercase: true,
    },
    password: {
      type: String,
      require: true,
      minLength: 6,
    },
  },
  { timestamps: true } // if we set it to true we'll get createdAt and updatedAt properties automatically
);

// static register method
userSchema.statics.register = async function (name, email, password) {
  if (!email || !password || !name) {
    throw Error("All field must be valid");
  }

  const exists = await this.findOne({ email });

  if (exists) {
    throw Error("Email already in use");
  }

  const saltRound = await bcrypt.genSalt(8);
  const hashedPassword = await bcrypt.hash(password, saltRound);

  const userData = await this.create({
    name,
    email,
    password: hashedPassword,
  });

  return userData;
};

// static login method
userSchema.statics.login = async function (email, password) {
  if (!email || !password) {
    throw Error("All field must be valid");
  }

  const user = await this.findOne({ email });

  if (!user) {
    throw Error("User does not exist.");
  }

  const matchPassword = await bcrypt.compare(password, user.password);

  if (!matchPassword) {
    throw Error("Invalid password");
  }
  return user;
};

// 1st argument is model name that's pluralized to collection name, 2nd argument is the schema
const User = mongoose.model("User", userSchema);

export { User };
