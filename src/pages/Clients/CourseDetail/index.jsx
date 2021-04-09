import coursesApi from "api/coursesApi";
import { reReRenderScript } from "helper/re-render-script";
import useImportScript from "hooks/import-custom-script";
import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router";
import Banner from "./components/banner";
import MainContainer from "./components/main-container";
import Loading from "components/Clients/Loading";

function CourseDetailPage() {
  useImportScript();

  const { id } = useParams();
  const history = useHistory();
  const [loading, setLoading] = useState(true);
  const [course, setCourse] = useState({});
  const [courseRelated, setCourseRelated] = useState([]);

  useEffect(() => {
    const fetchDetailCourse = async () => {
      setLoading(true);

      try {
        const courseData = await coursesApi.getDetail(id, {
          _expand: ["category", "teacher"],
        });
        const courseRelatedList = await coursesApi.getAll({
          _expand: "teacher",
          categoryId: courseData.data.categoryId,
          _limit: 8,
          id_ne: courseData.data.id,
        });
        setCourse(courseData.data);
        setCourseRelated(courseRelatedList.data);
      } catch (error) {
        if (error.response.status === 404 && error.response.statusText) {
          history.push({ pathname: "/course-not-found" });
        }
      }

      reReRenderScript();
      setLoading(false);
    };

    fetchDetailCourse();
  }, [history, id]);
  return (
    <React.Fragment>
      {loading ? (
        <Loading />
      ) : (
        <React.Fragment>
          <Banner course={course} />
          <MainContainer course={course} courseRelated={courseRelated} />
        </React.Fragment>
      )}
    </React.Fragment>
  );
}

export default CourseDetailPage;
