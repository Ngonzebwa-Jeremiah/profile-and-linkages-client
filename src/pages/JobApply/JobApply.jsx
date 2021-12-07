import React from 'react'
import { ButtonFilled} from '../../components/Button/Button'
import Heading from '../../components/Heading/Heading'

const JobApply = () => {
  return (
    <div>
      
      <form style= {{width:"70%", margin:"3% auto"}}>
      <div style={{textAlign:"center"}} className="mt-3">
      <Heading title ="Job Application"/>
      </div>
      <div>
      <div className="d-flex  align-items-center ">
                  <div className="mb-1 d-flex flex-wrap">
                    <label className="form-label">Attach Image </label>
                    <input
                      type="file"
                      className="form-control"
                      required
                    />
                  </div>
                  <ButtonFilled text="Submit Image"/>
      
                  </div>
      </div>
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label"></label>
    <input type="email" className="form-control"  placeholder= "Email address" aria-describedby="emailHelp"/>
    
  </div>
  <div className="mb-3">
    <input type="password" className="form-control" placeholder= "Password" />
  </div>
   <div className="mb-3">
   <select required  className="form-select" defaultValue={'DEFAULT'}>
       <option value="DEFAULT" disabled>Job Title</option>
            <option value="Frontend">Frontend</option>
            <option value="Backend">Backend</option>
            <option value="Fullstack">Fullstack</option>
            <option value="UI/UX">UI/UX</option>
          </select>
   </div>
  <div className="mb-3">
    <input type="text" className="form-control" placeholder= "Github Handle" />
  </div>
 

  <ButtonFilled text = "Submit"/>
</form>
    </div>
  )
}

export default JobApply
