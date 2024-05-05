import React from "react";
import "./projetos-cardComponent.css";

// Import image
import Imagem from "../../assets/imgs/projetos/site.webp";

let cat1 = "React";
let cat2 = "Javascript";

function ProjetosCardComponent() {
  return (
    <main className="content-card">
      <div className="image-container">
        <img className="img-card" src={Imagem} alt="Project" />

        <div className="categ-card">
          <h1 className="cat-card">{cat1}</h1>
          <h1 className="cat-card">{cat2}</h1>
        </div>
      </div>
    </main>
  );
}

export default ProjetosCardComponent;
