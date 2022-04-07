import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Signup.css";
import { useDispatch, useSelector } from "react-redux";
import {
  registerUserAsync,
  authSelector,
  reset,
} from "../../features/register/registerSlice";

const SignUp = () => {
  const { isLoading, errorMessage, user } = useSelector(authSelector);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  function handleChange(e) {
    setData({ ...data, [e.target.name]: e.target.value });
  }

  useEffect(() => {
    if (errorMessage) {
      dispatch(reset())
      alert(errorMessage);
    }
    user && navigate("/");
  }, [errorMessage, user, navigate]);



  function submit(e) {
    e.preventDefault();
    console.log(data.firstName, data.lastName, data.email);
    dispatch(registerUserAsync(data));

  }


  return (
    <>
      <div className="d-flex justify-content-center align-items-center ">
        <div className=" d-flex justify-content-center align-items-center flex-column shadow-lg p-3 mb-5 bg-body rounded p-5 border m-5">
          <img
            src="/Images/outboxedu logo.png"
            alt="logo"
            height="50"
            width="50"
          />
          <span style={{ color: "#04739B" }} className="h5 ">
            Sign up
          </span>
          <form onSubmit={submit}>
            <div className="mb-2 d-flex flex-column">
            <label className="form-label text-start  w-100">First Name</label>
            <input
              type="text"
              name="firstName"
              onChange={handleChange}
              className="form-control"
              required
            />
          </div>
            <div className=" d-flex flex-column mb-2">
              <label className="form-label text-start  w-100">Full Name</label>
              <input
                type="text"
                name="lastName"
                onChange={handleChange}
                className="form-control"
                required
              />
            </div>
            <div className=" d-flex flex-column mb-2">
              <label className="form-label text-start  w-100">
                Email address
              </label>
              <input
                type="email"
                name="email"
                onChange={handleChange}
                className="form-control"
                required
              />
            </div>
            <div className="d-flex flex-column mb-2">
              <label className="form-label text-start  w-100">Password</label>
              <input
                type="password"
                name="password"
                onChange={handleChange}
                className="form-control"
                required
              />
            </div>

            <input
              type="submit"
              value={isLoading ? "Registering..." : "Register"}
              onChange={handleChange}
              style={{ backgroundColor: "#04739B" }}
              className="btn  rounded-0 border-0 w-100 text-light my-2"
            />
          </form>
          <span>{errorMessage}</span>
          <span>
            Already have an account <Link to="/signin">Sign In</Link>
          </span>
        </div>
      </div>
    </>
  );
};

export default SignUp;
