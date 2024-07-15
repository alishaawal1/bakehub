import React from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import '../style/Navbar.css';
import logo from '../images/Logo.png';
import cartIcon from '../images/cart.png';
import profileIcon from '../images/profile.png';

const Navbar = () => {
  // get data of user form local storage
  const user = JSON.parse(localStorage.getItem('user'));

  // logout function
  const navigate = useNavigate();
  const handleLogout = (e) => {
    e.preventDefault();
    localStorage.clear();
    navigate('/login');
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg custom-navbar">
        <div className="container-fluid">
          <NavLink className="navbar-brand text-danger" to="/">
            <img src={logo} alt="Logo" height="55" width="80" />
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink className="nav-link" aria-current="page" to="/" activeclassname="active">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" aria-current="page" to="/categories">
                  Categories
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" aria-current="page" to="/cakes">
                  Cakes
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" aria-current="page" to="/contactus">
                  Contact Us
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" aria-current="page" to="/aboutus">
                  About Us
                </NavLink>
              </li>
            </ul>
            <div className="navbar-icons">
              <img src={cartIcon} alt="Cart" />
              <img src={profileIcon} alt="Profile" />
            </div>
            <form className="d-flex" role="search">
              {user ? (
                <div className="dropdown">
                  <button className="btn btn-outline-dark dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Welcome, {user.firstName}!
                  </button>
                  <ul className="dropdown-menu">
                    <li><Link className="dropdown-item" to="/profile">Profile</Link></li>
                    <li><Link className="dropdown-item" to="/passwordreset">Change password</Link></li>
                    <li><button onClick={handleLogout} className="dropdown-item" to="/logout">Logout</button></li>
                  </ul>
                </div>
              ) : (
                <>
                  <Link className="btn btn-outline-primary me-2" to="/login">Login</Link>
                  <Link className="btn btn-outline-success" to="/register">Register</Link>
                </>
              )}
            </form>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
