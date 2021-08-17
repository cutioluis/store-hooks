import React from "react";
import { Link } from "react-router-dom";
import "./Heading.css";

const Heading = () => {
  return (
    <section className="heading">
      <div className="heading-main">
        <h1 className="heading_title">CYBERPUNK 2077 REMASTER</h1>
        <p className="heading_paragraph">
          Cyberpunk 2077 us ab actuib-adventure RPG set in the metropolis of
          Knight City. where power, laxury and body modificationa one viluted
          above all else.
        </p>
        <div className="heading-buy">
          <Link to="/checkout">
            <button className="heading_btn">Buy Now</button>
          </Link>
          <span className="heading_price">19.99$</span>
        </div>
      </div>
    </section>
  );
};

export default Heading;
