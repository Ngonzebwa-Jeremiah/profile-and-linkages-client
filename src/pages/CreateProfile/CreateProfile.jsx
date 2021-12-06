import React, { useState } from 'react'
import axios from "axios";
import { Link  } from 'react-router-dom'
import { Urls } from '../../utils/links' 

import Heading from '../../components/Heading/Heading'
// import {UpLoadProfileImage} from "../../components/UI/UpLoadImage/UpLoadImage"

const CreateProfile = () => {

  const [info, setInfo] = useState("");
  // const [userData, setUserData] = useState("");

  // const navigate = useNavigate();
  const token =  JSON.parse(localStorage.getItem("user"))  
  // console.log(token)
  

  const [data, setData] = useState({
    // firstName:"",
    // lastName:"",
    userName:"",
    email:"",
    title:"",
    jobStatus:"",
    phoneNumber:"",
    bio:"",
    technicalSkills1:"",
    technicalSkills2:"",
    technicalSkills3:"",
    otherSkills1:"",
    otherSkills2:"",
    otherSkills3:"",
    projectTitle1:"",
    projectDescription1:"",
    projectLink1:"",
    projectTitle2:"",
    projectDescription2:"",
    projectLink2:"",
    projectTitle3:"",
    projectDescription3:"",
    projectLink3:"",
    resumeURL:"",
    accountStatus:""
});
// console.log( response.token);

function handleChange(e){
  setData({...data, [e.target.name]: e.target.value});
}

  const config = {
    headers: {
      Authorization:token,
    },
  };

  const handleSubmit = (event) => {
    event.preventDefault()
// console.log(data);
axios
    .post(`${Urls.baseUrl}/api/v1/userProfile`, data,config)

    .then((res) => {
      console.log(res);
      setInfo(res.data);
      // if (res.data) {
        // navigate("/profile")
      // return;
      // }
    })
      .catch((err) => {
        console.log(err);
        // setError(err.msg)
      });
  }
    return (
        <>
           <div className="d-flex justify-content-center align-items-center flex-column  m-3 ">
            <Heading title="Individual profile form"  />
            <h5 className="h5 text-secondary mx-5 ">Profile Image</h5>
            {/* <UpLoadProfileImage/> */}

        {/* Form */}
        <form onSubmit={handleSubmit} className=" d-flex justify-content-center align-items-center flex-column mb-2 ">
          {/* <span className="h4">{response.user.firstName}, {response.user.lastName} </span> */}
          {/* <div className="mb-2">
            <label className="form-label">First Name</label>
            <input
              type="text"
              name="firstName"
              onChange={handleChange}
              className="form-control"
               required
            />
          </div>
          <div className="mb-2">
            <label className="form-label">Last Name</label>
            <input
              type="text"
              name="lastName"
              onChange={handleChange}
              className="form-control"
              required
            />
          </div> */}
            <label className="form-label  w-100">Username</label>
            <input
              type="text"
              name="userName"
              onChange={handleChange}
              className="form-control"
              required
            />
          <label className="form-label w-100">Title</label>
          <select name="title" onChange={handleChange} className="form-select form-select-sm " aria-label=".form-select-sm example" required>
  <option defaultValue>None</option>
  <option value="Backend Developer">Backend Developer</option>
  <option value="Full Stack Developer">Full Stack Developer</option>
  <option value="Dev Ops">Dev Ops</option>
</select>

<label className="form-label w-100">Status</label>
          <select name="jobStatus" onChange={handleChange} className="form-select form-select-sm " aria-label=".form-select-sm example" required>
  <option defaultValue>None</option>
  <option value="Volunteer">Volunteer</option>
  <option value="Part time Employed">Part time Employed</option>
  <option value="Permanent Employed">Permanent Employed</option>
</select>

            <label className="form-label w-100">Email address</label>
            <input
              type="email"
              name="email"
              onChange={handleChange}
              className="form-control"
              required
            />

            <label className="form-label w-100">Phone Number</label>
            <input
              type="number"
              name="phoneNumber"
              onChange={handleChange}
              className="form-control"
              required
            />


            <label className="form-label w-100">Bio</label>
          <textarea
          name="bio"
          onChange={handleChange}
           className="form-control" 
          placeholder="About you in 500 words"
           id="floatingTextarea2" 
           style={{ height: "100px" }}></textarea>

{/*Technical Skills Tags */}
<h5 className="h5 text-secondary m-4 ">Technical Skills</h5>

<div className="d-flex flex-wrap  justify-content-center w-100"> 

          <div className="mb-2 w-25 m-1 ">
          <select 
          name="technicalSkills1"
           onChange={handleChange}
          className="form-select form-select-sm " 
          aria-label=".form-select-sm example" 
          required>
  <option defaultValue>None</option>
  <option value="CSS">CSS</option>
  <option value="React">React</option>
  <option value="Java Script">Java Script</option>
</select>
          </div>

          <div className="mb-2 w-25 m-1">
          <select
          name="technicalSkills2"
          onChange={handleChange}
          className="form-select form-select-sm " aria-label=".form-select-sm example" required>
   <option defaultValue>None</option>
  <option value="CSS">CSS</option>
  <option value="React">React</option>
  <option value="Java Script">Java Script</option>
</select>
          </div>

          <div className="mb-2 w-25 m-1">
          <select 
          name="technicalSkills3"
          onChange={handleChange}
          className="form-select form-select-sm " aria-label=".form-select-sm example" required>
   <option defaultValue>None</option>
  <option value="CSS">CSS</option>
  <option value="React">React</option>
  <option value="Java Script">Java Script</option>
</select>
          </div>
</div>

{/* Other Skills Tags */}
<h5 className="h5 text-secondary m-3 ">Other Skills</h5>

<div className="d-flex flex-wrap justify-content-center w-100"> 

          <div className="mb-2 w-25 m-1">
          <select 
          name="otherSkills1"
          onChange={handleChange}
          className="form-select form-select-sm " aria-label=".form-select-sm example" required>
          <option defaultValue>None</option>
  <option value="Express">Express</option>
  <option value="SQL">SQL</option>
  <option value="Mongoose">Mongoose</option>
</select>
          </div>

          <div className="mb-2 w-25 m-1">
          <select
          name="otherSkills2"
          onChange={handleChange}
          className="form-select form-select-sm " aria-label=".form-select-sm example" required>
          <option defaultValue>None</option>
  <option value="Express">Express</option>
  <option value="SQL">SQL</option>
  <option value="Mongoose">Mongoose</option>
</select>
          </div>

          <div className="mb-2 w-25 m-1">
          <select
          name="otherSkills3"
          onChange={handleChange}
          className="form-select form-select-sm " aria-label=".form-select-sm example" required>
         <option defaultValue>None</option>
  <option value="Express">Express</option>
  <option value="SQL">SQL</option>
  <option value="Mongoose">Mongoose</option>
</select>
          </div>
</div>

        {/* Project1 */}
<h5 className="h5 text-secondary m-3 ">Project 1</h5>
            <label className="form-label w-100">Project Name</label>
            <input
            name="projectTitle1"
            onChange={handleChange}
              type="text"
              className="form-control"
            />
            <label className="form-label w-100">Project Description</label>
            <textarea
             name="projectDescription1"
             onChange={handleChange}
              type="text"
              className="form-control"
            />
           <label className="form-label w-100">Project Link</label>
            <input
             name="projectLink1"
             onChange={handleChange}
              type="text"
              className="form-control"
            />
          {/* end */}

  {/* Project2 */}
  <h5 className="h5 text-secondary m-3 ">Project 2</h5>
            <label className="form-label w-100">Project Name</label>
            <input
             name="projectTitle2"
             onChange={handleChange}
              type="text"
              className="form-control"
            />
            <label className="form-label w-100">Project Description</label>
            <textarea
            name="projectDescription2"
            onChange={handleChange}
              type="text"
              className="form-control"
            />
           <label className="form-label w-100">Project Link</label>
            <input
            name="projectLink2"
            onChange={handleChange}
              type="text"
              className="form-control"
            />
          {/* end */}

            {/* Project3 */}
<h5 className="h5 text-secondary m-3 ">Project 3</h5>
            <label className="form-label w-100">Project Name</label>
            <input
            name="projectTitle3"
            onChange={handleChange}
              type="text"
              className="form-control"
            />
            <label className="form-label w-100">Project Description</label>
            <textarea
            name="projectDescription3"
            onChange={handleChange}
              type="text"
              className="form-control"
            />
           <label className="form-label w-100">Project Link</label>
            <input
            name="projectLink3"
            onChange={handleChange}
              type="text"
              className="form-control"
            />
          {/* end */}


          <h5 className="h5 text-secondary m-4 ">Resume</h5>
            <input
             name="resumeURL"
             onChange={handleChange}
              type="text"
              className="form-control"
              placeholder="Paste a link of your Resume pdf"
              required
            />
{/* Button */}
          <input
            type="submit"
            value="Submit Form"
            style={{ backgroundColor: "#04739B" }}
            className="btn  rounded-0 border-0 w-100 text-light my-2"
          />

        </form>

        {info &&
        <>
<span className="h4">{info.message}</span>
        
        <button className="btn border">
        <Link to={`/viewprofile/${info.userProfile._id}`} >
view profile
        </Link>
        </button>
        </>
        }

        </div>
        </>
    )

}

export default CreateProfile
