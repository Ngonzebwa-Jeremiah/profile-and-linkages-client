import React from "react";
import { Link } from "react-router-dom";
import "./Button.css";

export function SimplerButton(props) {
  return (
    <button
      type="submit"
      style={{ backgroundColor: "#04739B" }}
      className="btn  rounded-0 border-0 w-100 text-light my-2"
      onClick={props.onClick}
    >
      {props.text}
    </button>
  );
}

export function ButtonTertiary(props) {
    return (
        <div className="btn-tertiary" 
        onClick={props.onClick}>
            {props.text}
        </div>
    );
}

export function ButtonFilled(props) {
  return (
    <div className="buttonfilled" onClick={props.onClick}>
      <button>{props.text}</button>
    </div>
  );
}
export function ButtonOutlined(props) {
  return (
    <div className="buttonOutlined" onClick={props.onClick}>
      <a
        href={props.url}
        target="_blank"
        rel="noopener noreferrer"
        style={{ textDecoration: "none" }}
      >
        <button>{props.text}</button>
      </a>
    </div>
  );
}
export function ButtonOutlinedInternal(props) {
  return (
    <div className="buttonOutlined" onClick={props.onClick}>
      <Link to={props.url} style={{ textDecoration: "none" }}>
        <button>{props.text}</button>
      </Link>
    </div>
  );
}


