import React from 'react'
import Border from '../../components/Border/Border'
import Heading from '../../components/Heading/Heading'
import ProfileHeader from '../../components/ProfileHeader/ProfileHeader'
import {ParagraphBasic} from '../../components/Paragraph/Paragraph'
import Tags from '../../components/Tags/Tag'
import ProfileCard from '../../components/ProjectCard/ProjectCard'
import {ButtonOutlined} from '../../components/Button/Button'


function profile() {
    return (
        <>
      
        <div style={{width:'70vw', margin:'1% auto'}}>
            <ProfileHeader/>
            <h5 title="Bio" className = "d-flex mb-2" style = {{color: "#096691 "}}>Bio</h5>
            <ParagraphBasic text="John Magele is a Web developer professional and Techmunch, an inbound marketing and sales platform that helps companies attract visitors, convert leads, and close customers.
            John Magele is a Web developer professional and Techmunch, an inbound marketing and sales platform that helps companies attract visitors, convert leads, and close customers"/>
            <Border/>

            <h5 className = "d-flex mb-2 "style = {{color: "#096691 "}}>Technical Skills</h5>
            <Tags text="CSS"/>
            <Border/>

            <h5  className = "d-flex mb-2" style = {{color: "#096691 "}}>Other Skills</h5>
            <Tags text="Express JS"/>
            <Border/>

            <h5 className = "d-flex mb-2"  style = {{color: "#096691 "}}>Certifications</h5>
            <Tags text="Product managment"/>
            <Border/>
            
            <h5 className = "d-flex mb-2" style = {{color: "#096691 "}}>Projects</h5> 
           <ProfileCard/>
            <Border/>

            <h5 className = "d-flex mb-2" style = {{color: "#096691 "}}>Resume</h5>
            <ButtonOutlined text="View Resume" url = "#" />

        </div>
        </>
    )
}

export default profile
