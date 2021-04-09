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
  return (
    <div
      className='course-video'
      style={{ backgroundImage: `url(${course.course_image})`, objectFit: "cover" }}
    >
      <a href='https://www.youtube.com/watch?v=gwinFP8_qIM' className='btn-circle video'>
        <i className='fas fa-play' />
      </a>
      <h3>Preview Course</h3>
    </div>
  );
}

export default CourseDetailVideo;
