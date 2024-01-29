import React from "react";
import ReactDOM from "react-dom/client";
import ExemploState from "./components/useState";
import ExemploEffect from "./components/useEffect";

const root = ReactDOM.createRoot(document.getElementById("root"));
// hook não pode está dentro de loops ou function
root.render(
  <>
    <h1>Exemplos Hooks</h1>
    <h2>1. useState</h2>
    <ExemploState />
    <h2>2. useEffect</h2>
    <ExemploEffect />
  </>
);
