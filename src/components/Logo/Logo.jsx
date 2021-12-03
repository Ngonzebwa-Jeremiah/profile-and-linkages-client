import React from "react";
import Image from "next/image";
import Logo from "../../assets/images/logo4.png";
import logoCss from "./logo.module.css";

function logo() {
  return (
    <div className={logoCss.wrapper}>
      <div className={logoCss.logo}>
        <Image src={Logo} alt="Picture of the Logo" />
      </div>
    </div>
  );
}

export default logo;
