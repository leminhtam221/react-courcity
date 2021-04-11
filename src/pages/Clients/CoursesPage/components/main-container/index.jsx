import Course from "components/Clients/Course";
import CourseFullWidth from "components/Clients/CourseFullWidth";
import CardLoaing from "components/Clients/Loading/CardLoading";
import CardLoadingMedia from "components/Clients/Loading/CardLoadingMedia";
import Pagination from "components/Clients/Pagination";
import PropTypes from "prop-types";
import React, { useRef } from "react";
import FilterCategory from "../filter-category";
import FilterPrice from "../filter-price";
import NavTab from "../nav-tab";
import RemoveFilter from "../remove-filter";
import Sort from "../sort";

MainContainer.propTypes = {
  courseList: PropTypes.array,
  categoryList: PropTypes.array,
  loading: PropTypes.bool,
  onCategoryChange: PropTypes.func,
  onSortChange: PropTypes.func,
  onPriceLowChange: PropTypes.func,
  onPriceHighChange: PropTypes.func,
  onClickRemoveFilter: PropTypes.func,
};

MainContainer.defaultProps = {
  courseList: [],
  categoryList: [],
  loading: true,
  onCategoryChange: null,
  onSortChange: null,
  onPriceLowChange: null,
  onPriceHighChange: null,
  onClickRemoveFilter: null,
};

function MainContainer(props) {
  const {
    courseList,
    categoryList,
    loading,
    onCategoryChange,
    onSortChange,
    onPriceLowChange,
    onPriceHighChange,
    onClickRemoveFilter,
  } = props;

  const scroll = useRef(null);
  return (
    <div className='course-header-1x'>
      <div className='container'>
        <div className='row'>
          <div className='col-md-3'>
            <RemoveFilter onClickRemoveFilter={onClickRemoveFilter} />

            <div className='course-header-left'>
              <div id='accordion'>
                <FilterCategory
                  categoryList={categoryList}
                  onCategoryChange={onCategoryChange}
                />
                <FilterPrice
                  onPriceLowChange={onPriceLowChange}
                  onPriceHighChange={onPriceHighChange}
                />
              </div>
            </div>
          </div>
          <div className='col-md-9'>
            <div className='course-header-right'>
              <div className='row'>
                <div className='col-md-6'>
                  <Sort onSortChange={onSortChange} scroll={scroll} />
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
                              renderCourses(courseList, scroll)
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

              <Pagination />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const renderCourses = (coursesList, scroll) => {
  if (coursesList.length >= 1 && coursesList.length <= 3)
    scroll.current.scrollIntoView({ behavior: "smooth" });

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
