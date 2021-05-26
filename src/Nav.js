import React, { useState, useEffect } from "react";
import "./Nav.css";
function Nav() {
  const [navbarBlack, setNavbarBlack] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      setNavbarBlack(true);
    });
    return () => {
      window.removeEventListener("scroll");
    };
  }, []);
  return (
    <nav className={`${ navbarBlack && "nav__black" }`}>
      <div className="nav__contents">
        <img
          className="nav__logo"
          src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
          alt= "Nteflix Logo" 
        />
        <img
          className="nav__avatar"
           src="https://pbs.twimg.com/profile_images/1240119990411550720/hBEe3tdn_400x400.png"
          alt="Avatar Here"
        />
      </div>
    </nav>
  );
}

export default Nav;
