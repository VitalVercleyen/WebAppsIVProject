const mongoose = require("mongoose");
const config = require("../config/database");

// User Schema
const SpelletjeSchema = mongoose.Schema({
  creator: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },

  description: {
    type: String,
    required: true
  },
  minimumAge: {
    type: Number,
    required: true
  },
  maximumAge: {
    type: Number,
    required: true
  },
  place: {
    type: String,
    required: true
  },
  Duration: {
    type: Number,
    required: true
  },
  Players: {
    type: Number,
    required: true
  }
});

const Spelletje = (module.exports = mongoose.model(
  "Spelletje",
  SpelletjeSchema
));

module.exports.getSpelletjeByName = function(name, callback) {
  Spelletje.findByName(name, callback);
};

module.exports.addSpelletje = function(newSpelletje, callback) {
  newSpelletje.save(callback);
};

module.exports.getAllSpelletjes = function(callback) {
  Spelletje.find(callback);
};
