import React, { useState } from "react";
import SignUpBackground from "./components/sign-up-background";
import SignUpForm from "./components/sign-up-form";
import { register } from "redux/userSlice";
import { useDispatch } from "react-redux";
import { unwrapResult } from "@reduxjs/toolkit";
import swal from "sweetalert";
import SpinnerLoading from "components/Clients/Loading/SpinerLoading";
import { useHistory } from "react-router";

function SignUpPage(props) {
  const history = useHistory();
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);

  const handleSubmitForm = async (value) => {
    const data = {
      email: value.email,
      name: value.fullname,
      password: value.password,
    };
    setLoading(true);
    try {
      const action = register(data);
      const resultAction = await dispatch(action);
      const user = unwrapResult(resultAction);
      if (user) {
        swal({
          title: "Register successfully",
          icon: "success",
        }).then(() => {
          history.push({ pathname: "/" });
        });
      }
    } catch (error) {
      if (error.message === "Request failed with status code 400") {
        swal({
          title: "Email has been used",
          icon: "warning",
        });
      }
    }
    setLoading(false);
  };

  return (
    <div className='sign-in-1x'>
      {loading ? <SpinnerLoading /> : ""}
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
