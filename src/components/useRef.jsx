import { useEffect, useRef, useState } from "react";
// Contagem de renderização... persistir um valor durante o ciclo de vida do componente, mas quando alterado não querer que o componente sejá rederizado novamente.
// Referenciar elementos html.
// Guardar valor anteriro de State

const ExemploRef = () => {
  // Input State
  const [name, setName] = useState("");

  // Nº Renders
  const renders = useRef(0);
  useEffect(() => {
    renders.current = renders.current + 1;
  });

  // Referenciar elementos html
  const inputRef = useRef();
  const inputFocos = () => {
    inputRef.current.focus();
  };

  // Guardar valor anteriro de State
  const previousName = useRef();
  useEffect(() => {
    previousName.current = name;
  }, [name]);

  return (
    <>
      <input
        ref={inputRef}
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <p>Input State: {name}</p>
      <p>Previous: {previousName.current}</p>
      <p>Nº Renders: {renders.current}</p>
      <button onClick={inputFocos}>Focus Input</button>
    </>
  );
};
export default ExemploRef;
