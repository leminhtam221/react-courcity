import React from "react";
import PropTypes from "prop-types";
import { ErrorMessage } from "formik";

FormGroup.propTypes = {
  field: PropTypes.object.isRequired,
  form: PropTypes.object.isRequired,

  placeholder: PropTypes.string,
  icon: PropTypes.string,
  type: PropTypes.string,
};
FormGroup.defaultProps = {
  placeholder: "",
  icon: "fas fa-envelope",
  type: "text",
};

function FormGroup(props) {
  const { placeholder, icon, type, field, form } = props;
  const { errors, touched } = form;
  const showError = errors[field.name] && touched[field.name];
  return (
    <div className='col-md-12'>
      <div className='single-input'>
        <i className={icon} />
        <div className='form-group'>
          <input
            {...field}
            type={type}
            className={`form-control ${showError ? "mb-1" : ""}`}
            placeholder={placeholder}
            aria-label='Name'
            autoComplete='off'
          />

          <ErrorMessage name={field.name}>
            {(msg) => <div className='badge badge-danger mb-2'>{msg}</div>}
          </ErrorMessage>
        </div>
      </div>
    </div>
  );
}

export default FormGroup;
