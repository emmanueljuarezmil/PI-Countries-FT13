import React from 'react'

// agregar link para ir al detalle del pais

function CountryCard({name, flag, continent, id}) {
    return (
        <div>
            <div>
                <span>Nombre:</span>
                <span>{name}</span>
            </div>
            <div>
                <span>Continente:</span>
                <span>{continent}</span>
            </div>
            <div>
                <img src={flag} alt="No se encontro la imagen" />                
            </div>          
        </div>
    )
}

export default CountryCard
