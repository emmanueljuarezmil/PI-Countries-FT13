import './Nav.css'
import React from 'react'
import { NavLink } from 'react-router-dom';
import logoHenry from '../../img/logoHenry.png'

const Nav = () => {
    return (
        <div className='nav-container'>
            <div></div>
            <div className='nav-links'>
                <NavLink 
                to="/home" 
                activeClassName="nav-link-active" 
                className='nav-link link'>
                    HOME
                </NavLink>
                <NavLink 
                to="/activities" 
                activeClassName="nav-link-active" 
                className='nav-link link'>
                    ACTIVIDADES
                </NavLink>
                <NavLink 
                to="/about" 
                activeClassName="nav-link-active" 
                className='nav-link link'>
                    ABOUT
                </NavLink>
            </div>
            <a
            href="https://www.soyhenry.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className='nav-img'>
                <img src={logoHenry} alt="Logo SoyHenry" />
            </a>
        </div>
    )
}

export default Nav

