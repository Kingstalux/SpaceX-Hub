import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../images/planet.png';

const Navbar = () => (
  <nav className="navbar">
    <div className="flex">
      <img className="logo-img" alt="logo" src={logo} />
      <h1 className="logo-text">Space Travelers&apos; Hub</h1>
    </div>
    <ul>
      <li>
        <NavLink to="/" activeclassname="active-link" className="link">Rockets</NavLink>
      </li>
      <li className="mission">
        <NavLink to="/missions" activeclassname="active-link" className="link">Missions</NavLink>
      </li>
      <li>
        <NavLink to="/myprofile" activeclassname="active-link" className="link">My Profile</NavLink>
      </li>
    </ul>
  </nav>
);

export default Navbar;
