import React from 'react';
import { Link } from 'react-router-dom';
import SearchBar from './SearchBar';
import './Header.css';
import './SearchBar.css';


const Header = () => {
  return (
    <div className="NavBar">
      <div className="NavBox">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/EPIC">EPIC</Link>
          </li>
          <div id="SearchBox">
            <SearchBar />
          </div>
        </ul>
      </div>
    </div>
  );
};

export default Header;

