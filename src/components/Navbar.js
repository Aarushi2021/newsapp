
import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css'; // Import your CSS file

function Navbar() {
  return (
    <div className="navbar">
      <ul>
        <li>
          <NavLink to="/" activeClassName="active-link" exact>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/entertainment" activeClassName="active-link">
            Entertainment
          </NavLink>
        </li>
        <li>
          <NavLink to="/sports" activeClassName="active-link">
            Sports
          </NavLink>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
