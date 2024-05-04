import React, { useState } from "react";
import "./headerComponent.css";

function HeaderComponent() {
  const [selectedButton, setSelectedButton] = useState(null);

  const handleButtonClick = (index) => {
    setSelectedButton(index);
  };

  return (
    <main className="content-header">
      <ul className="ul-header">
        <button
          className={`button-header ${selectedButton === 0 ? "selected" : ""}`}
          onClick={() => handleButtonClick(0)}
        >
          <li className="li-header">Início</li>
        </button>

        <button
          className={`button-header ${selectedButton === 1 ? "selected" : ""}`}
          onClick={() => handleButtonClick(1)}
        >
          <li className="li-header">Portfólio</li>
        </button>

        <button
          className={`button-header ${selectedButton === 2 ? "selected" : ""}`}
          onClick={() => handleButtonClick(2)}
        >
          <li className="li-header">Sobre mim</li>
        </button>

        <button
          className={`button-header ${selectedButton === 3 ? "selected" : ""}`}
          onClick={() => handleButtonClick(3)}
        >
          <li className="li-header">Resumo</li>
        </button>

        <button
          className={`button-header ${selectedButton === 4 ? "selected" : ""}`}
          onClick={() => handleButtonClick(4)}
        >
          <li className="li-header">Contatos</li>
        </button>
      </ul>
    </main>
  );
}

export default HeaderComponent;
