import React from 'react'
import './SearchFailed.css'
import globe from '../../img/globe.png'

function SearchFailed() {
    return (
        <div>
            <h3>Tu busqueda no obtuvo resultados, intenta de otra forma</h3>
            <img src={globe} alt="Imagen de globo terraqueo" />
        </div>
    )
}

export default SearchFailed
