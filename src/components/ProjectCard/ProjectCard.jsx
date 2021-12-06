import React from 'react';
// import { Link } from 'react-router-dom';
import "./ProjectCard.css"
// import projectImage from "../images/project1.png";

export default function ProfileCard({projectTitle1,projectDescription1,projectLink1, projectTitle2,projectDescription2,projectLink2, projectTitle3,projectDescription3,projectLink3}) {
    return (
        <div className="projectcards">

<div style={{width:"260px"}} className=" d-flex justify-content-center align-items-center m-1 shadow-none p-3 mb-5 bg-light rounded" >
            {/* <Link to={projectLink1} target="_blank" rel="noopener noreferrer"> */}
                <a href={projectLink1}  target="_blank" rel="noopener noreferrer" style={{textDecoration:"none"}}>
                <div  className="img_container">
                    {/* <img src='/images/project1.png' alt="E commerce site" width={390}  height={250} className={styles.img}/> */}
                </div>
                    <div className="d-flex  flex-column ">
                    <span className="text-start text-secondary h5">{projectTitle1}</span>
                    <span className="text-secondary">{projectDescription1}</span> 
                    </div>
                </a>
            {/* </Link> */}
           </div>

           <div style={{width:"260px"}} className=" d-flex justify-content-center align-items-center m-1 shadow-none p-3 mb-5 bg-light rounded" >
           {/* <Link to={{projectLink2}} target="_blank" rel="noopener noreferrer"> */}
                <a href={projectLink2}  target="_blank" rel="noopener noreferrer" style={{textDecoration:"none"}} alt="user">
                <div  className="img_container">
                    {/* <img src='/images/project1.png' alt="E commerce site" width={390}  height={250} className={styles.img}/> */}
                </div>
                    <div className="d-flex  flex-column ">
                    <span className="text-start text-secondary h5">{projectTitle2}</span>
                    <span className="text-secondary">{projectDescription2}</span> 
                    </div>
                </a>
            {/* </Link> */}
           </div>

           <div style={{width:"260px"}} className=" d-flex justify-content-center align-items-center m-1 shadow-none p-3 mb-5 bg-light rounded" >
           {/* <Link to={projectLink3} target="_blank" rel="noopener noreferrer"> */}
                <a href={projectLink3} target="_blank" rel="noopener noreferrer" style={{textDecoration:"none"}} alt="user">
                <div  className="img_container">
                    {/* <img src='/images/project1.png' alt="E commerce site" width={390}  height={250} className={styles.img}/> */}
                </div>
                    <div className="d-flex  flex-column ">
                    <span className="text-start text-secondary h5">{projectTitle3}</span>
                    <span className="text-secondary">{projectDescription3}</span> 
                    </div>
                </a>
            {/* </Link> */}
           </div>

        </div>
    )
}
