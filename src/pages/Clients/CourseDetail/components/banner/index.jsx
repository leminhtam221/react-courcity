import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

Banner.propTypes = {
  course: PropTypes.object,
};
Banner.defaultProps = {
  course: {},
};

function Banner(props) {
  const { course } = props;
  return (
    <div className='page-banner'>
      <div className='hvrbox'>
        <img
          src='assets/images/video-bg.png'
          alt='Mountains'
          className='hvrbox-layer_bottom'
        />
        <div className='hvrbox-layer_top'>
          <div className='container'>
            <div className='overlay-text text-left'>
              <h3>{course.course_name}</h3>
              <nav aria-label='breadcrumb'>
                <ol className='breadcrumb'>
                  <li className='breadcrumb-item'>
                    <Link to='/'>Home</Link>
                  </li>
                  <li className='breadcrumb-item active' aria-current='page'>
                    <Link to='/courses'>Courses</Link>
                  </li>
                  <li className='breadcrumb-item active' aria-current='page'>
                    {course.course_name}
                  </li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
