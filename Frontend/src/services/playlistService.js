import axios from 'axios';

const API_URL = 'http://localhost:5000/api/playlists/';

const createPlaylist = (playlistData, token) => {
  return axios.post(API_URL, playlistData, {
    headers: { Authorization: `Bearer ${token}` },
  });
};

const getPlaylists = (token) => {
  return axios.get(API_URL, {
    headers: { Authorization: `Bearer ${token}` },
  });
};

const updatePlaylist = (id, playlistData, token) => {
  return axios.put(API_URL + id, playlistData, {
    headers: { Authorization: `Bearer ${token}` },
  });
};

const deletePlaylist = (id, token) => {
  return axios.delete(API_URL + id, {
    headers: { Authorization: `Bearer ${token}` },
  });
};

export default {
  createPlaylist,
  getPlaylists,
  updatePlaylist,
  deletePlaylist,
};