const asyncHandler = require("express-async-handler");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../models/userModel");

const registerUser = asyncHandler(async (req, res) => {
  console.log(req.body); // Log the request body to check if data is coming through

  const { username, email, password } = req.body; // Extract picture from req.body

  // Check for mandatory fields
  if (!username || !email || !password) {
    res.status(400);
    throw new Error("All fields are mandatory");
  }

  // Check if user already exists
  const userAvailable = await User.findOne({ email });
  if (userAvailable) {
    res.status(400);
    throw new Error("User already exists");
  }

  // Hash the password
  const hashedPassword = await bcrypt.hash(password, 10);

  // Create the user with or without picture
  const user = await User.create({
    username,
    email,
    password: hashedPassword,
    picture: req.file.filename || null, // Store picture if provided, otherwise null
  });

  if (user) {
    res.status(201).json({
      _id: user.id,
      email: user.email,
      picture: user.picture, // Return the picture (if any)
    });
  } else {
    res.status(400);
    throw new Error("User data not valid");
  }
});

const loginUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    res.status(400);
    throw new Error("All feilds and mandatory");
  }

  const user = await User.findOne({ email });

  if (user && (await bcrypt.compare(password, user.password))) {
    const accesstoken = jwt.sign(
      {
        user: {
          username: user.username,
          email: user.email,
          id: user.id,
        },
      },
      process.env.ACCESS_TOKEN_SECRET
      // { expiresIn: "15m" }
    );
    res.status(200).json({ accesstoken });
  } else {
    res.status(401);
    throw new Error("Email or password is not valid");
  }

  res.json({ message: "login the user" });
});

const currentUser = asyncHandler(async (req, res) => {
  res.json(req.user);
  console.log(req.user, req.file);
});

module.exports = { registerUser, loginUser, currentUser };
