const Song = require('../models/songModel');

// Create a new song
exports.createSong = async (req, res) => {
    const { title, artist, album, year, genre, duration } = req.body;
    try {
        const song = new Song({ title, artist, album, year, genre, duration, user: req.user.id });
        await song.save();
        res.status(201).json(song);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Get all songs
exports.getSongs = async (req, res) => {
    try {
        const songs = await Song.find({ user: req.user.id });
        res.json(songs);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Get a single song by ID
exports.getSongById = async (req, res) => {
    try {
        const song = await Song.findById(req.params.id);
        if (!song) return res.status(404).json({ message: 'Song not found' });
        res.status(200).json(song);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Update a song by ID
exports.updateSong = async (req, res) => {
    const { id } = req.params;
    try {
        const song = await Song.findByIdAndUpdate(id, req.body, { new: true });
        res.json(song);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Delete a song by ID
exports.deleteSong = async (req, res) => {
    const { id } = req.params;
    try {
        await Song.findByIdAndDelete(id);
        res.json({ message: 'Song deleted' });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};