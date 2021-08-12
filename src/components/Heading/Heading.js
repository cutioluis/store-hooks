import React from "react";
import "./Heading.css";

const Heading = () => {
  return (
    <section
      style={{
        backgroundImage: `url("https://wallpaperforu.com/wp-content/uploads/2020/07/dark-wallpaper-20072813302745.jpg")`,
        backgroundSize: `cover`,
      }}
      className="heading"
    >
      <div className="heading-main">
        <h1 className="heading_title">CYBERPUNK 2077 REMASTER</h1>
        <p className="heading_paragraph">
          Cyberpunk 2077 us ab actuib-adventure RPG set in the metropolis of
          Knight City. where power, laxury and body modificationa one viluted
          above all else.
        </p>
        <div className="heading-buy">
          <button className="heading_btn">Buy Now</button>
          <span className="heading_price">19.99$</span>
        </div>
      </div>
    </section>
  );
};

export default Heading;
