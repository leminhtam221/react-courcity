import React from "react";
import PropTypes from "prop-types";
import Course from "components/Clients/Course";
import swal from "sweetalert";

MyCourse.propTypes = {
  course: PropTypes.array,
  onDeleteCourse: PropTypes.func,
};
MyCourse.defaultProps = {
  course: [],
  onDeleteCourse: null,
};

function MyCourse(props) {
  const { course, onDeleteCourse } = props;
  const handleDeleteCourse = (idCourse) => {
    swal({
      title: "Delete course ?",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        if (onDeleteCourse) {
          onDeleteCourse(idCourse);
        }
      }
    });
  };
  return (
    <div className='row'>
      {course.map((item) => (
        <div className='col-md-4' key={item.id}>
          <button className='btn btn-success px-4 mr-1'>Edit</button>
          <button
            className='btn btn-danger'
            onClick={() => {
              handleDeleteCourse(item.id);
            }}
          >
            Delete
          </button>
          <Course course={item} />
        </div>
      ))}
    </div>
  );
}

export default MyCourse;
