import React from "react";
import "./Home.css";

import Heading from "../../components/Heading/Heading";
import CardProducts from "../../components/CardProducts/CardProducts";


const Home = () => {
  return (
    <div className="home">
      <Heading />
      <CardProducts/>
    </div>
  );
};

export default Home;
