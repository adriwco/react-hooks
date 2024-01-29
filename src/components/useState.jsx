import { useState } from "react";
// useState = rederizar elemento na tela após alteração de valor
const ExemploState = () => {
  const [count, setCount] = useState(0);

  const incrementCount = () => {
    setCount((prevState) => prevState + 1);
  };

  return (
    <>
      <h3>{count}</h3>
      <button onClick={incrementCount}>Incremento</button>
    </>
  );
};
export default ExemploState;
