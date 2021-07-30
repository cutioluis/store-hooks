import React from 'react';
import './Home.css'

import Header from '../../components/Home/Header/Header'
import Nav from '../../components/Home/Nav/Nav'


const Home = () => {
    return (
        <div className>
            <Nav />
            <Header />
        </div>
    );
};

export default Home;