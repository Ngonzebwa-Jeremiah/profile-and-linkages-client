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
            <Heading title="Bio"/>
            <ParagraphBasic text="John Magele is a Web developer professional and Techmunch, an inbound marketing and sales platform that helps companies attract visitors, convert leads, and close customers.
            John Magele is a Web developer professional and Techmunch, an inbound marketing and sales platform that helps companies attract visitors, convert leads, and close customers"/>
            <Border/>

            <Heading title="Technical Skills"/>
            <Tags text="CSS"/>
            <Border/>

            <Heading title="Other Skills"/>
            <Tags text="Express JS"/>
            <Border/>

            <Heading title="Certifications"/>
            <Tags text="Product managment"/>
            <Border/>
            
            <Heading title="Projects"/>
            <ProfileCard/>
            <Border/>

            <Heading title="Resume"/>
            <ButtonOutlined text="View Resume" url = "#" />

        </div>
        </>
    )
}

export default profile
