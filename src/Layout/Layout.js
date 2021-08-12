import React from "react";
import Footer from "../components/Footer/Footer";
import Nav from "../components/Nav/Nav";

const Layout = ({ children }) => {
  return (
    <div>
      <Nav />
         {children}
      <Footer />
    </div>
  );
};

export default Layout;
