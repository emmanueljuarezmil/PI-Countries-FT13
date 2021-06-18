import React from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom';


function LandingPage() {
    return (
        <div>
            <h1>
                Mensaje de bienvenida + imagen
            </h1>
            <Link to='/home'>Ingresar</Link>
        </div>
    )
}

const mapDispatchToProps = {
    getCountries
}

export default connect(null, mapDispatchToProps)(LandingPage)