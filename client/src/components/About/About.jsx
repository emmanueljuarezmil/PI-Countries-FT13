import "./About.css";
import React from "react";
import linkedin from "../../img/linkedin.png";
import github from "../../img/github.png";
import gmail from "../../img/logo-Gmail-1-min.jpg";
import profilePic from "../../img/profile pic.jpg";

const About = () => {
  return (
    <div>
      <h2>Gracias por llegar hasta aquí!</h2>
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
        React y Redux, entre otras. Esta aplicación se sirve de la API{" "}
        <a
          href="https://restcountries.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Rest Countries
        </a>{" "}
        para obtener información sobre todos los paises del mundo, almacenarlos
        en una base de datos local, y luego trabajarlos y requerirlos desde la
        API propia.
      </p>
      <h3>Sobre mi</h3>
      <div className="contact_item">
        <img
          src={profilePic}
          alt="Foto del desarrollador de la página"
          className="contact_item_img"
        />
        <p>Ingrese una breve descripcion de su persona</p>
      </div>
      <h3>Contacto</h3>
      <div className="contact">
        <div className="contact_item">
          <img
            src={linkedin}
            alt="Logo LinkedIn"
            className="contact_item_img"
          />
          <a
            href="https://www.linkedin.com/in/emmanueljuarezmil/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
        </div>
        <div className="contact_item">
          <img src={github} alt="Logo GitHub" className="contact_item_img" />
          <a
            href="https://github.com/emmanueljuarezmil"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
        </div>
        <div className="contact_item">
          <img src={gmail} alt="Logo Gmail" className="contact_item_img" />
          <a
            href="mailto:emmanueljuarezmil@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            emmanueljuarezmil@gmail.com
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
