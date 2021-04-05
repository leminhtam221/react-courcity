import categoryApi from "api/categoryApi";
import coursesApi from "api/coursesApi";
import { reReRenderScript } from "helper/re-render-script";
import useImportScript from "hooks/import-custom-script";
import React, { useEffect, useState } from "react";
import Banner from "./components/banner";
import MainContainer from "./components/main-container";

function CoursesPage() {
  const [loading, setLoading] = useState(true);
  const [courseList, setCourseList] = useState([]);
  const [categoryList, setCategoryList] = useState([]);
  const [filter, setFilter] = useState({
    _sort: "id",
    _order: "desc",
    _limit: 6,
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

  return (
    <React.Fragment>
      <Banner />
      <MainContainer courseList={courseList} loading={loading} />
    </React.Fragment>
  );
}

export default CoursesPage;
