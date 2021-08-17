import React from "react";
import "./CardProducts.css";

import { products } from "../../initialState"

const CardProducts = () => { 
  return (
    <section className="products">
      {
        products.map(product => (
            <div className="products_container">
            <div className="products_container-text">
              <h2>{product.title}</h2>
              <p>{product.description}</p>
            </div>
            <div className="products_container-buy">
              <span className="heading_price">${product.price}$</span>
              <button className="heading_btn">Add to Card</button>
            </div>
          </div>
        ))
      }
    </section>
  );
};

export default CardProducts;
