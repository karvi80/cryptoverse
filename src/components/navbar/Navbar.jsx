import React, { useState } from "react";
import { Link } from "react-router-dom";
import cryptocurrency from "../../images/cryptocurrency.png";

import {
  AiOutlineHome,
  AiOutlineMoneyCollect,
  AiOutlineMenu,
} from "react-icons/ai";
import { RiExchangeDollarLine, RiNewspaperLine } from "react-icons/ri";

import "./Navbar.css";

const Navbar = () => {
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  return (
    <div className="navbar">
      <div className="navbar-logo">
        <img src={cryptocurrency} alt="logo" />
        <h3>Cryptoverse</h3>
      </div>

      <div className="navbar-container-menu">
        <AiOutlineMenu
          className="menu-icon"
          onClick={() => setMenuIsOpen(!menuIsOpen)}
        />
      </div>

      <div className="navbar-container">
        <div>
          <Link to="/" className="navbar-container-link">
            <AiOutlineHome className="icon" />
            <h4>Home</h4>
          </Link>
        </div>

        <div>
          <Link to="/cryptocurrencies" className="navbar-container-link">
            <AiOutlineMoneyCollect className="icon" />
            <h4>Cryptocurrencies</h4>
          </Link>
        </div>

        <div>
          <Link to="/exchanges" className="navbar-container-link">
            <RiExchangeDollarLine className="icon" />
            <h4>Exchanges</h4>
          </Link>
        </div>

        <div>
          <Link to="/news" className="navbar-container-link">
            <RiNewspaperLine className="icon" />
            <h4>News</h4>
          </Link>
        </div>
      </div>

      {menuIsOpen && (
        <div className="mini-navbar-container">
          <div>
            <Link to="/" className="navbar-container-link">
              <AiOutlineHome className="icon" />
              <h4>Home</h4>
            </Link>
          </div>

          <div>
            <Link to="/cryptocurrencies" className="navbar-container-link">
              <AiOutlineMoneyCollect className="icon" />
              <h4>Cryptocurrencies</h4>
            </Link>
          </div>

          <div>
            <Link to="/exchanges" className="navbar-container-link">
              <RiExchangeDollarLine className="icon" />
              <h4>Exchanges</h4>
            </Link>
          </div>

          <div>
            <Link to="/news" className="navbar-container-link">
              <RiNewspaperLine className="icon" />
              <h4>News</h4>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
