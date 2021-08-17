import React, { useState } from "react";
import "./Home.css";

import Heading from "../../components/Heading/Heading";
import CardProducts from "../../components/CardProducts/CardProducts";


const Home = () => {
  const [search, setsearch] = useState("")
  console.log(search);
  return (
    <div className="home">
      <Heading />
      <CardProducts search={search}/>
    </div>
  );
};

export default Home;
