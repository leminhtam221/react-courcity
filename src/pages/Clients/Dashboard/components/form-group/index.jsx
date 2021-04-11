import React from "react";
import PropTypes from "prop-types";
import { ErrorMessage } from "formik";

FormGroup.propTypes = {
  field: PropTypes.object.isRequired,
  form: PropTypes.object.isRequired,

  placeholder: PropTypes.string,
  type: PropTypes.string,
};
FormGroup.defaultProps = {
  placeholder: "",
  type: "text",
};

function FormGroup(props) {
  const { placeholder, type, field } = props;
  return (
    <div className='form-group'>
      <label>{placeholder}</label>
      <input {...field} type={type} className='form-control' autoComplete='off' />
      <ErrorMessage name={field.name}>
        {(msg) => <div className='badge badge-danger mt-1'>{msg}</div>}
      </ErrorMessage>
    </div>
  );
}

export default FormGroup;
