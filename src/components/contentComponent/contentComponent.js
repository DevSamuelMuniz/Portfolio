import React from "react";
import "./contentComponent.css";
//components

import ApresentacaoComponent from "../apresentacaoComponent/apresentacaoComponent";
function contentComponent() {
  return (
    <main className="container-content">
      <ApresentacaoComponent />
 
    </main>
  );
}

export default contentComponent;
