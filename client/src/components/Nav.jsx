import React from 'react';
import { NavLink } from 'react-router-dom';
import logoHenry from '../img/logoHenry.png'
import './Nav.css'

export default function Nav() {
    return (
        <div className='nav'>
            <div className='nav-img'>
                <img src={logoHenry} alt="" />
            </div>
            <div className='nav-links'>
                <NavLink to="/home" activeClassName="nav-link-active" className='nav-link'>HOME</NavLink>
                <NavLink to="/activity" activeClassName="nav-link-active" className='nav-link'>ACTIVIDAD</NavLink>
            </div>
            <span className='nav-text'>Proyecto Individual FT13</span>
        </div>
    )
}