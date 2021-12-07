import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import { Routes, Route} from "react-router-dom";
import Home from "./pages/Home/Home";
import SignIn from "./pages/SignIn/SignIn";
import SignUp from "./pages/SignUp/SignUp";

import Error from "./pages/404/Error";
import Nav from "./components/Nav/Navbar";

import EditProfile from "./pages/EditProfile/EditProfile"
import ViewProfile from "./pages/Profile/Profile";
import CreateProfile from "./pages/CreateProfile/CreateProfile"

import Profile from "./pages/Profile/Profile";
import Footer from "./components/Footer/Footer";
import './App.css';

function App() {
  return (
    <div className="App">
      <Nav/>
      <Routes>
        <Route path="/" element={<SignUp/>} />
        <Route path="/Home" element={<Home/>} />
        <Route path="/signin" element={<SignIn/>} />

        <Route path="/viewprofile/:id" element={<ViewProfile/>} />
        <Route path="/createprofile" element={<CreateProfile/>} />
        <Route path="/profile" element={<Profile/>} />
        <Route path="/editprofile" element={<EditProfile/>} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
