import React, { useState } from "react";
import "./Navbar.css";
import { Link, NavLink } from "react-router-dom";

function Navbar() {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <div>
      <nav>
        <Link to="/" className="title">Logo</Link>
        <div className="menu" onClick={() => setOpenMenu(!openMenu)}>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <ul className={openMenu ? "open" : ""}>
          <NavLink to="/" ><li>Home</li></NavLink>
          <NavLink to="/about" ><li>About</li></NavLink>
          <NavLink to="/contact" ><li>Contact</li></NavLink>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
