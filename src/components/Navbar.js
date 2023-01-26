import React, {useState} from 'react';
import { Link} from 'react-router-dom'

function Navbar() {
  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo">
            KPC <i class="fa-solid fa-golf-ball-tee"></i>
          </Link>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
