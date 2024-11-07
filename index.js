const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyparser = require("body-parser");
const bcrypt = require("bcrypt");
const crypto = require("crypto");
const jwt = require("jsonwebtoken");

const User = require("./models/users.model");
const Transaction = require("./models/transactions.model");

require("dotenv").config();

const app = express();
const port = process.env.PORT || 5000;
app.use(cors());
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: false }));

const hashPassword = async (password) => {
  const hashedPassword = await bcrypt.hash(password, 10);
  return hashedPassword;
};

app.get("/", (req, res) => {
  res.send("Hello");
});

app.post("/register", async (req, res) => {
  try {
    const { email, password } = req.body;

    const registredUser = await User.findOne({ email });

    if (registredUser) {
      return res.json({
        message: `E-mail: ${email} already registered`,
      });
    }

    console.log(req.body);
    const hashedPassword = await hashPassword(password);
    req.body.password = hashedPassword;

    const newUser = await new User(req.body);
    await newUser.save();
    res.status(200).json({ message: "Success", newUser });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Registration failed" });
  }
});

app.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });

    if (!user) {
      return res.json({ message: "Invalid User" });
    }

    const passwordMatch = await bcrypt.compare(password, user.password);

    if (!passwordMatch) {
      return res.json({ message: "Incoorrect Password" });
    }

    res.send({ message: "Success", user });
  } catch (error) {
    console.log(error);
    res.json({ message: "error" });
  }
});

app.get("/getUserData/:id", async (req, res) => {
  const { id } = req.params;
  console.log(id);
  const userData = await User.findOne({ _id: id });
  console.log(userData, id);
  res.status(200).json({ userData });
});

mongoose.connect(process.env.MONGODB_URI).then(() => {
  console.log("Database connected succesfully 🎉🎉");
  app.listen(port, "0.0.0.0", () => {
    console.log(`Srver listening on port ${port}`);
  });
});
