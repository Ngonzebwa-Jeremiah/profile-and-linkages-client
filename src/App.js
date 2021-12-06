import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import { Routes, Route} from "react-router-dom";
import Home from "./pages/Home/Home";
import SignIn from "./pages/SignIn/SignIn";
import CreateProfile from "./pages/CreateProfile/CreateProfile"

import './App.css';
import SignUp from "./pages/SignUp/SignUp";
import Navbar from "./components/Nav/Navbar";
import Profile from "./pages/Profile/Profile";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/signin" element={<SignIn/>} />
        <Route path="/signup" element={<SignUp/>} />
        <Route path="/createprofile" element={<CreateProfile/>} />
        <Route path="/profile" element={<Profile/>} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
