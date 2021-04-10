import api from "./api";

const userApi = {
  register(data) {
    const url = "/register";
    return api.post(url, data);
  },
  login(data) {
    const url = "/login";
    return api.post(url, data);
  },
  getUser(id) {
    const url = `/users/${id}`;
    return api.get(url);
  },
};

export default userApi;
