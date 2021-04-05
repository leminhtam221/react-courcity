import categoryApi from "api/categoryApi";
import coursesApi from "api/coursesApi";
import { reReRenderScript } from "helper/re-render-script";
import useImportScript from "hooks/import-custom-script";
import React, { useEffect, useState } from "react";
import { useHistory, useLocation } from "react-router";
import Banner from "./components/banner";
import MainContainer from "./components/main-container";
import queryString from "query-string";

function CoursesPage() {
  const history = useHistory();
  const location = useLocation();
  const queryParams = queryString.parse(location.search);

  const [loading, setLoading] = useState(true);
  const [courseList, setCourseList] = useState([]);
  const [categoryList, setCategoryList] = useState([]);
  const [filter, setFilter] = useState(() => ({
    ...queryParams,
    _sort: queryParams._sort || "id",
    _order: queryParams._order || "desc",
    _expand: queryParams._expand || "teacher",
    _page: parseInt(queryParams._page) || 1,
    _limit: parseInt(queryParams._limit) || 6,
  }));
  const [pagination, setPagination] = useState({
    _page: filter._page,
    _limit: filter._limit,
    total: 0,
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
        const total = parseInt(courseData.headers["x-total-count"]);
        setPagination({
          _page: filter._page,
          _limit: filter._limit,
          total,
        });
        setCourseList(courseData.data);
      } catch (error) {}

      reReRenderScript();
      setLoading(false);
    };

    fetchListCourse();
    history.push({
      pathname: history.location.pathname,
      search: queryString.stringify(filter),
    });
  }, [history, filter]);

  const handlePageChane = (pageNumber) => {
    setFilter({
      ...filter,
      _page: pageNumber,
    });
  };
  const handlePagePrevious = () => {
    setFilter({
      ...filter,
      _page: filter._page - 1,
    });
  };
  const handlePageNext = () => {
    setFilter({
      ...filter,
      _page: filter._page + 1,
    });
  };

  return (
    <React.Fragment>
      <Banner />
      <MainContainer
        courseList={courseList}
        loading={loading}
        pagination={pagination}
        onPageChange={handlePageChane}
        onPagePrevious={handlePagePrevious}
        onPageNext={handlePageNext}
      />
    </React.Fragment>
  );
}

export default CoursesPage;
