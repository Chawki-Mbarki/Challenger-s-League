import api from '../config/axios';

const BASE_URL = "/message";

export const sendMessage = async (messageData) => {
  const response = await api.post(`${BASE_URL}/send`, messageData);
  return response.data;
};

export const getUserMessages = async () => {
  const response = await api.get(`${BASE_URL}/user-messages`);
  return response.data;
};

export const getConversation = async (otherUser) => {
  const response = await api.get(`${BASE_URL}/conversation/${otherUser._id}`);
  return response.data;
};
