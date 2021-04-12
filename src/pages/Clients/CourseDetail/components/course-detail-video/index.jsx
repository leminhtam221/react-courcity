import React from "react";
import PropTypes from "prop-types";

CourseDetailVideo.propTypes = {
  course: PropTypes.object,
};
CourseDetailVideo.defaultProps = {
  course: {},
};

function CourseDetailVideo(props) {
  const { course } = props;
  let img;
  if (course.course_image !== "") {
    img = course.course_image;
  } else {
    img = "assets/images/default-img.jpg";
  }
  return (
    <div
      className='course-video'
      style={{ backgroundImage: `url(${img})`, objectFit: "cover" }}
    >
      <a href='https://www.youtube.com/watch?v=gwinFP8_qIM' className='btn-circle video'>
        <i className='fas fa-play' />
      </a>
      <h3>Preview Course</h3>
    </div>
  );
}

export default CourseDetailVideo;
