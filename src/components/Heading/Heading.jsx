import React from "react";
import "./TitleRight.css";

import { GoSettings } from "react-icons/go";
function Heading({ title }) {
  return (
    <div className="left_Title">
      <span>
        {/* <GoSettings className={TitleRightCss.left_Title_icon} /> */}
        <h3> {title}</h3>
      </span>
    </div>
  );
}

export default Heading;
