import React from 'react'
import "./Button.css";
import Link from 'next/link';



export function SimplerButton(props) {
    return (
        <button type="submit" style={{ backgroundColor: '#04739B' }} className="btn  rounded-0 border-0 w-100 text-light my-2" onClick={props.onClick}>{props.text}</button>
    )
}

export function ButtonFilled(props) {
    return (
        <div className="buttonfilled" onClick={props.onClick}>
            <button>{props.text}</button>
        </div>
    )
}
export function ButtonOutlined(props) {
    return (
        <div className="buttonOutlined"onClick={props.onClick}>
             <Link to={props.url} target="_blank" rel="noopener noreferrer" style={{textDecoration:"none"}}>
                {/* <a >  */}
                <button>
          
                {props.text}
                </button>
                {/* </a> */}
            </Link>
        </div>
    )
}

