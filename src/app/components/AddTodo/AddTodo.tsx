import { useState } from "react";

import "./AddTodo.css";

interface AddTodoProps {
  onAddTodo: (todo: {
    title: string;
    description: string;
    dueDate: string;
  }) => void;
}

export default function AddTodo({ onAddTodo }: AddTodoProps) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [dueDate, setdueDate] = useState("");


  return (
    
    <div className="add-todo-container">
      <div className="around">
      <p>AddTodo</p>
      <label className="add-todo-label">Title</label>
      <input
        type="text"
        className="add-todo-title-input"
        value={title}
        onChange={function (event) {
          setTitle(event.target.value);
        }}
      />

      <label className="add-todo-label">Description</label>
      <textarea
        className="add-todo-title-input"
        value={description}
        onChange={function (event) {
          setDescription(event.target.value);
        }}
      />
      <label className="add-todo-label">dueDate</label>
      <input
        className="add-todo-title-input"
        type="datetime-local"
        id="meeting-time"
        value={dueDate}
        onChange={function (event) {
          setdueDate(event.target.value);
        }}
      />
      <button
        id="toggle"
        className="add-todo-button"
        onClick={function () {
          if (title.trim() && description.trim() && dueDate.trim()) {
            onAddTodo({ title, description, dueDate });
            setTitle("");
            setDescription("");
            setdueDate("");
          }
        }}
      >
        Add Todo
      </button>
     
      
    </div>
    </div>
   
  );
}
