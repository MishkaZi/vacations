import React from "react";
import "./Menu.css";
import { NavLink } from "react-router-dom";

const Menu = (): JSX.Element => {
  return (
    <div className="Menu">
      <NavLink to="/home">Home</NavLink>

    </div>
  );
};

export default Menu;


