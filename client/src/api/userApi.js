import api from '../config/axios';

const BASE_URL = "/user";

export const registerUser = async (userData) => {
  const response = await api.post(`${BASE_URL}/register`, userData);
  return response.data;
};

export const loginUser = async (credentials) => {
  const response = await api.post(`${BASE_URL}/login`, credentials);
  return response.data;
};

export const getUser = async () => {
  const response = await api.get(BASE_URL);
  return response.data;
};

export const getUserById = async (id) => {
  const response = await api.get(`${BASE_URL}/${id}`);
  return response.data;
};

export const getFriends = async () => {
  const response = await api.get(`${BASE_URL}/friends`);
  return response.data;
};

export const getOtherUsers = async () => {
  const response = await api.get(`${BASE_URL}/otherPlayers`);
  return response.data;
};

export const addFriend = async (playerId) => {
  const response = await api.post(`${BASE_URL}/${playerId}/add-friend`);
  return response.data;
};

export const unFriend = async (friendId) => {
  const response = await api.delete(`${BASE_URL}/${friendId}/unfriend`);
  return response.data;
};

export const blockUser = async (userId) => {
  const response = await api.post(`${BASE_URL}/${userId}/block`);
  return response.data;
};
