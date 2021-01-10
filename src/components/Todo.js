import React from "react";
import { motion } from "framer-motion";

function Todo({ todos, handleDelete }) {
  const fadeIn = {
    visible: { opacity: 1 },
    hidden: { opacity: 0 },
  };

  const todoList = todos.length ? (
    <div>
      {todos.map((todo) => {
        return (
          <motion.p
            key={todo.id}
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            id="todo"
            className="bg-warning text-secondary font-weight-bold m-2 p-2"
            onClick={() => {
              handleDelete(todo.id);
            }}
          >
            {todo.content}
          </motion.p>
        );
      })}
    </div>
  ) : (
    <p className="bg-success m-2 p-2 text-light ">There are no todos!</p>
  );

  return <div>{todoList}</div>;
}

export default Todo;
