import React from "react";
import "./TitleRight.css";

// import { GoSettings } from "react-icons/go";
function Heading({ title }) {
  return (
    <div  className="h5 text-secondary mx-5 w-75 ">
      <span>
        {/* <GoSettings className={TitleRightCss.left_Title_icon} /> */}
        <h3 style = {{color: "#096691"}}> {title}</h3>
      </span>
    </div>
  );
}

export default Heading;
