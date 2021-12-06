import React, { useState } from 'react'
import { Link, useNavigate  } from 'react-router-dom'
import './Signup.css'
// import { useStateValue } from "../../ContextAPI/StateProvider";
import { Urls } from '../../utils/links' 

const SignUp = () => {
  const [ loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  // const [{ response }, dispatch] = useStateValue();
  const navigate = useNavigate();

  const [data, setData] = useState({
    firstName:"",
    lastName:"",
    email:"",
    password:""
});

function handleChange(e){
  setData({...data, [e.target.name]: e.target.value});
}

function submit(e){
  e.preventDefault()
console.log(data.firstName, data.lastName, data.email);
// console.log(`heyy`);

setLoading(true)
fetch(`${Urls.baseUrl}/api/v1/auth/signup`, {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    firstName:data.firstName,
    lastName:data.lastName,
    email:data.email,
    password:data.password

  }),
})
  .then((res) => res.json())
  .then((res) => {
    console.log(res.accessToken);
    if (res.user) {
      
      setError(res.message);
      setLoading(false);
      navigate("/createprofile")
      localStorage.setItem('user',JSON.stringify(res.accessToken))
      return;
    }
    // setUser(res.user);
    setLoading(false);
  })
  .catch((err) => {
    console.log(err);
    setError(err.msg)
  });
}

    return (
        <>
       <div  className="d-flex justify-content-center align-items-center ">
      <div  className=" d-flex justify-content-center align-items-center flex-column shadow-lg p-3 mb-5 bg-body rounded p-5 border m-5">
        <img src="/Images/outboxedu logo.png" alt="logo" height="50" width="50" />
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
            <label className="form-label text-start  w-100">Last Name</label>
            <input
              type="text"
              name="lastName"
              onChange={handleChange}
              className="form-control"
              required
            />
          </div>
          <div className=" d-flex flex-column mb-2">
            <label className="form-label text-start  w-100">Email address</label>
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
            value={loading ? "loging in..." : "Login"}
            onChange={handleChange}
            style={{ backgroundColor: "#04739B" }}
            className="btn  rounded-0 border-0 w-100 text-light my-2"
          />
        </form>
        <span>{error}</span>
        <span>
          Already have an account{" "}
          <Link to="/signin">
          Sign In
          </Link>
        </span>
      </div>
    </div>
        </>
    )
}

export default SignUp
