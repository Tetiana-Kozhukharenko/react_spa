import React from "react";
import { Link } from "react-router-dom";
import './nav-menu.css';

const NavMenu = () => {
  return(
    <header>
      <nav>
        <ul className="nav-list">
          <li className="nav-item">
            <Link to='/' className="nav-link">Home</Link>
          </li>
          <li className="nav-item">
            <Link to='/publications' className="nav-link">Publications</Link>
          </li>
          <li className="nav-item">
            <Link to='/photographs' className="nav-link">Photographs</Link>
          </li>
          <li className="nav-item">
            <Link to='/contacts' className="nav-link">Contacts</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}
export default NavMenu;