import React from 'react'
import FormCss from "./Forms.module.css";

export function FormsText(props) {
    return (
        <div className={FormCss.FormsText}>
            {/* <form > */}
            <label >{props.title}</label>
            <input type="text" placeholder={props.placeholder} value={props.input} onChange={props.handler}/>  
                
            {/* </form> */}
        </div>
    )
}

export function FormsTextArea(props) {
    return (
        <div className={FormCss.FormsTextArea}>
            <label >{props.title}</label>
            <textarea  rows="4" cols="50" placeholder={props.placeholder} value={props.input} onChange={props.handler}/>
              
        </div>
    )
}