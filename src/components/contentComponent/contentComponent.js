import React from "react";
import "./contentComponent.css";

//components
import ApresentacaoComponent from "../apresentacaoComponent/apresentacaoComponent";
import PortfolioComponent from "../portfolioComponent/portfolioComponent";

function contentComponent() {
  return (
    <main className="container-content">
      <ApresentacaoComponent />
      <PortfolioComponent />
 
    </main>
  );
}

export default contentComponent;
