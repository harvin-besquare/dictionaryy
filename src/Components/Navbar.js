import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../Logo.svg";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <Logo />
      <div className="nav-list">
        <Link to="/">
          <div className="home-btn">Home</div>
        </Link>
        <Link to="/about">
          <div className="about-btn">About</div>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;