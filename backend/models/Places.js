const mongoose = require("mongoose");

const PlaceSchema = new mongoose.Schema({
  owner: {
    type: mongoose.Types.ObjectId,
    ref: "User",
  },
  title: {
    type: String,
  },
  address: {
    type: String,
  },
  photos: {
    type: [String],
  },
  description: {
    type: String,
  },
  perksCollection: {
    type: [String],
  },
  extraInfo: {
    type: String,
  },
  checkIn: {
    type: Number,
  },
  checkOut: {
    type: Number,
  },
  maxGuest: {
    type: Number,
  },
  price: {
    type: Number,
  },
});

module.exports = mongoose.model("Place", PlaceSchema);
