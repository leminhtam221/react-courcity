import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

SignInForm.propTypes = {
  onSubmit: PropTypes.object,
};
SignInForm.defaultProps = {
  onSubmit: null,
};

function SignInForm(props) {
  return (
    <form>
      <div className='row'>
        <div className='col-md-12'>
          <div className='single-input'>
            <i className='fas fa-envelope' />
            <div className='form-group'>
              <input
                type='text'
                className='form-control'
                placeholder='Username or e-mail'
                aria-label='Name'
              />
            </div>
          </div>
        </div>
        <div className='col-md-12'>
          <div className='single-input'>
            <i className='fas fa-key' />
            <div className='form-group'>
              <input type='password' className='form-control' placeholder='Password' />
            </div>
          </div>
        </div>
        <div className='col-md-12'>
          <div className='sign-in-btn'>
            <span>
              <a href='#/'>Forget Password?</a>
            </span>
            <a href='#/' className='btn-small'>
              {" "}
              Sign In{" "}
            </a>
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
    </form>
  );
}

export default SignInForm;
