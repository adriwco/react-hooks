import React from "react";
import ReactDOM from "react-dom/client";
import ExemploState from "./components/useState";

const root = ReactDOM.createRoot(document.getElementById("root"));
// hook não pode está dentro de loops ou function
root.render(
  <>
    <h1>Exemplos Hooks</h1>
    <h2>1. useState</h2>
    <ExemploState />
  </>
);
