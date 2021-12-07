import React from 'react'
import { ButtonFilled, ButtonOutlined } from '../../components/Button/Button'
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
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label"></label>
    <input type="email" class="form-control" id="exampleInputEmail1" placeholder= "Email address" aria-describedby="emailHelp"/>
    
  </div>
  <div class="mb-3">
    <input type="password" class="form-control" placeholder= "Password" id="exampleInputPassword1"/>
  </div>
   <div class="mb-3">
   <select required  class="form-select">
            <option disabled selected >
              Job title
            </option>
            <option value="Frontend">Frontend</option>
            <option value="Backend">Backend</option>
            <option value="Fullstack">Fullstack</option>
            <option value="UI/UX">UI/UX</option>
          </select>
   </div>
  <div class="mb-3">
    <input type="password" class="form-control" placeholder= "Github Handle" id="exampleInputPassword1"/>
  </div>
  <div class="mb-3">
    <input type="password" class="form-control" placeholder= "Password" id="exampleInputPassword1"/>
  </div>

  <ButtonFilled text = "Submit"/>
</form>
    </div>
  )
}

export default JobApply
