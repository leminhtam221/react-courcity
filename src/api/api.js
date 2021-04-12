import axios from "axios";

const api = axios.create({
  baseURL: "https://courcity-json-server.herokuapp.com/",
});

export default api;
