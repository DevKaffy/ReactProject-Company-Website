import React, {Fragment, useState} from 'react'
import { Link } from 'react-router-dom';
import "./Navbar.css"

const navItem = "About, Services, Project, Contacts".split(",");

const Navbar = () => {

  return (
    <nav className="nav-items">
      <div>
        {navItem.map((Item, ItemIndex) => (
          <Link to={`/${Item}`} key={ItemIndex}>
            {" "}
            {Item}
          </Link>
        ))}
      </div>
    </nav>
  );
}

export default Navbar