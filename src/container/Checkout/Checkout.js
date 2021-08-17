import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import { AiTwotoneDelete } from "react-icons/ai";

import "./Checkout.css";

const Checkout = () => {
  return (
    <section className="check">
      <div className="check_sell-details">
        <h1 className="check_title">CyberPunk 2077 Remaster</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio
          dolorum quis sequi.
        </p>
        <button className="heading_btn">Buy Now</button>
        <button className="check_add">
          <FaShoppingCart
            style={{
              marginRight: `10px`,
            }}
          />
          Add to cart
        </button>
        <button className="check_add">
          <AiTwotoneDelete />
        </button>
      </div>
    </section>
  );
};

export default Checkout;
