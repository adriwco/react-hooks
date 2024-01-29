import { useReducer, useState } from "react";
// usar useReducer quando useState ficar complexo
const ExemploReducer = () => {
  const reducer = (state, action) => {
    switch (action.type) {
      case "increment":
        return {
          counter: state.counter + 1,
        };
      case "decrement":
        return {
          counter: state.counter - 1,
        };
      default:
        return state;
    }
  };

  const reducerTask = (stateTask, actionTask) => {
    switch (actionTask.type) {
      case "add-task":
        return {
          ...stateTask,
          tasks: [
            ...stateTask.tasks,
            { name: actionTask.payload, isCompleted: false },
          ],
          tasksCount: stateTask.tasksCount + 1,
        };
      case "toggle-task":
        return {
          ...stateTask,
          tasks: stateTask.tasks.map((item, index) =>
            index === actionTask.payload
              ? { ...item, isCompleted: !item.isCompleted }
              : item
          ),
        };
      default:
        return stateTask;
    }
  };

  const [state, dispatch] = useReducer(reducer, { counter: 0 });
  const [stateTask, dispatchTask] = useReducer(reducerTask, {
    tasks: [],
    tasksCount: 0,
  });
  const [inputValue, setInputValue] = useState("");

  return (
    <>
      <h3>Incre/Descre</h3>
      <p>{state.counter}</p>
      <button onClick={() => dispatch({ type: "increment" })}>Increment</button>
      <button onClick={() => dispatch({ type: "decrement" })}>Decrement</button>
      <h3>to do list com useReducer</h3>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button
        onClick={() => {
          dispatchTask({ type: "add-task", payload: inputValue });
          setInputValue("");
        }}
      >
        Adicionar
      </button>{" "}
      <span> {stateTask.tasksCount} </span>
      {/*
      {stateTask.tasks.map((task, index) => (
        <p key={index}>{task.name}</p>
      ))}
      */}
      {stateTask.tasks.map((task, index) => {
        return (
          <p
            onClick={() =>
              dispatchTask({ type: "toggle-task", payload: index })
            }
            key={index}
            style={{
              textDecoration: task.isCompleted ? "line-through" : "none",
            }}
          >
            {task.name}
          </p>
        );
      })}
    </>
  );
};
export default ExemploReducer;
