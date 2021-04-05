import React from "react";
import PropTypes from "prop-types";
import "./course-full-width.css";

CourseFullWidth.propTypes = {
  course: PropTypes.object.isRequired,
};

function CourseFullWidth(props) {
  const { course } = props;
  return (
    <div className='media'>
      <div className='media-left-image'>
        <div className='hvrbox'>
          <img
            src={course.course_image}
            alt='slide 1'
            className='hvrbox-layer_bottom image-cover'
          />
          <div className='hvrbox-layer_top hvrbox-text'>
            <div className='hvrbox-text'>
              <a
                href='https://www.youtube.com/watch?v=gwinFP8_qIM'
                className='btn-circle video'
              >
                <i className='fas fa-play' />
              </a>
              <br />
              <a href='course-single-one.html'>Preview Course</a>
            </div>
          </div>
        </div>
      </div>
      <div className='media-body'>
        <h2>
          <a href='course-single-one.html'>{course.course_name}</a>
        </h2>
        <h5>{course.teacher.name}</h5>
        <h4 className='mr-5'>${course.price}</h4>
        <a href='course-single-one.html' className='btn-bordered'>
          {" "}
          View Course{" "}
        </a>
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

export default CourseFullWidth;
