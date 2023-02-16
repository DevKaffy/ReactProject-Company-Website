import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const navItem = "about,services,projects,contacts".split(",");

const Navbar = () => {
  const [showNav, setShowNav] = useState(false);
  const [color] = useState(false);
  const [bg, setbgcolor] = useState("transparent");

  const changeColor = () => {
    console.log("I got here");

    let windowHeight = window.scrollY;
    console.log(windowHeight);
    windowHeight > 500 ? setbgcolor("red") : setbgcolor("black");
  };

  useEffect(() => {
    const onScroll = (event) => console.info("scrolling", event);

    window.addEventListener("scroll", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <nav className={color ? "nav-header" : ""}>
      <div className="nav-items center">
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

        {/*Mobile tab*/}
        <>
          <div className="block md:hidden" onClick={() => setShowNav(!showNav)}>
            <img src="/menu.svg" alt="" />
          </div>

          <div
            className={`absolute capitalize ${
              showNav ? "right-0" : "-right-[15rem]"
            }  h-60 w-24 top-20 transition-all duration-150`}
          >
            {navItem.map((Item, ItemIndex) => (
              <Link to={`/${Item}`} key={ItemIndex}>
                {" "}
                {Item}
              </Link>
            ))}
          </div>
        </>
      </div>
    </nav>
  );
};

export default Navbar;
