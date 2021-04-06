import categoryApi from "api/categoryApi";
import coursesApi from "api/coursesApi";
import { reReRenderScript } from "helper/re-render-script";
import useImportScript from "hooks/import-custom-script";
import React, { useEffect, useState } from "react";
import { useHistory, useLocation } from "react-router";
import Banner from "./components/banner";
import MainContainer from "./components/main-container";
import queryString from "query-string";
import { setPagination } from "redux/paginationSlice";
import { useDispatch, useSelector } from "react-redux";
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
    _expand: "teacher",
    _page: parseInt(queryParams._page) || 1,
    _limit: parseInt(queryParams._limit) || 6,
  }));

  const pagination = useSelector((state) => state.pagination);
  const [paginationSynchronized, setPaginationSynchronized] = useState(false);

  const dispatch = useDispatch();

  useImportScript();

  useEffect(() => {
    history.push({
      pathname: history.location.pathname,
      search: queryString.stringify(filter),
    });
  }, [history, filter]);

  useEffect(() => {
    const fetchApiData = async () => {
      try {
        const categoryData = await categoryApi.getAll({ _embed: "courses" });
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
        const pagination = {
          _page: filter._page,
          _limit: filter._limit,
          total,
        };
        const action = setPagination(pagination);
        dispatch(action);
        setCourseList(courseData.data);
      } catch (error) {}

      reReRenderScript();
      setLoading(false);
    };

    fetchListCourse();
  }, [filter, dispatch]);

  useEffect(() => {
    if (paginationSynchronized) {
      setFilter({
        ...filter,
        _page: pagination._page,
        _limit: pagination._limit,
      });
    }
    setPaginationSynchronized(true);
    // eslint-disable-next-line
  }, [pagination]);

  const handleCategoryChange = (idCategory) => {
    if (idCategory === 0) {
      const newFilter = { ...filter };
      delete newFilter.categoryId;
      setFilter(newFilter);
    } else {
      setFilter({
        ...filter,
        categoryId: idCategory,
      });
    }
  };

  return (
    <React.Fragment>
      <Banner />
      <MainContainer
        courseList={courseList}
        loading={loading}
        categoryList={categoryList}
        onCategoryChange={handleCategoryChange}
      />
    </React.Fragment>
  );
}

export default CoursesPage;
