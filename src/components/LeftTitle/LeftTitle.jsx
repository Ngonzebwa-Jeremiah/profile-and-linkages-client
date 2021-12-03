import React from "react";
import LeftMenuCss from "./leftTitle.module.css";

import { GoSettings } from "react-icons/go";
function LeftTitle({ title }) {
  return (
    <div className={LeftMenuCss.left_Title}>
      <span>
        <GoSettings className={LeftMenuCss.left_Title_icon} />
        <h3> {title}</h3>
      </span>
    </div>
  );
}

export default LeftTitle;
