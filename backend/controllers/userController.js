const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const asyncHandler = require("express-async-handler");
const User = require("../models/userModel");

//register new user
//POST api/users/
const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    res.status(400);
    throw new Error("please add all feilds");
  }

  //check if user already exists
  const userExits = await User.findOne({ email });

  if (userExits) {
    res.status(400);
    throw new Error("user already exist");
  }

  //Hash password

  //The genSalt() function takes a number as an argument, which represents the number of rounds of processing that will be used to generate the salt.
  //salt is a random string of characters that is added to a password before it is hashed
  //bcrypt.genSalt(10) is generating a salt with 10 rounds of processing.

  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  //create the user

  const user = await User.create({
    name,
    email,
    password: hashedPassword,
  });

  if (user) {
    res.status(201).json({
      _id: user.id,
      name: user.name,
      email: user.email,
    });
  } else {
    res.status(400);
    throw new Error("Invalid user data");
  }
});

//authenticate user
//POST api/users/login
const loginUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  //check for user email
  const user = await User.findOne({ email });

  //If the passwords match, the compare() method returns true
  if (user && (await bcrypt.compare(password, user.password))) {
    res.json({
      _id: user.id,
      name: user.name,
      email: user.email,
    });
  } else {
    res.status(400);
    throw new Error("Invalid user data");
  }
});

//get user data
//GET api/users/me
const getMe = asyncHandler(async (req, res) => {
  res.send("uer data display");
});

module.exports = { registerUser, loginUser, getMe };
