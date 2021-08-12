import React from "react";
import "./CardProducts.css";

const CardProducts = () => {
  return (
    <section className="products">
      <div className="products_container">
        <div className="products_container-text">
          <h2>WOW: Shadowlands</h2>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Pariatur,
            repudiandae soluta unde architecto ipsum reiciendis.
          </p>
        </div>
        <div className="products_container-buy">
            <span className="heading_price">21.99$</span>
            <button className="heading_btn">Add to Card</button>
        </div>
      </div>
    </section>
  );
};

export default CardProducts;
