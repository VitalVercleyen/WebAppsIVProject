const express = require("express");
const router = express.Router();
const User = require("../models/user");
const passport = require("passport");
const jwt = require("jsonwebtoken");

// Registreren
router.post("/register", (req, res, next) => {
  let newUser = new User({
    name: req.body.name,
    email: req.body.email,
    username: req.body.username,
    password: req.body.password
  });

  User.addUser(newUser, (err, user) => {
    if (err) {
      res.json({ succes: false, msg: "Failed to register user" });
    } else {
      res.json({ succes: true, msg: "User registered" });
    }
  });
});

// Authenticatie
router.post("/authenticate", (req, res, next) => {
  res.send("AUTHENTICATE");
});

// Profiel
router.get("/profile", (req, res, next) => {
  res.send("PROFILE");
});

module.exports = router;
