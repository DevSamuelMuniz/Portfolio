import React from "react";
import "./homePage.css";

//components
import PerfilComponent from "../../components/perfilComponent/perfilComponent";
import HeaderComponent from "../../components/headerComponent/headerComponent";

function homePage() {
  return (
    <main className="content-home">
      <PerfilComponent />
      <HeaderComponent />
    </main>
  );
}

export default homePage;
