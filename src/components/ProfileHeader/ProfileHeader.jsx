
import React from 'react';
import "./ProfileHeader.css";
// import userProfilePic from "./images/user.png"

export default function ProfleHeader({info}) {

    return (
        <div className="profileHeader">
            {/* { 
            typeof info[0] != "undefined"? */}
          <>
            <div style={{borderBottom:"2px solid red"}} className="d-flex flex-column p-3 flex-row-reverse " >

            <img src="/Images/John.webp" alt="img" style = {{width : "50%"}} className="img"/>
            <div className="details"> 
                <span className="p">Awesome One</span>
                <span className="p">awesome@gmail.com</span>  
                <span className="p">0783439939</span> 
                <span className="p">Backend Developer</span> 
            </div>  
                
               
            </div>
            </>
            {/* :"Loading" */}
            {/* } */}
        </div> 
    )
}