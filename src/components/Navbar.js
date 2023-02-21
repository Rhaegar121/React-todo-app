import React, { useState } from 'react';
import { MdClose } from 'react-icons/md';
import { FiMenu } from 'react-icons/fi';

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const [dropdown, setDropdown] = useState(false);

  return (
    <nav className="navbar">
      <button
        type="button"
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
          <button type="button" onClick={() => setDropdown(!dropdown)}>
            Services
            {' '}
            <span>&#8595;</span>
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
