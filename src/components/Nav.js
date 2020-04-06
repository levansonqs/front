import React from 'react';
import { Link, navigate } from '@reach/router';

import { localStorageKey, logout } from '../utils/api';

function Nav() {
  function handleLogout(e) {
    e.preventDefault();
    logout();
    navigate('/login');
  }
  return (
    <nav className="navbar col-lg-12 col-12 p-0 fixed-top d-flex flex-row">
      <div className="text-center navbar-brand-wrapper d-flex align-items-center justify-content-center">
        <Link className="navbar-brand brand-logo mr-5" to="/">
          <img src="images/logo.svg" className="mr-2" alt="logo" />
        </Link>
        <Link className="navbar-brand brand-logo-mini" to="/">
          <img src="images/logo-mini.svg" alt="logo" />
        </Link>
      </div>
      <div className="navbar-menu-wrapper d-flex align-items-center justify-content-end">
        <ul className="navbar-nav navbar-nav-right">
          {localStorage[localStorageKey] ? (
            <>
              <li className="nav-item dropdown mr-1">
                <Link
                  className="nav-link count-indicator dropdown-toggle d-flex justify-content-center align-items-center"
                  id="messageDropdown"
                  to="/dashboard"
                  data-toggle="dropdown"
                >
                  <span className="mr-1">Dashboard</span>
                  <i className="ti-dashboard" />
                </Link>
              </li>
              <li className="nav-item dropdown mr-1">
                <div
                  className="nav-link count-indicator dropdown-toggle d-flex justify-content-center align-items-center"
                  id="messageDropdown"
                  onClick={handleLogout}
                  data-toggle="dropdown"
                  onKeyPress={handleLogout}
                  role="button"
                  tabIndex="0"
                >
                  <span className="mr-1">Logout</span>
                  <i className="ti-shift-right" />
                </div>
              </li>
            </>
          ) : (
            <>
              <li className="nav-item dropdown mr-1">
                <Link
                  className="nav-link count-indicator dropdown-toggle d-flex justify-content-center align-items-center"
                  id="messageDropdown"
                  to="/login"
                  data-toggle="dropdown"
                >
                  <span className="mr-1">Login</span>
                  <i className="ti-import" />
                </Link>
              </li>
              <li className="nav-item dropdown mr-1">
                <Link
                  className="nav-link count-indicator dropdown-toggle d-flex justify-content-center align-items-center"
                  id="messageDropdown"
                  to="/register"
                  data-toggle="dropdown"
                >
                  <span className="mr-1">Register</span>
                  <i className="ti-plus" />
                </Link>
              </li>
            </>
          )}
        </ul>
      </div>
    </nav>
  );
}

export default Nav;
