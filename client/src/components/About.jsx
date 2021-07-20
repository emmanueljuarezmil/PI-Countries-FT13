import React from 'react'
import linkedin from '../img/linkedin.png'
import github from '../img/github.png'
import gmail from '../img/logo-Gmail-1-min.jpg'
import './About.css'

function About() {
    return (
        <div className='about'>
            <h2>Gracias por llegar hasta aqui!</h2>
            <p>Esta aplicación es un proyecto individual que fue creado durante mi bootcamp en <a href="https://www.soyhenry.com" target="_blank" rel="noopener noreferrer">Soy Henry</a>, siendo uno de los 2 proyectos requeridos.</p>
            <p>Las tecnologías utilizadas aqui son PostgreSQL, Sequelize, Express, React y Redux, entre otras. Esta aplicación se sirve de la API <a href="https://restcountries.eu/" target="_blank" rel="noopener noreferrer">Rest Countries</a> para obtener información sobre todos los paises del mundo, y luego almacenarlos para trabajarlos y requerirlos desde la API propia.</p>            
            <h3>Contacto</h3>
            <div className='contact'>
                <div className="contact_item">
                    <img src={linkedin} alt="Not found" className="contact_item_img"/>
                    <a href="https://www.linkedin.com/in/emmanueljuarezmil/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                </div>
                <div className="contact_item">
                    <img src={github} alt="Not found" className="contact_item_img"/>
                    <a href="https://github.com/emmanueljuarezmil" target="_blank" rel="noopener noreferrer">GitHub</a>                   
                </div>
                <div className="contact_item">
                    <img src={gmail} alt="Not found" className="contact_item_img"/>
                    <a href="mailto:emmanueljuarezmil@gmail.com" target="_blank" rel="noopener noreferrer">emmanueljuarezmil@gmail.com</a>
                </div>
            </div>

        </div>
    )
}

export default About
