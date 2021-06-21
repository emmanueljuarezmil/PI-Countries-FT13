import React from 'react';
import { NavLink } from 'react-router-dom';
import logoHenry from '../img/logoHenry.png'

export default function Nav() {
    return (
        <div>
            <img src={logoHenry} alt="" />
            <div>
                <NavLink to="/home/!#" activeClassName="active" >Home</NavLink>
                <NavLink to="/activity" activeClassName="active" >Activity</NavLink>
                <NavLink to="/about" activeClassName="active" >About</NavLink>
            </div>
            <span>Dark mode</span>
        </div>
    )
}