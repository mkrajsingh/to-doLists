// AddTaskForm.js
import React, { useState } from "react";
const AddTaskForm = ({ onAdd }) => {
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title) return;
    const newTask = {
      id: Date.now(),
      title,
      date: date || "No Date",
      status: "TO-DO",
    };
    onAdd(newTask);
    setTitle("");
    setDate("");
  };

  return (
    <form className="add-task-form" onSubmit={handleSubmit}>
      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Task Title"
      />
      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
      />
      <button type="submit">ADD</button>
    </form>
  );
};

export default AddTaskForm;
