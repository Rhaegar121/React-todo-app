import React, { useState, useRef } from "react";
import { useOnClickOutside } from "../useOnClickOutside";

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const [dropdown, setDropdown] = useState(false);
  const ref = useRef();

  useOnClickOutside(ref, dropdown, () => setDropdown(false));

  return (
    <nav className="navbar">
      <button className="toggle" onClick={() => setNavbarOpen((prev) => !prev)}>
        {navbarOpen ? "close" : "open"}
      </button>
      <ul className={`menu-nav${navbarOpen ? ' show-menu' : ''}`}>
        <li>Home</li>
        <li>About</li>
        <li>
          <button onClick={() => setDropdown(!dropdown)}>
            Services <span>&#8595;</span>
          </button>
          {dropdown && (
            <ul>
              <li>Design</li>
              <li>Development</li>
            </ul>
          )}
        </li>
      </ul>
    </nav>
  );
};
export default Navbar;
