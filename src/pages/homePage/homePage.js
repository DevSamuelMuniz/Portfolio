import React from "react";
import "./homePage.css";

//components
import PerfilComponent from "../../components/perfilComponent/perfilComponent";
import HeaderComponent from "../../components/headerComponent/headerComponent";
import ContentComponent from "../../components/contentComponent/contentComponent";

function homePage() {
  return (
    <main className="content-home">
      <PerfilComponent />
      <HeaderComponent />
      <ContentComponent />
    </main>
  );
}

export default homePage;

