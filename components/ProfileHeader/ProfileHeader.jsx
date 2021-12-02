
import React from 'react';
import Image from 'next/image';
import styles from "./ProfileHeader.module.css";
// import userProfilePic from "./images/user.png"

export default function ProfleHeader({info}) {

    return (
        <div className={styles.profileHeader}>
            { 
            typeof info[0] != "undefined"?
          <>
            <div style={{borderBottom:"2px solid red"}} className="d-flex justify-content-end p-3" >
            <div className={styles.details}> 
                <span className={styles.p}>{info[0].user.firstName} {info[0].user.lastName}</span> 
                <span className={styles.p}>{info[0].title}</span>  
                <span className={styles.p}>{info[0].phoneNumber}</span>
                <span className={styles.p}>{info[0].user.email}</span> 
            </div>  
                {/* <Image src='/images/user.png' alt="name" width={150}  height={150} className={styles.img}/> */}
                {/* <img src={userProfilePic} alt="img" width="150" height="150" className={styles.img}/> */}
            </div>
            </>:"Loading"
            }
        </div> 
    )
}