import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <header className="navbar">
      <div className="logo">
        <h2>Singularity</h2>
        <span>ARCHITECTS • EST. 2012</span>
      </div>

      <nav className="nav-links">
        <a href="#">ALL</a>
        <a href="#">ARCHITECTURE</a>
        <a href="#">INTERIORS</a>
        <a href="#">LANDSCAPE</a>
        <a href="#">PLANNING</a>
      </nav>

      <div className="nav-right">
        <a href="#">ABOUT</a>
        <a href="#">AWARDS</a>
        <a href="#">CONTACT</a>

        <button className="admin-btn">ADMIN ↗</button>
      </div>
    </header>
  );
};

export default Navbar;