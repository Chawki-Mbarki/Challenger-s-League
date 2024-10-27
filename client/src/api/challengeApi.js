import api from "../config/axios";

const BASE_URL = "/challenge";

export const createChallenge = async (challengeData) => {
  const response = await api.post(BASE_URL, challengeData);
  return response.data;
};

export const getChallengesAsOpponent = async () => {
  const response = await api.get(BASE_URL);
  return response.data;
};

export const updateChallenge = async (id, updateData) => {
  const response = await api.put(`${BASE_URL}/${id}`, updateData);
  return response.data;
};

export const getChallenge = async (id) => {
  const response = await api.get(`${BASE_URL}/${id}`);
  return response.data;
};

export const getActiveChallenge = async () => {
  const response = await api.get(`${BASE_URL}/active`);
  return response.data;
};

export const deleteChallenge = async (id) => {
  const response = await api.delete(`${BASE_URL}/${id}`);
  return response.data;
};
