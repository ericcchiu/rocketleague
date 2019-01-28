import React from 'react';
import { Link } from 'react-router-dom';
import SearchBar from './SearchBar';
import './Header.css';


const Header = () => {
  return (
    <div className="NavBar">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/EPIC">EPIC</Link>
        </li>
        <div className="SearchBar"><SearchBar /></div>

      </ul>
    </div>
  );
};

export default Header;

