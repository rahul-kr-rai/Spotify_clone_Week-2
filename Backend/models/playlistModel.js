const mongoose = require('mongoose');

const playlistSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String },
  songs: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Song' }],
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
});

const Playlist = mongoose.model('Playlist', playlistSchema);
module.exports = Playlist;