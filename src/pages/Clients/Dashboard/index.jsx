import coursesApi from "api/coursesApi";
import SpinnerLoading from "components/Clients/Loading/SpinerLoading";
import React, { useCallback, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Banner from "./components/banner";
import MainWrap from "./components/main-wrap";
import Profile from "./components/profile";
import swal from "sweetalert";
import categoryApi from "api/categoryApi";
import axios from "axios";

function DashBoardPage(props) {
  const user = useSelector((state) => state.user.user);
  const [course, setCourse] = useState([]);
  const [category, setCategory] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchApi = useCallback(async () => {
    const params = {
      _expand: "users",
      usersId: user.id,
      _order: "desc",
      _sort: "id",
    };
    const courseData = await coursesApi.getAll(params);
    setCourse(courseData.data);
  }, [user.id]);

  useEffect(() => {
    setLoading(true);
    fetchApi();
    setLoading(false);
  }, [user.id, fetchApi]);

  useEffect(() => {
    const fetchCategory = async () => {
      const categoryData = await categoryApi.getAll();
      setCategory(categoryData.data);
    };
    fetchCategory();
  }, []);

  const handleDeleteCourse = async (idCourse) => {
    setLoading(true);
    const response = await coursesApi.deleteCourse(idCourse);
    if (response.status === 200) {
      swal({
        title: "Delete success",
        icon: "success",
      });
      fetchApi();
    }
    setLoading(false);
  };

  const handleSubmit = async (value) => {
    setLoading(true);
    if (value.file) {
      const api = "https://api.imgbb.com/1/upload";
      const key = "3a9540d4e77556c6cc7eae5623f73afe";
      const formData = new FormData();
      formData.append("image", value.file);
      const response = await axios.post(`${api}`, formData, { params: { key } });
      const imageLinkResponse = response.data.data.url;

      const data = {
        ...value,
        course_image: imageLinkResponse,
        usersId: user.id,
        enroll: 0,
      };
      const addCourse = await coursesApi.addCourse(data);
      if (addCourse) {
        swal({
          title: "Add success",
          icon: "success",
        });
      }
      fetchApi();
    } else {
      const data = { ...value, course_image: "", usersId: user.id, enroll: 0 };
      delete data.file;
      const addCourse = await coursesApi.addCourse(data);
      if (addCourse) {
        swal({
          title: "Add success",
          icon: "success",
        });
      }
      fetchApi();
    }
    setLoading(false);
  };

  return (
    <React.Fragment>
      {loading && <SpinnerLoading />}
      <Banner />
      <div className='container my-3'>
        <div className='row'>
          <Profile user={user} />
          <MainWrap
            course={course}
            onDeleteCourse={handleDeleteCourse}
            category={category}
            onSubmit={handleSubmit}
          />
        </div>
      </div>
    </React.Fragment>
  );
}

export default DashBoardPage;
