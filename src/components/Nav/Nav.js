import React from 'react';
import { FaShoppingBag } from "react-icons/fa";

import './Nav.css'

const Nav = () => {
    return (
        <nav className="navigation">
            <ul>
                <p className="navigation_logo">CyberStore.io</p>
            </ul>
            <ul>
                <input placeholder="Search games" className="navigation_input" type="text" />
            </ul>
            <ul>
               <FaShoppingBag/>
            </ul>
        </nav>
    );
};

export default Nav;