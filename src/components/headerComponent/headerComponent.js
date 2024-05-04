import React from "react";
import "./headerComponent.css";

function headerComponent() {
  return (
    <main className="content-header">
      <ul className="ul-header">
        <button className="button-header">
          <li className="li-header">Início</li>
        </button>

        <button className="button-header">
          <li className="li-header">Portfólio</li>
        </button>

        <button className="button-header">
          <li className="li-header">Sobre mim</li>
        </button>

        <button className="button-header">
          <li className="li-header">Resumo</li>
        </button>

        <button className="button-header">
          <li className="li-header">Contatos</li>
        </button>
      </ul>
    </main>
  );
}

export default headerComponent;
