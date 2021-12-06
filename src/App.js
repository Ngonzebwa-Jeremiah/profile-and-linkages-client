import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import { Routes, Route} from "react-router-dom";
import Home from "./pages/Home/Home";
import SignIn from "./pages/SignIn/SignIn";
import CreateProfile from "./pages/CreateProfile/CreateProfile"
import ViewProfile from "./pages/ViewProfile/ViewProfile";

import './App.css';
import SignUp from "./pages/SignUp/SignUp";
import Navbar from "./components/Nav/Navbar";
import Profile from "./pages/Profile/Profile";

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
        <Route path="/viewprofile/:id" element={<ViewProfile/>} />
      </Routes>
    </div>
  );
}

export default App;
