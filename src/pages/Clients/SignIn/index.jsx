import React from "react";
// import PropTypes from "prop-types";
import SignInForm from "./components/sign-in-form";
import SignInBackground from "./components/sign-in-background";

SignInPage.propTypes = {};

function SignInPage(props) {
  return (
    <div className='sign-in-1x'>
      <div className='container'>
        <div className='form-container'>
          <div className='row'>
            <div className='col-md-4'>
              <div className='sign-in-form'>
                <h3>Sign In</h3>
                <SignInForm />
              </div>
            </div>
            <div className='col-md-7 offset-md-1'>
              <SignInBackground />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignInPage;
