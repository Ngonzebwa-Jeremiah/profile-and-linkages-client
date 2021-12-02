/* eslint-disable @next/next/no-img-element */

import React from 'react'
import Image from "next/image";
import styles from "./ProfileCard.module.css"
import userProfilePic from "../images/user.png";
import Link from 'next/link';

export default function ProfileCard({fname,lname, title,img,id}) {
    return (
        // <Link href="[profile]/[id]" as={`/testprofile/${id}`} passHref>
        <a className={styles.card}>
            {/* <Image src={img} alt={fname} width={160}  height={160} className={styles.img}/> */}
            <img src={img} alt="img" width="300" height="300" className={styles.img}/>
            <p className={styles.p}>{fname} <span>{lname}</span> </p>
            <p className={styles.p}>{title}</p>  
        </a>
        // </Link>
    )
}
