import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import { Routes, Route} from "react-router-dom";
import Home from "./pages/Home/Home";
import SignIn from "./pages/SignIn/SignIn";
import SignUp from "./pages/SignUp/SignUp";

import Error from "./pages/404/Error";
import Nav from "./components/Nav/Navbar";


import ViewProfile from "./pages/ViewProfile/ViewProfile";

import './App.css';

function App() {
  return (
    <div className="App">
      <Nav/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/signin" element={<SignIn/>} />
        <Route path="/signup" element={<SignUp/>} />

        <Route path="/viewprofile/:id" element={<ViewProfile/>} />
        <Route path="*" element={ <Error/>} />
      </Routes>
    </div>
  );
}

export default App;
