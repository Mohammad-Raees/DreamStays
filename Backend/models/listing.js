const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const listeningSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: String,
  image: {
    filename: String,
    url: {
      type: String,
      default:
        "https://images.unsplash.com/photo-1500485035595-cbe6f645feb1?q=80&w=687&auto=format&fit=crop",
    },
  },
  price: Number,
  location: String,
  country: String,
});

const Listing = mongoose.model("Listing", listeningSchema);
module.exports = Listing;
