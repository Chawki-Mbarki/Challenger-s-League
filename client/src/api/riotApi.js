import api from '../config/axios';

export const fetchChampionsFromRiot = async () => {
  const response = await api.get("/champions");
  return response.data;
};

export const fetchChampionByName = async (championName) => {
  const response = await api.get(`/champions/${championName}`);
  return response.data;
};
