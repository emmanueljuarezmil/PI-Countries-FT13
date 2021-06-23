import React from 'react';
import {Link} from "react-router-dom";
import './LandingPage.css'

function LandingPage() {
    return (
        <div className='landing'>
            <div className='landing-container'>
                <h2>Bienvenido</h2>
                <Link to='/home' className='landing-link'>INGRESAR</Link>
            </div>
        </div>
    )
}

export default LandingPage
