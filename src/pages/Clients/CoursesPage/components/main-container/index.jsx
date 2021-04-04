import React from "react";
import PropTypes from "prop-types";
import FilterCategory from "../filter-category";
import FilterPrice from "../filter-price";
import Sort from "../sort";
import NavTab from "../nav-tab";
import Pagination from "components/Clients/Pagination";
import Course from "components/Clients/Course";
import CourseFullWidth from "components/Clients/CourseFullWidth";
import CardLoadingMedia from "components/Clients/Loading/CardLoadingMedia";

MainContainer.propTypes = {};

function MainContainer(props) {
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
                            <div className='col-md-4 tile web'>{/* <Course /> */}</div>
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
                    <CourseFullWidth />
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

export default MainContainer;
