import React, {Fragment, useState} from 'react'
import { Link, useNavigate } from 'react-router-dom';
import "./Navbar.css"

const navItem = "about,services,project,contacts".split(",");

const Navbar = ({className}) => {

  return (
      <nav className={`nav-items ${className}`}>
       <Link to ="/">
        <div className="left">
          <div className="circle"></div>
          <p className='build'>Buildit</p>
        </div>
       </Link> 
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