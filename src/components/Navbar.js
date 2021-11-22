import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../images/planet.png';

const Navbar = () => (
  <nav className="navbar">
    <img className="logo-img" alt="logo" src={logo} />
    <h1 className="logo-text">Space Travelers&apos; Hub</h1>
    <ul>
      <li>
        <NavLink to="/" activeClassName="active-link" className="link" exact>Rockets</NavLink>
      </li>
      <li>
        <NavLink to="/missions" activeClassName="active-link" className="link" exact>Missions</NavLink>
      </li>
      <li>
        <NavLink to="/myprofile" activeClassName="active-link" className="link" exact>My Profile</NavLink>
      </li>
    </ul>
  </nav>
);

export default Navbar;
