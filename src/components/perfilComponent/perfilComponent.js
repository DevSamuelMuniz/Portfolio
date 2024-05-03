import React from "react";
import "./perfilComponent.css";

//imgs
import Logo from "../../assets/imgs/logos/logo.png";
import Foto from "../../assets/imgs/photos/eu.png";

//icon
import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaWhatsapp,
  FaEnvelope,
} from "react-icons/fa";

function perfilComponent() {
  return (
    <main className="content-perfil">
      <div className="perfil-perfil">
        <div className="logo-perfil">
          <img className="logo-img" src={Logo} alt="Logo" />
          <h1 className="nome-perfil">Samuel Muniz</h1>
        </div>

        <img className="foto" src={Foto} alt="foto" />
      </div>

      <div>
        <h2 className="especializacao-perfil">Especialização:</h2>
        <p className="sobre-especializacao">
          Frontend developer and backend developer
        </p>
      </div>

      <div className="main-based">
        <h2 className="based-perfil">Based in:</h2>
        <p className="sobre-based">Recife, Pernambuco</p>
      </div>

      <div className="lets-work">
        <div className="ctn-redes">
          <a className="button-redes">
            <FaLinkedin className="icon" />
          </a>

          <a href="" className="button-redes">
            <FaInstagram className="icon" />
          </a>

          <a  href="" className="button-redes">
            <FaWhatsapp className="icon" />
          </a>

          <a href="" className="button-redes">
            <FaGithub className="icon" />
          </a>

          <a href="" className="button-redes">
            <FaEnvelope className="icon" />
          </a>
        </div>
        <a href="" className="work-text">Vamos trabalhar juntos!</a>
      </div>
    </main>
  );
}

export default perfilComponent;
