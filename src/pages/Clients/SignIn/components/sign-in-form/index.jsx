import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import FormGroup from "../form-group";
import { Formik, Form, FastField } from "formik";
import * as yup from "yup";

SignInForm.propTypes = {
  onSubmit: PropTypes.func,
};
SignInForm.defaultProps = {
  onSubmit: null,
};

function SignInForm(props) {
  const { onSubmit } = props;
  const validate = yup.object().shape({
    email: yup.string().required("Email has been required").email("Email is invalid"),
    password: yup
      .string()
      .required("Password has been required")
      .min(6, "Password must be at least 6 characters"),
  });
  return (
    <Formik
      initialValues={{
        email: "",
        password: "",
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
            name='password'
            component={FormGroup}
            placeholder='Password'
            type='password'
            icon='fas fa-key'
          />

          <div className='col-md-12'>
            <div className='sign-in-btn'>
              <button
                className='btn btn-primary px-4 py-2'
                type='submit'
                style={{ cursor: "pointer" }}
              >
                Sign in
              </button>
              <p>Or login with</p>
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
                Don’t have an account? <Link to='/sign-up'> Create one here!</Link>
              </h4>
            </div>
          </div>
        </div>
      </Form>
    </Formik>
  );
}

export default SignInForm;
