import React, { useState, useRef } from "react";
import { useOnClickOutside } from "../useOnClickOutside";
import { MdClose } from 'react-icons/md';
import { FiMenu } from 'react-icons/fi';

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const [dropdown, setDropdown] = useState(false);
  const ref = useRef();

  useOnClickOutside(ref, dropdown, () => setDropdown(false));

  return (
    <nav className="navbar">
      <button
  className="toggle"
  onClick={() => setNavbarOpen((prev) => !prev)}
>
  {navbarOpen ? (
    <MdClose style={{ width: '32px', height: '32px' }} />
  ) : (
    <FiMenu
      style={{
        width: '32px',
        height: '32px',
      }}
    />
  )}
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
