import React from "react";

import { FaStore } from "react-icons/fa";

function apresentacaoComponent() {
  return (
    <main>
      <div>
        <h1>Vamos nos conhecer</h1>
        <h1>Eu sou Samuel Muniz desenvolvedor Frontend e Backend.</h1>
      </div>
      <div>
        <a>
          Meu trabalhos{" "}
          <span>
            <FaStore />
          </span>
        </a>
        <a>
          Baixe meu currículo <span></span>
        </a>
      </div>
    </main>
  );
}

export default apresentacaoComponent;
