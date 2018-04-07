const express = require("express");
const router = express.Router();

// Registreren
router.get("/register", (req, res, next) => {
  res.send("REGISTER");
});

// Authenticatie
router.post("/authenticate", (req, res, next) => {
  res.send("AUTHENTICATE");
});

// Profiel
router.get("/profile", (req, res, next) => {
  res.send("PROFILE");
});

// Validatie
router.get("/validate", (req, res, next) => {
  res.send("VALIDATE");
});

module.exports = router;
