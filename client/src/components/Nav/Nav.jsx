import './Nav.css'
import React from 'react'
import { NavLink} from 'react-router-dom';
import logoHenry from '../../img/logoHenry.png'

const Nav = () => {
    return (
        <div className='nav'>
            <div className='nav-img'>
                <a href="https://www.soyhenry.com" target="_blank" rel="noopener noreferrer">
                    <img src={logoHenry} alt="" />
                </a>
            </div>
            <div className='nav-links'>
                <NavLink to="/home" activeClassName="nav-link-active" className='nav-link'>HOME</NavLink>
                <NavLink to="/activity" activeClassName="nav-link-active" className='nav-link'>INGRESAR ACTIVIDAD</NavLink>
                <NavLink to="/about" activeClassName="nav-link-active" className='nav-link'>ABOUT</NavLink>
            </div>
            <span className='nav-text'>Proyecto Individual FT13</span>
        </div>
    )
}

export default Nav

