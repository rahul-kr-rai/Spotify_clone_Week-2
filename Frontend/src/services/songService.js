import axios from 'axios';

const API_URL = 'http://localhost:5000/api/songs/';

const createSong = (songData, token) => {
  return axios.post(API_URL, songData, {
    headers: { Authorization: `Bearer ${token}` },
  });
};

const getSongs = (token) => {
  return axios.get(API_URL, {
    headers: { Authorization: `Bearer ${token}` },
  });
};

const updateSong = (id, songData, token) => {
  return axios.put(API_URL + id, songData, {
    headers: { Authorization: `Bearer ${token}` },
  });
};

const deleteSong = (id, token) => {
  return axios.delete(API_URL + id, {
    headers: { Authorization: `Bearer ${token}` },
  });
};

export default {
  createSong,
  getSongs,
  updateSong,
  deleteSong,
};