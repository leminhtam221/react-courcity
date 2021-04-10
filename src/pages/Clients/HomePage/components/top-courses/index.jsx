import React from "react";
import PropTypes from "prop-types";
import Course from "components/Clients/Course";
import { Link } from "react-router-dom";

TopCourses.propTypes = {
  courseList: PropTypes.array,
  categoryList: PropTypes.array,
};

TopCourses.defaultProps = {
  courseList: [],
  categoryList: [],
};

function TopCourses(props) {
  const { courseList, categoryList } = props;
  return (
    <div className='course-1x'>
      <div className='container'>
        <div className='row'>
          <div className='col-md-12'>
            <div className='title-middle'>
              <h2>Coursecity Top Courses</h2>
            </div>
          </div>

          <div className='col-md-12'>
            <div id='filters' className='course-menu'>
              <button className='filter active' data-filter='all'>
                All Courses
              </button>
              {renderCategory(categoryList)}
            </div>
          </div>

          <div className='col-md-12'>
            <div className='all-course'>
              <div className='row'>
                {renderCourses(courseList)}

                <div className='col-md-12 text-center'>
                  <Link className='btn-small' to='/courses'>
                    View more
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const renderCategory = (courseList) => {
  return courseList.map((item) => (
    <button
      className='filter'
      data-rel='category'
      data-filter={`.category${item.id}`}
      key={item.id}
    >
      {item.category_name}
    </button>
  ));
};
const renderCourses = (coursesList) => {
  return coursesList.map((item) => (
    <div className={`col-md-3 tile category${item.categoryId}`} key={item.id}>
      <Course course={item} />
    </div>
  ));
};

export default TopCourses;
