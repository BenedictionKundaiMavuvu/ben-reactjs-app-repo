import React from "react";
import { Link } from "react-router-dom";

export const NavBar = () => {
  return (
    <div>
      <Link to="/">Home</Link>
      <Link to="/Contact">Contact</Link>
      <Link to="/Profile">Profile</Link>
      <Link to="/CatFact">CatFact</Link>
    </div>
  );
};

export default NavBar;
