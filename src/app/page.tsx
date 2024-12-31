"use client";

import Navbar from "./components/Navbar/Navbar";
import TodoList from "./components/Todolist/Todolist";

import "./page.css";

export default function Home() {

  return (
    <div>
      <Navbar />
      
      <div className="container">
     

        <TodoList />
      </div>
    </div>
  );
}
