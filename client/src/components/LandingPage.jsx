import React from 'react';
import {Link} from "react-router-dom";

function LandingPage({getCountries}) {
    return (
        <div>
            <h1>Bienvenido</h1>
            <Link to='/home/!#'>Ingresar</Link>
        </div>
    )
}

export default LandingPage
