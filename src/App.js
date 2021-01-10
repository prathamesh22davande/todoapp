import { useState } from "react";
import AddTodo from "./components/AddTodo";
import Todo from "./components/Todo";

function App() {
  const [todos, setTodos] = useState([]);

  // Handle Delete
  const handleDelete = (id) => {
    //console.log(id);
    const newTodos = todos.filter((todo) => {
      return todo.id !== id;
    });

    setTodos(newTodos);
  };

  // Handle Add
  const handleSubmit = (content) => {
    //console.log(content);
    const todo = {
      id: Math.random(),
      content,
    };

    setTodos([...todos, todo]);
  };

  return (
    <div className="container">
      <h1 className="m-2 p-2 text-secondary font-weight-bold">Todos</h1>
      <Todo todos={todos} handleDelete={handleDelete} />
      <AddTodo handleSubmit={handleSubmit} />
    </div>
  );
}

export default App;
