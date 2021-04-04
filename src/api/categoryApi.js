import api from "./api";

const categoryApi = {
  getAll(params) {
    const url = "/categories";
    return api.get(url, { params });
  },
};

export default categoryApi;
