import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <div className="header-container">
        <h1 className="header_title">Up to 75% Off Sale</h1>
        <p className="header_span">This Is It. Limited-Time Only.</p>
        <div className="header-btns">
            <button className="header_btn">Men's</button>
            <button className="header_btn">Woman's</button>
        </div>
      </div>
    </div>
  );
};

export default Header;
