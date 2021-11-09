import "./About.css";
import React from "react";
import linkedin from "../../img/linkedin.png";
import github from "../../img/github.png";
import gmail from "../../img/logo-Gmail-1-min.jpg";

const About = () => {
  return (
    <div className="about-container">
      <div className="about-description">
        <p>
          Countries es una Aplicación Web Full Stack de un proyecto individual,
          realizado durante mi bootcamp en{" "}
          <a
            href="https://www.soyhenry.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Soy Henry
          </a>
          , siendo uno de los 2 proyectos requeridos.
        </p>
        <p>
          Las tecnologías utilizadas aqui son Express, Sequelize, PostgreSQL,
          React, Redux, y CSS puro, entre otras. Esta aplicación se sirve de la
          API{" "}
          <a
            href="https://restcountries.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Rest Countries
          </a>{" "}
          para obtener información sobre todos los paises del mundo,
          almacenarlos en una base de datos local, y luego trabajarlos y
          requerirlos desde la API propia.
        </p>
        <h3>Sobre mi</h3>
          <p>
            Desarrollador Web Full Stack, con background en ciencias económicas.
          </p>
          <p>
            Me encanta el back-end, aunque me siento cómodo en el front-end y
            como full stack. Apasionado desde temprana edad por "las
            computadoras", luego estudiante de contabilidad, para al fin entrar
            y dedicarme al 100% en el hermoso mundo IT, que lo siento mi lugar.
            Disfruto mucho crear soluciones, siempre con predisposición a
            buscar, aprender y aplicar nuevas tecnologías y herramientas, y
            colaborar en equipo.
          </p>
          <p>Me encanta la música y viajar.</p>
      </div>
      <div className="about-contact">
        <h3>Contacto</h3>
        <div className="contact-container">
          <div className="contact-item">
            <a
              href="https://www.linkedin.com/in/emmanueljuarezmil/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={linkedin}
                alt="Logo LinkedIn"
                className="contact-item-img"
              />
            </a>
            <span>LinkedIn</span>
          </div>
          <div className="contact-item">
            <a
              href="https://github.com/emmanueljuarezmil"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={github}
                alt="Logo GitHub"
                className="contact-item-img"
              />
            </a>
            <span>GitHub</span>
          </div>
          <div className="contact-item">
            <a
              href="mailto:emmanueljuarezmil@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={gmail} alt="Logo Gmail" className="contact-item-img" />
            </a>
            <span>emmanueljuarezmil@gmail.com</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
