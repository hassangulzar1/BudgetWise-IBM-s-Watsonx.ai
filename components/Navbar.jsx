import React from "react";
import "./Navbar.css";
import Image from "next/image";
import logo from "../assets/logo.png";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container container">
        <input type="checkbox" name="" id="" />
        <div className="hamburger-lines">
          <span className="line line1"></span>
          <span className="line line2"></span>
          <span className="line line3"></span>
        </div>
        <ul className="menu-items">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/budget">Add Budget</Link>
          </li>
        </ul>
        <Image src={logo} alt="Company Logo" height={60} width={200} />
      </div>
    </nav>
  );
};

export default Navbar;
