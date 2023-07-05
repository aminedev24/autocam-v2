import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

import logo from './logo.svg';
import './header.css';
import "./search.scss"

function Header() {
  return (
    <header className="header">
      <img src={logo} alt="Logo" className="logo" />
      <div className="search-container">
        
        <form class='search'>
          <input class='searchTerm' placeholder="Enter your search term ... "/>
          <input class='searchButton' type="submit" />
        </form>
      </div>
    </header>
  );
}

export default Header;
