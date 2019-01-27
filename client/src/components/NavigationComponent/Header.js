import React from 'react';
import { Link } from 'react-router-dom';
import SearchBar from './SearchBar';


const Header = () => {
  return (
    <div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="EPIC">EPIC</Link>
        </li>
      </ul>
      <SearchBar />
    </div>
  );
};

export default Header;

