import React from "react";
import "./homePage.css";

//components
import PerfilComponent from "../../components/perfilComponent/perfilComponent";

function homePage() {
  return (
    <main className="content-home">
      <PerfilComponent />
    </main>
  );
}

export default homePage;
