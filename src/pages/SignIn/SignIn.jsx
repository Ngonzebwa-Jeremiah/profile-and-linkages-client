import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./SignIn.css";
import { Urls } from '../../utils/links' 

import axios from "axios";

export default function SignIn() {


  const [ loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [personaData, setPersonalData] = useState("");
  const [info, setInfo] = useState("");

  const [data, setData] = useState({
    email:"",
    password:""
});

function handleChange(e){
  setData({...data, [e.target.name]: e.target.value});
}

function submit(e){
  e.preventDefault()

  setLoading(true)
fetch(`${Urls.baseUrl}/api/v1/auth/login`, {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    email:data.email,
    password:data.password
  }),
})
  .then((res) => res.json())
  .then((res) => {
    if (res.user) {
      setPersonalData(res)
      setMessage(res.message);
      setLoading(false);
      // localStorage.setItem('user',JSON.stringify(res.accessToken))

      return;
    }
    setLoading(false);
  })
  .catch((err) => {
    console.log(err);
    setMessage(err.msg)
  });
}

useEffect(() => {
  if(personaData){

  axios.get(`${Urls.baseUrl}/api/v1/userProfile`)
    .then((res) => {
      const userInfo = res.data.filter(data => data.user._id === personaData.user.id)

      if (res.data) {
        setInfo(userInfo);
      return;
      }
    })
  }
}, [personaData])


  return (
    <>
      <div className="container" width="30">
        <div className=" d-flex justify-content-center align-items-center flex-column shadow-lg p-3 mb-5 bg-body rounded p-4">
          <img
            src="/Images/outboxedu logo.png"
            alt="logo"
            height="50"
            width="50"
          />
          <span style={{ color: "#04739B" }} className="h5">
            Sign In
          </span>
          <form onSubmit={submit}>
            <div className=" mb-3">
              <label className="form-label ">Email address</label>
              <input
              type="email"
              name="email"
              onChange={handleChange}
              className="form-control"
              id="exampleInputEmail1"
              required
            />
            </div>
            <div className="mb-3">
              <label className="form-label">Password</label>
              <input
              type="password"
              name="password"
              onChange={handleChange}
              className="form-control"
              id="exampleInputPassword1"
              required
            />
            </div>

            <input
            type="submit"
            value={loading ? "logingin..." : "Login"}
            style={{ backgroundColor: "#04739B" }}
            className="btn  rounded-0 border-0 w-100 text-light my-2"
          />
          </form>

          {info && 
          <>
        <span> {message}</span>

        </>
        }
        {info && 
           <Link to={`/viewprofile/${info[0]._id}`} className="text-info border btn">
          View your profile
         </Link>
        // <></>
        }

          <span>
            I do not have an account{" "}
            <Link to="/signup">
              <span>Sign Up</span>
            </Link>
          </span>
        </div>
      </div>
    </>
  );
}
