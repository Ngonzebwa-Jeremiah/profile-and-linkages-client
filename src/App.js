import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import { Routes, Route } from "react-router-dom";
import SignIn from "./pages/SignIn/SignIn";
import SignUp from "./pages/SignUp/SignUp";
import Error from "./pages/404/Error";
import Nav from "./components/Nav/Navbar";
import Home from "./pages/Home/Home";

import EditProfile from "./pages/EditProfile/EditProfile"
import ViewProfile from "./pages/Profile/Profile";
import CreateProfile from "./pages/CreateProfile/CreateProfile"

import JobApply from "./pages/JobApply/JobApply"

import Profile from "./pages/Profile/Profile";
import Footer from "./components/Footer/Footer";
import './App.css';
import Jobs from "./pages/NewJobs/Jobs";
import JobId from "./pages/NewJob-id/JobId";

function App() {
  return (
    <div className="App">
      <Nav/>
      <Routes>
        <Route path="/jobs" element={<Jobs/>} />
        <Route path="/signin" element={<SignIn/>} />
        <Route path="/signup" element={<SignUp/>} />
        <Route path="/" element={<Home/>} />



        <Route path="/viewprofile/:id" element={<ViewProfile/>} />
        <Route path="/createprofile" element={<CreateProfile/>} />
        <Route path="/profile" element={<Profile/>} />

         <Route path="/jobs/:id" element={<JobId/>}/>

        <Route path="/editprofile/:id" element={<EditProfile/>} />
        <Route path="/*" element={<Error/>} />

        <Route path="/apply" element={<JobApply/>} />
        <Route path="/editprofile" element={<EditProfile/>} />

      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
