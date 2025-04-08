import User from "../Models/User.model.js";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";

export const Signup = async (req, res, next) => {
  const { username, email, password } = req.body;

  try {
    if (!username || username.trim() === "") {
      return res.status(400).json({ message: "Username is required" });
    }

    if (!email || email.trim() === "") {
      return res.status(400).json({ message: "Email is required" });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ message: "Invalid email format" });
    }

    if (!password || password.trim() === "") {
      return res.status(400).json({ message: "Password is required" });
    }

    if (password.length < 6) {
      return res
        .status(400)
        .json({ message: "Password must be at least 6 characters long" });
    }

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(409).json({ message: "User already exists" });
    }

    const hashedPassword = bcryptjs.hashSync(password, 10);

    const newUser = new User({
      username,
      email,
      password: hashedPassword,
    });

    await newUser.save();
    res.status(201).json({ message: "User created successfully" });
  } catch (error) {
    next(error);
  }
};

export const Login = async (req, res, next) => {
  const { email, password } = req.body;

  try {
    if (!email || !password) {
      return res
        .status(400)
        .json({ message: "Email and password are required" });
    }
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    const isPasswordValid = bcryptjs.compareSync(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).json({ message: "Incorrect password" });
    }
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "1d",
    });

    res
      .cookie("access_token", token, {
        httpOnly: true,
        sameSite: "strict",
        secure: process.env.NODE_ENV === "production",
      })
      .status(200)
      .json({
        message: "Login successful",
        user: {
          id: user._id,
          email: user.email,
          username: user.username,
        },
      });
  } catch (error) {
    next(error);
  }
};

export const Logout = (req, res) => {
  try {
    res
      .clearCookie("access_token", {
        httpOnly: true,
        sameSite: "strict",
        secure: process.env.NODE_ENV === "production",
      })
      .status(200)
      .json({ message: "Logged out successfully" });
  } catch (error) {
    return next(error);
  }
};
