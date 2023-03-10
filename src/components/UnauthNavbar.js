import React, {useState} from 'react';
import { Link } from 'react-router-dom'
import './Navbar.css';
import '../App'

function UnauthNavbar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  const closeMobileMenu = () => setClick(false);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
            KPC
            <i className="fa-solid fa-golf-ball-tee"></i>
          </Link>
          <div className='menu-icon' onClick={handleClick}> 
            <i className={click ? 'fas fa-times' : 'fas fa-bars'}></i>
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                HOME
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/login' className='nav-links' onClick={closeMobileMenu}>
                LOG IN
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/register' className='nav-links' onClick={closeMobileMenu}>
                REGISTER
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default UnauthNavbar;
