import { wait } from "@testing-library/user-event/dist/utils";
import { useEffect, useState } from "react";
// useEffect = "fazer alguma coisa uquando algo acontecer"
const ExemploEffect = () => {
  const [resourceType, setResourceType] = useState("posts");

  const changeResourceType = (resourceType) => {
    setResourceType(resourceType);
  };

  /*
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${resourceType}`)
      .then((response) => response.json())
      .then((json) => console.log(json));
  }, [resourceType]);
  */

  // sem o segundo paramento vai executar quando o componente atualiza
  // aceita mais de um parametro
  // a função do Effect não pode ser assicrona, alternativa:
  useEffect(() => {
    const fetchResourceTypes = async () => {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/${resourceType}`
      );
      const respondeJSON = await response.json();
      console.log(respondeJSON);
    };
    fetchResourceTypes();
  }, [resourceType]);

  useEffect(() => {
    console.log("componentDidMount"); // acontece uma unica vez
    return () => {
      console.log('componenteWillUnmount') // quando o component é removido do dom (reload)
    }
    // lista de dependencia precisa está vazia []
  }, []);

  return (
    <>
      <h3>{resourceType}</h3>
      <button onClick={() => changeResourceType("posts")}>Posts</button>
      <button onClick={() => changeResourceType("comments")}>Comments</button>
      <button onClick={() => changeResourceType("todos")}>Todos</button>
    </>
  );
};
export default ExemploEffect;
