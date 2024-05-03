import React from "react";
import "./Navbar.css";
import Logo from "../../assets/logo.png";
import SearchIcon from "../../assets/search_icon.svg";
import BellIcon from "../../assets/bell_icon.svg";
import UserIcon from "../../assets/user_icon.png";
import ArrowIcon from "../../assets/arrow_icon.svg";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar-left">
        <img src={Logo} alt="netflix logo" />
        <ul>
          <li>Home</li>
          <li>TV Shows</li>
          <li>Movies</li>
          <li>New & Popular</li>
          <li>My List</li>
          <li>Browse by Languages</li>
        </ul>
      </div>
      <div className="navbar-right">
        <img src={SearchIcon} alt="search icon" className="icons" />
        <p>Nadia Bouli</p>
        <img src={BellIcon} alt="bell icon" className="icons" />
        <div className="user-profile-navbar">
          <img src={UserIcon} alt="user icon" className="user-profile" />
                  <img src={ArrowIcon} alt="arrow icon" className="arrow-icon" />
                  <div className="dropdown">
                      <p>Sign Out of Netflix</p>
                  </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
