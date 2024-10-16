import api from '../config/axios';

const BASE_URL = "/match";

export const createMatch = async (matchData) => {
  const response = await api.post(`${BASE_URL}`, matchData);
  return response.data;
};

export const getMatchHistory = async () => {
  const response = await api.get(`${BASE_URL}/history`);
  return response.data;
};
