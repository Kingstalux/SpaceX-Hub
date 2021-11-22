import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar">

    <h1 className="logo">Space Travelers' Hub</h1>
    <ul>
      <li>
        <NavLink to="/" activeClassName="active-link" className="link">Rockets</NavLink>
      </li>
      <li>
        <NavLink to="/missions" activeClassName="active-link" className="link">Missions</NavLink>
      </li>
      <li>
        <NavLink to="/myprofile" activeClassName="active-link" className="link">My Profile</NavLink>
      </li>
    </ul>
  </nav>
  )
  };

export default Navbar;
