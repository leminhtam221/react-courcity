import React from "react";
import PropTypes from "prop-types";
import DashBoardNav from "../dashboard-nav";
import MyCourse from "../my-course";
import FormAddEdit from "../form-add-edit";

MainWrap.propTypes = {
  course: PropTypes.array,
  onDeleteCourse: PropTypes.func,
  category: PropTypes.array,
  onSubmit: PropTypes.func,
};
MainWrap.defaultProps = {
  course: [],
  category: [],
  onDeleteCourse: null,
  onSubmit: null,
};

function MainWrap(props) {
  const { course, onDeleteCourse, category, onSubmit } = props;
  return (
    <div className='col-md-9'>
      <div>
        <DashBoardNav />
        <div className='tab-content ml-4 mt-3' id='myTabContent'>
          <div
            className='tab-pane fade show active'
            id='home'
            role='tabpanel'
            aria-labelledby='home-tab'
          >
            <MyCourse course={course} onDeleteCourse={onDeleteCourse} />
          </div>
          <div
            className='tab-pane fade'
            id='profile'
            role='tabpanel'
            aria-labelledby='profile-tab'
          >
            <FormAddEdit category={category} onSubmit={onSubmit} />
          </div>
          <div
            className='tab-pane fade'
            id='contact'
            role='tabpanel'
            aria-labelledby='contact-tab'
          >
            ...
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainWrap;
