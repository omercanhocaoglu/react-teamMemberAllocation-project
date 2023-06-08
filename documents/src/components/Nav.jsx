import React from 'react';
import { Link } from 'react-router-dom';

function Nav () {
  return (
    <div>
        <nav className='navbar navbar-expand-lg navbar-light bg-light'>
            <ul className='navbar-nav me-auto mb-2 mb-lg-0'>
                <li className='nav-item'>
                    <Link className='nav-link' to="/"> Home </Link>
                </li>
                <li className='nav-item'>
                    <Link className='nav-link' to="/GroupedTeamMembers"> Teams </Link>
                </li>
            </ul>
        </nav>
    </div>
  )
};

export default Nav;