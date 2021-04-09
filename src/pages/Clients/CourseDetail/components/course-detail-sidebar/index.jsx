import React from "react";
import PropTypes from "prop-types";

CourseDetailSideBar.propTypes = {
  categoryName: PropTypes.string,
  course: PropTypes.object,
};
CourseDetailSideBar.defaultProps = {
  categoryName: "",
  course: {},
};

function CourseDetailSideBar(props) {
  const { categoryName, course } = props;
  return (
    <div className='course-details-sidebar'>
      <div className='course-feature'>
        <h2>Course Features</h2>
        <ul>
          <li>
            <i className='far fa-file' /> Lectures <span> 7 </span>
          </li>
          <li>
            <i className='far fa-clock' /> Duration <span> 60H </span>
          </li>
          <li>
            <i className='far fa-user' /> Students <span> {course.enroll} </span>
          </li>
          <li>
            <i className='fas fa-certificate' /> Certificate <span> Yes </span>
          </li>
          <li>
            <i className='far fa-lightbulb' /> Skill <span> Beginner </span>
          </li>
          <li>
            <i className='far fa-bookmark' /> Category <span> {categoryName} </span>
          </li>
        </ul>
      </div>
      <div className='footer-social-link'>
        <h2>Share via</h2>
        <ul>
          <li>
            <a href='#/'>
              {" "}
              <i className='fab fa-facebook-f' />{" "}
            </a>
          </li>
          <li>
            <a href='#/'>
              {" "}
              <i className='fab fa-instagram' />{" "}
            </a>
          </li>
          <li>
            <a href='#/'>
              {" "}
              <i className='fab fa-twitter' />{" "}
            </a>
          </li>
          <li>
            <a href='#/'>
              {" "}
              <i className='fab fa-google-plus-g' />{" "}
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default CourseDetailSideBar;
