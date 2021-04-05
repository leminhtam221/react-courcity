import Course from "components/Clients/Course";
import CourseFullWidth from "components/Clients/CourseFullWidth";
import CardLoaing from "components/Clients/Loading/CardLoading";
import CardLoadingMedia from "components/Clients/Loading/CardLoadingMedia";
import Pagination from "components/Clients/Pagination";
import PropTypes from "prop-types";
import React from "react";
import FilterCategory from "../filter-category";
import FilterPrice from "../filter-price";
import NavTab from "../nav-tab";
import Sort from "../sort";

MainContainer.propTypes = {
  courseList: PropTypes.array,
  loading: PropTypes.bool,
  pagination: PropTypes.object,
  onPageChange: PropTypes.func,
  onPagePrevious: PropTypes.func,
  onPageNext: PropTypes.func,
};

MainContainer.defaultProps = {
  courseList: [],
  loading: true,
  pagination: {},
  onPageChange: null,
  onPagePrevious: null,
  onPageNext: null,
};

function MainContainer(props) {
  const {
    courseList,
    loading,
    pagination,
    onPageChange,
    onPagePrevious,
    onPageNext,
  } = props;
  const { _page, _limit, total } = pagination;
  return (
    <div className='course-header-1x'>
      <div className='container'>
        <div className='row'>
          <div className='col-md-3'>
            <div className='course-header-left-top'>
              <p>
                <img src='assets/images/cross.png' alt='remove filter' /> Remove Filter
              </p>
            </div>
            <div className='course-header-left'>
              <div id='accordion'>
                <FilterCategory />
                <FilterPrice />
              </div>
            </div>
          </div>
          <div className='col-md-9'>
            <div className='course-header-right'>
              <div className='row'>
                <div className='col-md-6'>
                  <Sort />
                </div>
                <div className='col-md-6'>
                  <NavTab />
                </div>
              </div>
            </div>
            <div className='course-grid-list'>
              <div className='tab-content' id='myTabContent'>
                <div
                  className='tab-pane fade show active'
                  id='profile'
                  role='tabpanel'
                  aria-labelledby='profile-tab'
                >
                  <div className='course-1x all-course-grid'>
                    <div className='container'>
                      <div className='row'>
                        <div className='all-course'>
                          <div className='row'>
                            {loading ? (
                              <CardLoaing col={4} length={6} />
                            ) : (
                              renderCourses(courseList)
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div
                  className='tab-pane fade'
                  id='home'
                  role='tabpanel'
                  aria-labelledby='home-tab'
                >
                  <div className='all-course-list'>
                    {loading ? (
                      <CardLoadingMedia length={6} />
                    ) : (
                      renderCoursesFullWidth(courseList)
                    )}
                  </div>
                </div>
              </div>

              <Pagination
                page={_page}
                limit={_limit}
                total={total}
                onPageChange={onPageChange}
                onPagePrevious={onPagePrevious}
                onPageNext={onPageNext}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const renderCourses = (coursesList) => {
  return coursesList.map((item) => (
    <div className={`col-md-4`} key={item.id}>
      <Course course={item} />
    </div>
  ));
};

const renderCoursesFullWidth = (coursesList) => {
  return coursesList.map((item) => <CourseFullWidth key={item.id} course={item} />);
};
export default MainContainer;
