import React, { useState } from "react";

function AddTodo({ handleSubmit }) {
  const [content, setContent] = useState("");

  const handleChange = (e) => {
    setContent(e.target.value);
    // console.log(content);
  };

  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          setContent("");
          handleSubmit(content);
        }}
      >
        <input
          className="m-2 p-2"
          type="text"
          value={content}
          onChange={handleChange}
          placeholder="Enter todo"
        />
      </form>
    </div>
  );
}

export default AddTodo;
