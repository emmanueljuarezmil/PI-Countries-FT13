import React from 'react';
import {Link} from "react-router-dom";
import './LandingPage.css'

function LandingPage() {
    return (
        <div className='container'>
            <h1>Bienvenido</h1>
            <Link to='/home'>Ingresar</Link>
        </div>
    )
}

export default LandingPage
