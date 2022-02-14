import React from 'react';
import Logo from '../logo.svg';
import './Tab.css';
import { Link } from 'react-router-dom';

const Tab = () => {
    return (
        <div className="tabbar">
            <img className="logo" src={Logo} alt="Logo" />
            <div className="menu">
                {/* <div className="menuline__1"/>
                <div className="menuline__2"/> */}
                <div className="navbar" >
                    <Link to="/"><p>Home</p></Link>
                    <Link to="/theory"><p>Theory</p></Link>
                    <Link to="/forum"><p>Forum</p></Link>
                </div>
            </div>
        </div>
    )
}

export default Tab
