import React from "react";
import CourseDetailInfo from "../course-detail-info";
import CourseDetailSideBar from "../course-detail-sidebar";
import RelatedCourse from "../related-course";
import CourseDetailNav from "../course-detail-nav";
import CourseDetailVideo from "../course-detail-video";
import CourseDetailTab from "../course-detail-tab";
// import PropTypes from "prop-types";

MainContainer.propTypes = {};

function MainContainer(props) {
  return (
    <div className='course-single-body'>
      <div className='container'>
        <CourseDetailInfo />
      </div>
      <div className='container'>
        <div className='course-details-1x'>
          <div className='row'>
            <div className='col-md-8'>
              <div className='course-details-left'>
                <CourseDetailVideo />
                <div className='course-menu-nav'>
                  <CourseDetailNav />
                  <CourseDetailTab />
                </div>
              </div>
            </div>
            <div className='col-md-4'>
              <CourseDetailSideBar />
            </div>
          </div>
        </div>
      </div>
      <RelatedCourse />
    </div>
  );
}

export default MainContainer;
