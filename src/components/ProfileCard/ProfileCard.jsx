import React from 'react'
import "./ProfileCard.css"
import userProfilePic from "../images/user.png";
// import { Link  } from 'react-router-dom'


export default function ProfileCard({fname,lname, title,img,id}) {
    return (
        // <Link href="[profile]/[id]" as={`/testprofile/${id}`} passHref>
        <div className="card">
            {/* <Image src={img} alt={fname} width={160}  height={160} className={styles.img}/> */}
            <img src={userProfilePic} alt="img" width="300" height="300" className="img"/>
            <p className="p">{fname} <span>{lname}</span> </p>
            <p className="p">{title}</p>  
        </div>
        // </Link>
    )
}
