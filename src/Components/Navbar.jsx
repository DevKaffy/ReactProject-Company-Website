import React, {Fragment, useState} from 'react'
import { Link } from 'react-router-dom';
import "./Navbar.css"

const navItem = "About,Services,Project,Contacts".split(",");

const Navbar = () => {

  return (
     
      <nav className="nav-items">
        <div className="left">
          <div className="circle"></div>
          <p className='build'>Buildit</p>
        </div>
        <div className="items">
          {navItem.map((Item, ItemIndex) => (
            <Link to={`/${Item}`} key={ItemIndex}>
              {" "}
              {Item}
            </Link>
          ))}
        </div>
        <button className="project">Need a project?</button>
      </nav>
  );
}

export default Navbar