import React from 'react'
import { Link } from 'react-router-dom'
import './Signup.css'
import Navbar from '../../components/Nav/Navbar'

const SignUp = () => {
    return (
        <>
       <Navbar/>
       <div className="container-1">
      <div className=" d-flex justify-content-center align-items-center flex-column shadow-lg p-3 mb-5 bg-body rounded p-4">
        <img src="/Images/outboxedu logo.png" alt="logo" height="50" width="50" />
        <span style={{ color: "#04739B" }} className="h5 ">
          Sign up
        </span>
        <form>
          <div className="mb-3">
            <label className="form-label ">First Name</label>
            <input
              type="text"
              className="form-control"
              id="exampleInputEmail1"
              required
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Last Name</label>
            <input
              type="text"
              className="form-control"
              id="exampleInputEmail1"
              required
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Email address</label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              required
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Password</label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
              required
            />
          </div>

          <input
            type="submit"
            value="Submit"
            style={{ backgroundColor: "#04739B" }}
            className="btn  rounded-0 border-0 w-100 text-light my-3"
          />
        </form>
        <span>
          Already have an account{" "}
          <Link to="/signin">
            <a>Sign In</a>
          </Link>
        </span>
      </div>
    </div>
        </>
    )
}

export default SignUp
