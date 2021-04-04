import categoryApi from "api/categoryApi";
import coursesApi from "api/coursesApi";
import CardLoaing from "components/Clients/Loading/CardLoading";
import { importCustomScript } from "helper/customScript";
import useImportScript from "hooks/importCustomScript";
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

  useEffect(() => {
    const fetchApiData = async () => {
      setLoading(true);
      try {
        const categoryData = await categoryApi.getAll();
        setCategoryList(categoryData.data);
      } catch (error) {}
      setLoading(false);
    };
    fetchApiData();
  }, []);

  useEffect(() => {
    let script;

    const fetchListCourse = async () => {
      setLoading(true);

      try {
        const courseData = await coursesApi.getAll({ ...filter });
        setCourseList(courseData.data);
      } catch (error) {}

      setLoading(false);
      script = importCustomScript();
    };

    fetchListCourse();

    return () => {
      document.body.removeChild(script);
    };
  }, [filter]);

  useImportScript();

  const categoryLimit = [];
  if (categoryList.length > 0) {
    for (let i = 0; i < 5; i++) {
      categoryLimit.push(categoryList[i]);
    }
  }

  return (
    <React.Fragment>
      <Banner categoryList={categoryList} />
      <Category categoryList={categoryLimit} />
      {loading ? (
        <CardLoaing col={3} length={filter._limit} />
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

export default HomePage;
