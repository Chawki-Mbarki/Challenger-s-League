import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:8000/api", //! Use this on your local machine: the server and client cannot run on the same port
  /* baseURL: `${window.location.origin}/api`, */ //! Use this on a server: you don't have to manually update the ports when deploying
});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default api;
