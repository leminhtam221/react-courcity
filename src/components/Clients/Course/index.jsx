import React from "react";
import PropTypes from "prop-types";
import "./course.css";
import { Link } from "react-router-dom";

Course.propTypes = {
  course: PropTypes.object.isRequired,
};

function Course(props) {
  const { course } = props;
  return (
    <div className='single-course cover'>
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
            <Link to={`course/${course.id}`}>Preview Course</Link>
          </div>
        </div>
      </div>
      <div className='single-course-content'>
        <Link to={`course/${course.id}`} className='title-break'>
          {course.course_name}
        </Link>
        <p>
          {course.teacher.name}
          <span>
            <b>${course.price}</b>
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
