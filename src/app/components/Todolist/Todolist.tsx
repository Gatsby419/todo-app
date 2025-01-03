import { useState, useRef } from "react";
import AddTodo from "../AddTodo/AddTodo";

import "./Todolist.css";
interface AddTodo {
  title: "string";
  description: "string";
  dueDate: "string";
}

export default function Todolist() {
  const [todolist, setTodolist] = useState([
    {
      id: 0,
      title: "Do groceries",

      description: "go for the christmas shopping",
      dueDate: "12th of september 2024",
      isCompleted: false,
      completedAt: false,
      createdAt: "4th septemeber",
    },
    {
      id: 1,
      title: "Milk the cows",

      description: "milk buttercup first thing in the morning",
      dueDate: "12th of december 2024",
      isCompleted: false,
      completedAt: false,
      createdAt: "4th septemeber",
    },
    {
      id: 2,
      title: "Bathe the kids",

      description: "get the kids to shower",
      dueDate: "12th of october 2024",
      isCompleted: true,
      completedAt: new Date().toLocaleDateString(),
      createdAt: "4th septemeber",
    },
  ]);

  const handleCheckbox = (id: number) => {
    const newTodolist = todolist.map((todo) => {
      if (todo.id === id) {
        return {
          id: todo.id,
          title: todo.title,

          description: todo.description,
          dueDate: todo.dueDate,
          isCompleted: !todo.isCompleted,
          completedAt: !todo.completedAt
            ? new Date().toLocaleDateString()
            : false,
          createdAt: todo.createdAt,
        };
      }

      return todo;
    });

    setTodolist(newTodolist);
  };

  const handleAddTodo = (todo: {
    title: string;
    description: string;
    dueDate: string;
  }) => {
    const newTodolist = todolist.map((todo) => todo);
    newTodolist.push({
      id: todolist.length,
      title: todo.title,

      description: todo.description,
      dueDate: todo.dueDate,
      isCompleted: false,
      completedAt: false,
      createdAt: new Date().toLocaleDateString(),
    });
    setTodolist(newTodolist);
  };

  const handleDelete = (id: number) => {
    const newTodolist = todolist.filter((todo) => todo.id !== id);
    setTodolist(newTodolist);
  };

  const dialogRef = useRef<HTMLDialogElement>(null);
  function toggleDialog() {
    if (!dialogRef.current) {
      return;
    }
    dialogRef.current.hasAttribute("open");
    dialogRef.current.close();
    dialogRef.current.showModal();
  }

  function modalClose() {
    dialogRef.current?.close();
  }
  
  return (
    <div>
      <div>
        <h1 className="head">
          <button onClick={toggleDialog}>Todolist</button>
          <dialog ref={dialogRef}>
          
            <div className="cover">
              <AddTodo onAddTodo={handleAddTodo} />

              <div className="but">
                <button onClick={modalClose}>close</button>
              </div>
            </div>
        
           
          </dialog>
      
        </h1>
      </div>
      

      <ul className="todolist">
        {todolist

          .sort((a, b) => Number(a.isCompleted) - Number(b.isCompleted))
          .map((todo) => (
            <li key={todo.id}>
              <div className="trt">
                <button onClick={() => handleDelete(todo.id)}>Delete</button>
              </div>
              <div className="todolistitem">
                <div className="no">
                {todo.title}
                </div>
                <div className="do">
                  <p>created at {todo.createdAt}</p>
                </div>

                {todo.isCompleted && (
                  <p className="completedAt">completedAt:{todo.completedAt}</p>
                )}
                <p>{todo.description}</p>
                <p>{todo.dueDate}</p>
                <p>
                <input
                  type="checkbox"
                  checked={todo.isCompleted}
                  onChange={() => handleCheckbox(todo.id)}
                />
                </p>
              </div>
            </li>
          ))}
      </ul>
    </div>
  );
}
