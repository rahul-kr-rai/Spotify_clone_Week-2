const express = require('express');
const { createSong, getSongs, updateSong, deleteSong } = require('../controllers/songController');
const authMiddleware = require('../middleware/authMiddleware');

const router = express.Router();

router.post('/', authMiddleware, createSong);
router.get('/', authMiddleware, getSongs);
router.put('/:id', authMiddleware, updateSong);
router.delete('/:id', authMiddleware, deleteSong);

module.exports = router;