import React from "react";
import "./Navbar.css";
import Image from "next/image";
import logo from "../assets/logo.png";
const Navbar = () => {
  return (
    <nav class="navbar">
      <div class="navbar-container container">
        <input type="checkbox" name="" id="" />
        <div class="hamburger-lines">
          <span class="line line1"></span>
          <span class="line line2"></span>
          <span class="line line3"></span>
        </div>
        <ul class="menu-items">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Category</a>
          </li>
        </ul>
        <Image src={logo} height={60} width={200} />
      </div>
    </nav>
  );
};

export default Navbar;
