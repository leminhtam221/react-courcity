import React from "react";
import CourseDetailInfo from "../course-detail-info";
import CourseDetailSideBar from "../course-detail-sidebar";
import RelatedCourse from "../related-course";
import CourseDetailNav from "../course-detail-nav";
import CourseDetailVideo from "../course-detail-video";
import CourseDetailTab from "../course-detail-tab";
import PropTypes from "prop-types";

MainContainer.propTypes = {
  course: PropTypes.object,
  courseRelated: PropTypes.array,
};
MainContainer.defaultProps = {
  course: {},
  courseRelated: [],
};

function MainContainer(props) {
  const { course, courseRelated } = props;
  return (
    <div className='course-single-body'>
      <div className='container'>
        <CourseDetailInfo course={course} />
      </div>
      <div className='container'>
        <div className='course-details-1x'>
          <div className='row'>
            <div className='col-md-8'>
              <div className='course-details-left'>
                <CourseDetailVideo course={course} />
                <div className='course-menu-nav'>
                  <CourseDetailNav />
                  <CourseDetailTab course={course} />
                </div>
              </div>
            </div>
            <div className='col-md-4'>
              <CourseDetailSideBar
                categoryName={course.category.category_name}
                course={course}
              />
            </div>
          </div>
        </div>
      </div>
      <RelatedCourse courseRelated={courseRelated} />
    </div>
  );
}

export default MainContainer;
