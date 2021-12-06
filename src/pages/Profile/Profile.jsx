import React, { useEffect, useState } from 'react'
import Border from '../../components/Border/Border'
// import Heading from '../../components/Heading/Heading'
import ProfileHeader from '../../components/ProfileHeader/ProfileHeader'
import {ParagraphBasic} from '../../components/Paragraph/Paragraph'
import Tags from '../../components/Tags/Tag'
import ProfileCard from '../../components/ProjectCard/ProjectCard'
import {ButtonOutlined} from '../../components/Button/Button'
import {  useParams   } from 'react-router-dom'
import { Urls } from '../../utils/links' 

import axios from "axios";


function Profile() {
    const { id } = useParams();
    const [data, setData] = useState("");

    console.log(data);

    useEffect(() => {
        axios
        .get(`${Urls.baseUrl}/api/v1/userProfile/${id}` )
        .then((res) => {
          // setInfo(res.data);
          if (res.data) {
            setData(res.data)
        // console.log(res.data);
          return;
          }
        })
          .catch((err) => {
            console.log(err);
            // setError(err.msg)
          });
    
    }, [id])

    console.log(data[0])

    return (
        <>
       { typeof data[0] != "undefined"?
        <div style={{width:'70vw', margin:'1% auto'}}>
            <ProfileHeader info = {data}/>
            <h5 title="Bio" className = "d-flex mb-2" style = {{color: "#096691 "}}>Bio</h5>
            <ParagraphBasic text={data[0].bio}/>
            <Border/>

            <h5 className = "d-flex mb-2 "style = {{color: "#096691 "}}>Technical Skills</h5>
            <Tags text1={data[0].technicalSkills1} text2={data[0].technicalSkills2} text3={data[0].technicalSkills3}/>
            <Border/>

            <h5  className = "d-flex mb-2" style = {{color: "#096691 "}}>Other Skills</h5>
            <Tags text1={data[0].otherSkills1} text2={data[0].otherSkills2} text3={data[0].otherSkills3}/>
            <Border/>

            {/* <h5 className = "d-flex mb-2"  style = {{color: "#096691 "}}>Certifications</h5>
            <Tags text="Product managment"/>
            <Border/> */}
            
            <h5 className = "d-flex mb-2" style = {{color: "#096691 "}}>Projects</h5> 
            <ProfileCard
            projectTitle1={data[0].projectTitle1}
            projectDescription1={data[0].projectDescription1}
            projectLink1={data[0].projectLink1}

            projectTitle2={data[0].projectTitle2}
            projectDescription2={data[0].projectDescription2}
            projectLink2={data[0].projectLink2}

            projectTitle3={data[0].projectTitle3}
            projectDescription3={data[0].projectDescription3}
            projectLink3={data[0].projectLink3}
            />
            <Border/>

            <h5 className = "d-flex mb-2" style = {{color: "#096691 "}}>Resume</h5>
            <ButtonOutlined text="View Resume" url = {data[0].resumeURL}/>

        </div>
        :"loading..."}
        </>
    )
}

export default Profile
