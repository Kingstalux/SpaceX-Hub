import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../images/planet.png';

const Navbar = () => (
  <nav className="navbar">
    <div className="flex">
      <img className="logo-img" alt="logo" src={logo} />
      <h1 className="logo-text">Space Travelers&apos; Hub</h1>
    </div>
    <div>
      <ul>
        <li className="link">
          <NavLink to="/" activeclassname="active-link">Rockets</NavLink>
        </li>
        <li className="link">
          <NavLink to="/missions" activeclassname="active-link">Missions</NavLink>
        </li>
        <li className="link">
          <NavLink to="/myprofile" activeclassname="active-link">My Profile</NavLink>
        </li>
      </ul>
      <hr />
    </div>
  </nav>
);

export default Navbar;
