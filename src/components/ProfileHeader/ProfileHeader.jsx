
import React from 'react';
import "./ProfileHeader.css";
// import userProfilePic from "./images/user.png"

export default function ProfleHeader({info}) {

    return (
        <div className="profileHeader">
            { 
            typeof info[0] != "undefined"?
          <>
            <div style={{borderBottom:"2px solid red"}} className="d-flex flex-column p-3 flex-row-reverse " >

            {/* <img src="/Images/John.webp" alt="img" style = {{width : "50%"}} className="img"/> */}
            <div className="details"> 
                <span className="p">{info[0].user.firstName} {info[0].user.lastName}</span>
                <span className="p">{info[0].title}</span>  
                <span className="p">{info[0].phoneNumber}</span> 
                <span className="p">{info[0].user.email}</span> 
            </div>  
                
               
            </div>
            </>
             :"Loading"
             } 
        </div> 
    )
}