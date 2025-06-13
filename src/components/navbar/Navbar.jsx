import React, { useState } from "react";
import { Link } from "react-router-dom";
import cryptocurrency from "../../images/cryptocurrency.png";

import "./Navbar.css";

const Navbar = () => {
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  return (
    <div className="navbar">
      <Link to="/" className="navbar-logo">
        <img src={cryptocurrency} alt="logo" />
        <h3>Cryptoverse</h3>
      </Link>

      <div className="navbar-container-menu">
        <img
          src="/icons/menu.svg"
          alt="menu"
          className="menu-icon"
          onClick={() => setMenuIsOpen(!menuIsOpen)}
        />
      </div>

      <div className="navbar-container">
        <div>
          <Link to="/" className="navbar-container-link">
            <img src="/icons/home.svg" alt="home" className="icon" />
            <h4>Home</h4>
          </Link>
        </div>

        <div>
          <Link to="/cryptocurrencies" className="navbar-container-link">
            <img src="/icons/crypto.svg" alt="crypto" className="icon" />
            <h4>Cryptocurrencies</h4>
          </Link>
        </div>

        <div>
          <Link to="/exchanges" className="navbar-container-link">
            <img src="/icons/exchange.svg" alt="exchange" className="icon" />
            <h4>Exchanges</h4>
          </Link>
        </div>

        <div>
          <Link to="/news" className="navbar-container-link">
            <img src="/icons/news.svg" alt="news" className="icon" />
            <h4>News</h4>
          </Link>
        </div>
      </div>

      {menuIsOpen && (
        <div className="mini-navbar-container">
          <div>
            <Link to="/" className="navbar-container-link">
              <img src="/icons/home.svg" alt="home" className="icon" />
              <h4>Home</h4>
            </Link>
          </div>

          <div>
            <Link to="/cryptocurrencies" className="navbar-container-link">
              <img src="/icons/icons.svg" alt="crypto" className="icon" />
              <h4>Cryptocurrencies</h4>
            </Link>
          </div>

          <div>
            <Link to="/exchanges" className="navbar-container-link">
              <img src="/icons/crypto.svg" alt="crypto" className="icon" />
              <h4>Exchanges</h4>
            </Link>
          </div>

          <div>
            <Link to="/news" className="navbar-container-link">
              <img src="/icons/news.svg" alt="news" className="icon" />
              <h4>News</h4>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
