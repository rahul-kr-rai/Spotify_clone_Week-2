const Playlist = require('../models/playlistModel');

// Create a new playlist
exports.createPlaylist = async (req, res) => {
    const { name, description, songs } = req.body;
    try {
        const playlist = new Playlist({ name, description, songs, user: req.user.id });
        await playlist.save();
        res.status(201).json(playlist);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Get all playlists for a user
exports.getPlaylists = async (req, res) => {
    try {
        const playlists = await Playlist.find({ user: req.user.id }).populate('songs');
        res.json(playlists);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Update a playlist
exports.updatePlaylist = async (req, res) => {
    const { id } = req.params;
    try {
        const playlist = await Playlist.findByIdAndUpdate(id, req.body, { new: true }).populate('songs');
        res.json(playlist);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Delete a playlist
exports.deletePlaylist = async (req, res) => {
    const { id } = req.params;
    try {
        await Playlist.findByIdAndDelete(id);
        res.json({ message: 'Playlist deleted' });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};