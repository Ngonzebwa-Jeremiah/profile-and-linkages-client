import React from 'react'
import styles from './Skills.module.css'; 

export default function Skills({allSkills}) {
    return ( 
            <div className={styles.skillTags}> 
               {allSkills.map((skill, index)=>(
                    <p className={styles.skill} key={index}>{skill}</p> 
               ))}  
            </div>
             
    )
}
