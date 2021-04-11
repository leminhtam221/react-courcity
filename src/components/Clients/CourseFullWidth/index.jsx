import React from "react";
import PropTypes from "prop-types";
import "./course-full-width.css";
import { Link } from "react-router-dom";

CourseFullWidth.propTypes = {
  course: PropTypes.object.isRequired,
};

function CourseFullWidth(props) {
  const { course } = props;
  let img;
  if (course.course_image !== "") {
    img = course.course_image;
  } else {
    img = "assets/images/default-img.jpg";
  }
  return (
    <div className='media'>
      <div className='media-left-image'>
        <div className='hvrbox'>
          <img src={img} alt='slide 1' className='hvrbox-layer_bottom image-cover' />
          <div className='hvrbox-layer_top hvrbox-text'>
            <div className='hvrbox-text'>
              <a
                href='https://www.youtube.com/watch?v=gwinFP8_qIM'
                className='btn-circle video'
              >
                <i className='fas fa-play' />
              </a>
              <br />
              <Link to={`course/${course.id}`}>Preview Course</Link>
            </div>
          </div>
        </div>
      </div>
      <div className='media-body'>
        <h2>
          <Link to={`course/${course.id}`}>{course.course_name}</Link>
        </h2>
        <h5>{course.users.name}</h5>
        <h4 className='mr-5'>${course.price}</h4>
        <Link to={`course/${course.id}`} className='btn-bordered'>
          {" "}
          View Course{" "}
        </Link>
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
