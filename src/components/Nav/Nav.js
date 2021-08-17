import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaShoppingBag } from "react-icons/fa";

import "./Nav.css";

const Nav = () => {

  return (
    <nav className="navigation">
      <ul>
        <Link to="/">
          <a className="navigation_logo">CyberStore.io</a>
        </Link>
      </ul>
      <ul>
        <input
          placeholder="Search games"
          className="navigation_input"
          type="text"
        />
      </ul>
      <ul>
        <FaShoppingBag />
      </ul>
    </nav>
  );
};

export default Nav;
