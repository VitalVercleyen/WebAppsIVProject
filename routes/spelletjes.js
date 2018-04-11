const express = require("express");
const router = express.Router();
const config = require("../config/database");
const Spelletje = require("../models/spelletje");

// Save
router.post("/save", (req, res, next) => {
  let newSpelletje = new Spelletje({
    creator: req.body.creator,
    name: req.body.name,
    description: req.body.description,
    minimumAge: req.body.minimumAge,
    maximumAge: req.body.maximumAge,
    place: req.body.place,
    Duration: req.body.Duration,
    Players: req.body.Players
  });

  Spelletje.addSpelletje(newSpelletje, (err, spelletje) => {
    if (err) {
      res.json({ succes: false, msg: "Toevoegen spelletje mislukt" });
    } else {
      res.json({ succes: true, msg: "Toevoegen spelletje voltooid" });
    }
  });
});

// Profile
router.get("/getSpelletjes", (req, res, next) => {
  Spelletje.getAllSpelletjes((err, spelletjes) => {
    if (err) throw err;
    res.json(spelletjes);
  });
});

module.exports = router;
