import React from "react";
import "./apresentacaoComponent.css"

import { FaBriefcase, FaDownload } from "react-icons/fa";

function apresentacaoComponent() {
  return (
    <main>
      <div>
        <h1 className="conhecer-ctn">Vamos nos conhecer!</h1>
        <h1 className="title-apres">Eu sou Samuel Muniz desenvolvedor Frontend e Backend.</h1>
      </div>

      <div className="ctn-btn">
        <a href="" className="btn-apres">
          Meu trabalhos
          <span className="ico">
            <FaBriefcase />
          </span>
        </a>

        <a href="" className="btn-apres">
          Baixe meu currículo
          <span className="ico">
            <FaDownload />
          </span>
        </a>
      </div>
    </main>
  );
}

export default apresentacaoComponent;
