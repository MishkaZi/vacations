import React from "react";
import Logo from "../Logo/Logo";
import "./Header.css";

const Header = (): JSX.Element => {
  return (
    <div className="Header">
      <Logo />
      <h1>Mission Controll</h1>
    </div>
  );
};

export default Header;
