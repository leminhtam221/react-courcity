import React from "react";
import TabCurriculum from "./components/tab-curriculum";
import TabInstructor from "./components/tab-instructor";
import TabOverView from "./components/tab-overview";
import TabReview from "./components/tab-review";
import PropTypes from "prop-types";

CourseDetailTab.propTypes = {
  course: PropTypes.object,
};
CourseDetailTab.defaultProps = {
  course: {},
};

function CourseDetailTab(props) {
  const { course } = props;
  return (
    <div className='tab-content course-menu-tab' id='myTabContent'>
      <TabOverView course={course} />
      <TabCurriculum />
      <TabInstructor teacher={course.teacher} />
      <TabReview />
    </div>
  );
}

export default CourseDetailTab;
