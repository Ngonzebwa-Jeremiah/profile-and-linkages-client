import React from 'react'
import { ButtonFilled } from '../../Button/Button'
import "./ProjectCard.css"

export function UpLoadProfileImage() {
    return (
      <div style = {{ margin:"1px auto"}} className="w-50 d-flex justify-content-start align-items-center flex-column ">
      <div  className="avatar">
                      <img src="/Images/John.webp" sx={{ width: 76, height: 76 }} alt="User" />
                      </div>
      
                  <div className="d-flex justify-content-start align-items-center">
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
    )
}

