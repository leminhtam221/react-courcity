import React from "react";
import PropTypes from "prop-types";
import { Formik, Form, FastField } from "formik";
import FormGroup from "../form-group";
import * as yup from "yup";
import { Link } from "react-router-dom";

SignUpForm.propTypes = {
  onSubmit: PropTypes.func,
};
SignUpForm.defaultProps = {
  onSubmit: null,
};

function SignUpForm(props) {
  const { onSubmit } = props;

  const validate = yup.object().shape({
    email: yup.string().required("Email has been required").email("Email is invalid"),
    fullname: yup
      .string()
      .required("Fullname has been required")
      .min(5, "Fullname must be at least 5 characters")
      .max(20, "Fullname must be 20 characters or less"),
    password: yup
      .string()
      .required("Password has been required")
      .min(6, "Password must be at least 6 characters"),
    confirmPassword: yup
      .string()
      .required("Confirm Password has been required")
      .oneOf([yup.ref("password"), null], "Password must match"),
  });
  return (
    <Formik
      initialValues={{
        email: "",
        fullname: "",
        password: "",
        confirmPassword: "",
      }}
      validationSchema={validate}
      onSubmit={onSubmit}
    >
      <Form>
        <div className='row'>
          <FastField
            name='email'
            component={FormGroup}
            placeholder='Email'
            type='email'
          />
          <FastField
            name='fullname'
            component={FormGroup}
            placeholder='Fullname'
            icon='far fa-user'
          />
          <FastField
            name='password'
            component={FormGroup}
            placeholder='Password'
            icon='fas fa-key'
            type='password'
          />
          <FastField
            name='confirmPassword'
            component={FormGroup}
            placeholder='Confirm Password'
            icon='fas fa-key'
            type='password'
          />

          <div className='col-md-12'>
            <div className='sign-in-btn sign-up-btn'>
              <div className='d-flex justify-content-between align-items-center'>
                <p>Or Signup with</p>
                <button
                  className='btn btn-primary px-4 py-2'
                  type='submit'
                  style={{ cursor: "pointer" }}
                >
                  Sign up
                </button>
              </div>

              <ul>
                <li>
                  <a href='#/'> Facebook </a>
                </li>
                <li>
                  <a href='#/'> Linkedin </a>
                </li>
                <li>
                  <a href='#/'> Google </a>
                </li>
              </ul>

              <h4>
                Already have an account? <Link to='/sign-in'> Sign In here!</Link>
              </h4>
            </div>
          </div>
        </div>
      </Form>
    </Formik>
  );
}

export default SignUpForm;
