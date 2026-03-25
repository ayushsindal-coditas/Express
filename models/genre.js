const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const genreSchema = new Schema({
  name: { type: String, required: true }
});

genreSchema.virtual("displayGenre").get(function () {
  return this.name;
});

module.exports = mongoose.model("Genre", genreSchema);