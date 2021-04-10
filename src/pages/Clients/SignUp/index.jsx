import React from "react";
import SignUpBackground from "./components/sign-up-background";
import SignUpForm from "./components/sign-up-form";

function SignUpPage(props) {
  const handleSubmitForm = (value) => {
    console.log(value, "value");
  };

  return (
    <div className='sign-in-1x'>
      <div className='container'>
        <div className='form-container'>
          <div className='row'>
            <div className='col-md-6'>
              <div className='sign-in-form'>
                <h3>Sign Up</h3>
                <SignUpForm onSubmit={handleSubmitForm} />
              </div>
            </div>
            <div className='col-md-6'>
              <SignUpBackground />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUpPage;
