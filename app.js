const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const cors = require("cors");
const passport = require("passport");
const mongoose = require("mongoose");
const config = require("./config/database");

// Connectie Database
mongoose.connect(config.database);

mongoose.connection.on("connected", () => {
  console.log("Connected to database " + config.database);
});

mongoose.connection.on("error", err => {
  console.log("Database error: " + err);
});

const app = express();

const users = require("./routes/users");

// Poort Nummer
const port = 3000;

// Cors Middleware
app.use(cors());

// Set Static Map
app.use(express.static(path.join(__dirname, "public")));

// Body Parser Middleware
app.use(bodyParser.json());

// Passport MiddleWare
app.use(passport.initialize());
app.use(passport.session());

require("./config/passport")(passport);

app.use("/users", users);

// Index
app.get("/", (req, res) => {
  res.send("Invalid Endpoint");
});

// Start Server
app.listen(port, () => {
  console.log("Server started on port " + port);
});
