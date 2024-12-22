import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
      <Link to="/">
        <img src="logo.png" alt="Brand Logo" />
      </Link>
      <Link to="/profile" className="nav-link">Profile</Link>

    </nav>
  );
};

export default Navbar;
