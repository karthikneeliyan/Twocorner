import React from "react";
import logo from "../../assets/images/logo.svg";
import "./Logo.css";

export const Logo = () => {
  return (
    <div className="logo-content">
      <div className="logo">
        <img src={logo} alt="" />
      </div>
    </div>
  );
};
