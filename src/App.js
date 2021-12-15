import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import { Routes, Route} from "react-router-dom";
import SignIn from "./pages/SignIn/SignIn";
import SignUp from "./pages/SignUp/SignUp";
import Error from "./pages/404/Error";
import Nav from "./components/Nav/Navbar";


import ViewProfile from "./pages/Profile/Profile";
import CreateProfile from "./pages/CreateProfile/CreateProfile"
import Profile from "./pages/Profile/Profile";
import Footer from "./components/Footer/Footer";
import './App.css';
import Jobid from "./pages/Jobid/Jobid";
import Jobs from "./pages/NewJobs/Jobs";

function App() {
  return (
    <div className="App">
      <Nav/>
      <Routes>
        <Route path="/jobs" element={<Jobs/>} />
        <Route path="/signin" element={<SignIn/>} />
        <Route path="/signup" element={<SignUp/>} />
        <Route path="/viewprofile/:id" element={<ViewProfile/>} />
        <Route path="*" element={ <Error/>} />
        <Route path="/createprofile" element={<CreateProfile/>} />
        <Route path="/profile" element={<Profile/>} />
         <Route path="/jobs/:id" element={<Jobid/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
