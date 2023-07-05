import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapPin, faShoppingBasket, faHeart, faUser, faChevronDown, faBars } from "@fortawesome/free-solid-svg-icons";
import "./nav.css";

function Navigation({ country }) {
  const [showMenu, setShowMenu] = useState(false);
  const [showLocationMenu, setShowLocationMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const toggleLocationMenu = () => {
    setShowLocationMenu(!showLocationMenu);
  };

  const closeMenus = () => {
    setShowMenu(false);
    setShowLocationMenu(false);
  };

  return (
    <nav className="navigation">
      <button className="location-button" onClick={toggleLocationMenu}>
        <FontAwesomeIcon icon={faMapPin} className="location-icon" />
        <span className="location-name">
          Your country: {country || "Unknown"}{" "}
          <button className="btn-change">change</button>
        </span>
      </button>
      {showLocationMenu && (
        <div className="modal" onClick={toggleLocationMenu}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h2>Choose your country</h2>
              <button className="close-button" onClick={toggleLocationMenu}>
                X
              </button>
            </div>
            <hr />
            <div className="location-dropdown">
              <select
                className="location-menu"
                onChange={toggleLocationMenu}
              >
                <option value="" disabled selected>
                  Select your country
                </option>
                <option>Country 1</option>
                <option>Country 2</option>
                <option>Country 3</option>
              </select>
            </div>
          </div>
        </div>
      )}

      <button className="hamburger-menu" onClick={toggleMenu}>
        <FontAwesomeIcon icon={faBars} />
      </button>

      <ul className={`navbar-navs ${showMenu ? "show" : ""}`}>
        <li className="nav-item dropdown">
          <a className="nav-link" href="#" onClick={closeMenus}>
            About Us
          </a>
          <ul className="dropdown-menu">
            <li>
              <a href="#">Our Story</a>
            </li>
            <li>
              <a href="#">Our Team</a>
            </li>
            <li>
              <a href="#">Our Mission</a>
            </li>
          </ul>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link" href="#" onClick={closeMenus}>
            Stock List
          </a>
          <ul className="dropdown-menu">
            <li>
              <a href="#">Item 1</a>
            </li>
            <li>
              <a href="#">Item 2</a>
            </li>
            <li>
              <a href="#">Item 3</a>
            </li>
          </ul>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link" href="#" onClick={closeMenus}>
            Information
          </a>
          <ul className="dropdown-menu">
            <li>
              <a href="#">FAQ</a>
            </li>
            <li>
              <a href="#">Terms & Conditions</a>
            </li>
            <li>
            <a href="#">Privacy Policy</a>
            </li>
          </ul>
        </li>
      </ul>

      <div className="user-menu">
        <button className="user-button">
          <FontAwesomeIcon icon={faShoppingBasket} className="user-icon" />
        </button>
        <button className="user-button">
          <FontAwesomeIcon icon={faHeart} className="user-icon" />
        </button>
        <button className="user-button user-button-profile">
          <FontAwesomeIcon icon={faUser} className="user-icon" />
          <FontAwesomeIcon icon={faChevronDown} className="user-icon" />
          <div className="user-dropdown">
            <h6>Welcome to Autocom Japan</h6>
            <hr />
            <button className="sign-in-button">Sign In</button>
            <h6>New Customer?</h6>
            <hr />
            <button className="join-button">Join 100% Free!</button>
          </div>
        </button>
      </div>
    </nav>
  );
}

export default Navigation;

