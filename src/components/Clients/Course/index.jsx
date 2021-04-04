import React from "react";
import PropTypes from "prop-types";
import "./course.css";

Course.propTypes = {
  course: PropTypes.object,
};

Course.defaultProps = {
  course: null,
};

function Course(props) {
  const { course } = props;
  return (
    <div className='single-course'>
      <div className='hvrbox'>
        <img
          src={course.course_image}
          alt={`${course.course_name}`}
          className='hvrbox-layer_bottom'
        />
        <div className='hvrbox-layer_top hvrbox-text'>
          <div className='hvrbox-text'>
            <a
              href='https://www.youtube.com/watch?v=gwinFP8_qIM'
              className='btn-circle video'
            >
              <i className='fas fa-play' />
            </a>
            <a href='course-single.html'>Preview Course</a>
          </div>
        </div>
      </div>
      <div className='single-course-content'>
        <a href='course-single.html' className='title-break'>
          {course.course_name}
        </a>
        <p>
          {course.teacher.name}
          <span>
            <del>${course.price}</del>
          </span>
        </p>
        <h3>
          <i className='fas fa-star' />
          <i className='fas fa-star' />
          <i className='fas fa-star' />
          <i className='fas fa-star' />
          <i className='fas fa-star' /> (4)
          <span>Enroll: {course.enroll}</span>
        </h3>
      </div>
    </div>
  );
}

export default Course;
