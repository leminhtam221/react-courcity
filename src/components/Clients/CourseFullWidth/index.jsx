import React from "react";
import PropTypes from "prop-types";

CourseFullWidth.propTypes = {};

function CourseFullWidth(props) {
  return (
    <div className='media'>
      <div className='media-left-image'>
        <div className='hvrbox'>
          <img src='assets/images/1.jpg' alt='slide 1' className='hvrbox-layer_bottom' />
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
          <a href='course-single-one.html'>
            {" "}
            Learn Photoshop CC With Nir Eyal Complete Course{" "}
          </a>
        </h2>
        <h5>By Nir Eyal</h5>
        <h4>
          $49 <del>$69</del>
        </h4>
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
          <span>
            Enroll: 128 <i className='far fa-heart' />
          </span>
        </h3>
      </div>
    </div>
  );
}

export default CourseFullWidth;
