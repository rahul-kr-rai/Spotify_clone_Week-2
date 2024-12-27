const mongoose = require('mongoose');

const songSchema = new mongoose.Schema({
  title: { type: String, required: true },
  artist: { type: String, required: true },
  album: { type: String },
  year: { type: Number },
  genre: { type: String },
  duration: { type: Number },
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
});

const Song = mongoose.model('Song', songSchema);
module.exports = Song;