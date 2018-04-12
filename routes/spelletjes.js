const express = require("express");
const router = express.Router();
const config = require("../config/database");
const Spelletje = require("../models/spelletje");

// Save
router.post("/save", (req, res, next) => {
  let newSpelletje = new Spelletje({
    creator: req.body.creator.toLowerCase(),
    name: req.body.name.toLowerCase(),
    description: req.body.description,
    minimumAge: req.body.minimumAge,
    maximumAge: req.body.maximumAge,
    place: req.body.place.toLowerCase(),
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

router.get("/getSpelletjeOnName/:name", (req, res, next) => {
  Spelletje.getSpelletjeByName(req.params.name, (err, spelletje) => {
    if (err) throw err;
    res.json(spelletje);
  });
});

router.get("/getSpelletjeLike/:param", (req, res, next) => {
  Spelletje.getSpelletjesLike(req.params.param, (err, spelletjes) => {
    if (err) throw err;
    res.json(spelletjes);
  });
});
router.get("/getRandomSpelletje", (req, res, next) => {
  Spelletje.getRandomSpelletje((err, spelletjes) => {
    if (err) throw err;
    res.json(spelletjes);
  });
});

router.get("/getSpelletjeOnUsername/:param", (req, res, next) => {
  Spelletje.getSpelletjeOnUsername(req.params.param, (err, spelletjes) => {
    if (err) throw err;
    res.json(spelletjes);
  });
});

module.exports = router;
