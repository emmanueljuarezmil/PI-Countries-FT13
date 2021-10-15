import './Footer.css'
import React from 'react'
import express from '../../img/Express logo.png'
import postgres from '../../img/postgres logo.png'
import react from '../../img/react logo.png'
import redux from '../../img/redux logo.png'
import sequelize from '../../img/sequelize.png'

const Footer = () => {
    return (
        <div className='footer'>
            <div className='footer-element footer-poweredby'>
                <span>
                    MADE WITH:
                </span>
                <img src={express} className='footer-icon' alt="Logo Express.js"/>
                <img src={postgres} className='footer-icon' alt="Logo PostgreSQL"/>
                <img src={react} className='footer-icon' alt="Logo React"/>
                <img src={redux} className='footer-icon' alt="Logo Redux"/>
                <img src={sequelize} className='footer-icon' alt="Logo Sequelize"/>
            </div>
            <span>2021</span>
        </div>
    )
}

export default Footer

