import React from 'react';
import './Home.css'

import Header from '../../components/Home/Header/Header'
import Nav from '../../components/Nav/Nav'
import Footer from '../../components/Footer/Footer'



const Home = () => {
    return (
        <div className>
            <Nav />
            <Header />
            <Footer />
        </div>
    );
};

export default Home;