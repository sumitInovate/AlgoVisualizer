import React from 'react';
import Logo from '../logo.svg';
import './Tab.css';

const Tab = () => {
    return (
        <div className="tabbar">
            <img className="logo" src={Logo} alt="Logo" />
            <div className="menu">
                <div className="menuline__1"/>
                <div className="menuline__2"/>
            </div>
        </div>
    )
}

export default Tab
