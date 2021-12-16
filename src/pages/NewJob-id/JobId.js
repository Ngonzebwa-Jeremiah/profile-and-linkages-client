import React from 'react'
import { ButtonFilled } from '../../components/Button/Button'
import "../NewJobs/Jobs.css"

const JobId = () => {
    return (
        <>
          <div className='Job-id'>
              <div className='Job-idContainer'>
              <h4 className='jobTitle'>
                    Lorem ipsumt amet consectetur
                    </h4>
                    <h5 className='jobArea'>
                     Amet consectetur
                    </h5>
                    <p className='jobDescription'>
                     ipsum debitis quas aliquid. Reprehenderit,
                    quia. Quo neque error repudiandae fuga? Ipsa laudantium molestias eos 
                    sapiente officiis modi at sunt excepturi 
                     </p>
                     <div>
                         <h4 className='jobTitle' style={{paddingTop:"2.5rem"}}> Qualifications/Technical skills</h4>
                         <ul>
                            
                            <li>  At least 5+ years of experience hand-coding HTML(5), CSS(3) and other UI technologies</li>
                            <li>  Deep understanding of object oriented JavaScript, solid programming background</li>
                            <li>   Experience in back-end frameworks used to develop dynamic web pages</li>
                            <li> Expertise developing and testing across multiple browsers, platforms, DOM implementations, etc.</li>
                            <li>Experience with XML: XSLT, DTD or Schema modeling, DOM/XPath/SAX parsing</li>
                
                          </ul>

                          <h4 className='jobTitle' style={{paddingTop:"2.5rem"}}> Other Skills</h4>
                          <ul>
                              <li>Communication skill</li>
                              <li>Team work</li>
                              <li>Listening skill</li>
                          </ul>
                        </div>
              </div>
              <ButtonFilled text= "APPLY"/>
          </div>
        </>
    )
}

export default JobId
