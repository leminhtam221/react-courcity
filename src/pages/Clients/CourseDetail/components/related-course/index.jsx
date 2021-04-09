import React from "react";
import PropTypes from "prop-types";
import Course from "components/Clients/Course";

RelatedCourse.propTypes = {
  courseRelated: PropTypes.array,
};
RelatedCourse.defaultProps = {
  courseRelated: [],
};

function RelatedCourse(props) {
  const { courseRelated } = props;
  return (
    <div className='related-course-2x'>
      <div className='container'>
        <div className='col-md-12'>
          <div className='row'>
            <div className='title-left'>
              <h2>Related Courses</h2>
            </div>
          </div>
        </div>
        <div className='related-course'>{renderCourses(courseRelated)}</div>
      </div>
    </div>
  );
}

const renderCourses = (coursesList) => {
  return coursesList.map((item) => <Course course={item} key={item.id} />);
};

export default RelatedCourse;
