import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import './Navbar.css';
import '../App';
import axios from 'axios';
import { withRouter } from '../components/withRouter';

function AuthNavbar(props) {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  const closeMobileMenu = () => setClick(false);

  const closeAndLogOut = (event) => {
    axios.post('http://localhost:3001/api/v1/logout?api_key='.concat(process.env.REACT_APP_API_KEY), 
    {withCredentials: true});
    props.handleLogout();
    closeMobileMenu(); 
    props.navigate('/');
}

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
            KPC
            <i class="fa-solid fa-golf-ball-tee"></i>
          </Link>
          <div className='menu-icon' onClick={handleClick}> 
            <i className={click ? 'fas fa-times' : 'fas fa-bars'}></i>
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link to='/dashboard' className='nav-links' onClick={closeMobileMenu}>
                TRIPS
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/login' className='nav-links' onClick={closeAndLogOut}>
                LOG OUT
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default withRouter(AuthNavbar);
