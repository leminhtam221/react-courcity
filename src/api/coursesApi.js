import api from "./api";

const coursesApi = {
  getAll(params) {
    const url = "/courses";
    return api.get(url, { params });
  },
  getDetail(id, params) {
    const url = `/courses/${id}`;
    return api.get(url, { params });
  },
  addCourse(data) {
    const url = `/courses/`;
    return api.post(url, data);
  },
  deleteCourse(id) {
    const url = `/courses/${id}`;
    return api.delete(url);
  },
};

export default coursesApi;
