import React from "react";
import "./portfolioComponent.css";
//components
import ProjetoscardComponent from "../projetos-cardComponent/projetos-cardComponent";

function portfolioComponent() {
  return (
    <main>
      <h1 className="conhecer-ctn">Portfolio</h1>
      <h1 className="title-apres">Confira meus projetos em destaque</h1>

      <div className="grid-portfolio">
        <ProjetoscardComponent />
        <ProjetoscardComponent />
        <ProjetoscardComponent />
        <ProjetoscardComponent />
      </div>
    </main>
  );
}

export default portfolioComponent;
