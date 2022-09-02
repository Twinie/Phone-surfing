import React from "react";
import SmallHeaderList from "./SmallHeaderList";
import { useState } from "react";
// import ReactDOM from "react-dom/client";
import { GiHamburgerMenu } from "react-icons/gi";
import logo from "../logo-image/the-sims-mobile-mono-logo.png";

function SmallHeader() {
  const [open, setOpen] = useState(false);

  const update = () => {
    setOpen(!open);
  };
  return (
    <>
      <header>
        <nav className="small-navbar">
          <img src={logo} alt="logo" className="logo" />

          <GiHamburgerMenu style={{ color: "white" }} onClick={update} />
        </nav>
        <SmallHeaderList addOpen={open} />
      </header>
    </>
  );
}

export default SmallHeader;
