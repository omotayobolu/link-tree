import React from "react";

import ZuriLogo from "../assets/zuri logo.png";
import I4GLogo from "../assets/I4G.png";

const Footer = () => {
  return (
    <footer className="mt-12 sm:px-[8%] sm:block">
      <hr />
      <div className="flex sm:flex-row flex-col gap-4 justify-between items-center py-8">
        <img src={ZuriLogo} alt="" />
        <p className="text-darkGrey">HNG Internship 9 Frontend Task</p>
        <img src={I4GLogo} alt="" />
      </div>
    </footer>
  );
};

export default Footer;
