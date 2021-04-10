import React, { useState } from "react";
import { login } from "redux/userSlice";
import { useDispatch } from "react-redux";
import { unwrapResult } from "@reduxjs/toolkit";
import SignInForm from "./components/sign-in-form";
import SignInBackground from "./components/sign-in-background";
import swal from "sweetalert";
import { useHistory } from "react-router";
import Loading from "components/Clients/Loading";
import SpinnerLoading from "components/Clients/Loading/SpinerLoading";

function SignInPage() {
  const dispatch = useDispatch();
  const history = useHistory();
  const [loading, setLoading] = useState(false);
  const handleSignIn = async (value) => {
    setLoading(true);
    try {
      const data = {
        email: value.email,
        password: value.password,
      };
      const action = login(data);
      const resultAction = await dispatch(action);
      const user = unwrapResult(resultAction);
      if (user) {
        swal({
          title: "Login success",
          icon: "success",
        });
        history.push({ pathname: "/" });
      }
    } catch (error) {
      if (error.message === "Request failed with status code 400") {
        swal({
          title: "Email or password is incorrect",
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
            <div className='col-md-4'>
              <div className='sign-in-form'>
                <h3>Sign In</h3>
                <SignInForm onSubmit={handleSignIn} />
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
