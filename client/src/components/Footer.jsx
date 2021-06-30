import React from 'react';
import './Footer.css';
import express from '../img/Express logo.png'
import postgres from '../img/postgres logo.png'
import react from '../img/react logo.png'
import redux from '../img/redux logo.png'
import sequelize from '../img/sequelize.png'

export default function Footer() {
    return (
        <div className='footer'>
            <div className='footer-element footer-poweredby'>
                <span>
                    POWERED BY:
                </span>
                <img src={express} className='footer-icon' alt="Imagen no encontrada"/>
                <img src={postgres} className='footer-icon' alt="Imagen no encontrada"/>
                <img src={react} className='footer-icon' alt="Imagen no encontrada"/>
                <img src={redux} className='footer-icon' alt="Imagen no encontrada" />
                <img src={sequelize} className='footer-icon' alt="Imagen no encontrada"/>
            </div>
        </div>
    )
}