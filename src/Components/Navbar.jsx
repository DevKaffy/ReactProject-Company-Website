import React, {Fragment, useState} from 'react'
import { Link, useNavigate } from 'react-router-dom';
import "./Navbar.css"

const navItem = "about,services,projects,contacts".split(",");

const Navbar = ({className}) => {
 const [showNav, setShowNav]= useState(false)
  return (
    <nav className={`nav-items ${className}`}>
      <Link to="/">
        <div className="left">
          <div className="circle"></div>
          <p className="build">Buildit</p>
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
      <a href="#form">
        <button className="project">Need a project?</button>
      </a>

      <p className="block md:hidden" onClick={()=>setShowNav(!showNav)}>
        <img src="/menu.svg" alt="" />
      </p>
        <div className={`bg-red-400 absolute ${showNav?"right-0":"-right-24"}  h-60 w-24 top-20 transition-all duration-150`}>
          {navItem.map((Item, ItemIndex) => (
            <Link to={`/${Item}`} key={ItemIndex}>
              {" "}
              {Item}
            </Link>
          ))}
        </div>
      {/* <div className="tab-mobile">
        <div className="items">
          {navItem.map((Item, ItemIndex) => (
            <Link to={`/${Item}`} key={ItemIndex}>
              {" "}
              {Item}
            </Link>
          ))}
        </div>
        <a href="#form">
          <button className="project">Need a project?</button>
        </a>
      </div> */}
    </nav>
  );
}

export default Navbar