import categoryApi from "api/categoryApi";
import coursesApi from "api/coursesApi";
import CardLoaing from "components/Clients/Loading/CardLoading";
import { reReRenderScript } from "helper/re-render-script";
import useImportScript from "hooks/import-custom-script";
import React, { useEffect, useState } from "react";
import AchiveGoal from "./components/achive-goal";
import Banner from "./components/banner";
import Category from "./components/category";
import Client from "./components/client";
import LearningPath from "./components/learning-path";
import Testimonial from "./components/testimonial";
import TopCourses from "./components/top-courses";

function HomePage() {
  const [loading, setLoading] = useState(false);
  const [courseList, setCourseList] = useState([]);
  const [categoryList, setCategoryList] = useState([]);
  const [filter] = useState({
    _sort: "enroll",
    _order: "desc",
    _limit: 8,
    _expand: "teacher",
  });

  useImportScript();

  useEffect(() => {
    const fetchApiData = async () => {
      try {
        const categoryData = await categoryApi.getAll();
        setCategoryList(categoryData.data);
      } catch (error) {}
    };
    fetchApiData();
  }, []);

  useEffect(() => {
    const fetchListCourse = async () => {
      setLoading(true);

      try {
        const courseData = await coursesApi.getAll({ ...filter });
        setCourseList(courseData.data);
      } catch (error) {}

      reReRenderScript();
      setLoading(false);
    };

    fetchListCourse();
  }, [filter]);

  const categoryLimit = [];
  if (categoryList.length > 0) {
    for (let i = 0; i < 5; i++) {
      categoryLimit.push(categoryList[i]);
    }
  }

  return (
    <React.Fragment>
      <Banner categoryList={categoryList} />
      <Category categoryList={categoryLimit} loading={loading} />
      {loading ? (
        renderLoading(filter._limit)
      ) : (
        <TopCourses courseList={courseList} categoryList={categoryLimit} />
      )}
      <AchiveGoal />
      <LearningPath />
      <Testimonial />
      <Client />
    </React.Fragment>
  );
}

const renderLoading = (length) => {
  return (
    <div className='container'>
      <div className='row'>
        <CardLoaing col={3} length={length} />
      </div>
    </div>
  );
};

export default HomePage;
