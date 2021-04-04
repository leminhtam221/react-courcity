import api from "./api";

const coursesApi = {
  getAll(params) {
    const url = "/courses";
    return api.get(url, { params });
  },
};

export default coursesApi;