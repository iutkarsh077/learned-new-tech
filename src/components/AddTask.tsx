"use client";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "@/redux/features/TodoSlice";
import { useAppSelector, useAppDispatch } from "@/hooks/ReduxHooks";
import axios from "axios";

const AddTask = () => {
  const [todo, setTodo] = useState("");
  const dispatch = useAppDispatch();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!todo) return;
    try {
      const res = await axios.post("/api/AddTask", { title: todo });
      const myTodo = res.data;
      console.log("myTodo  Returned", myTodo);
      dispatch(addTodo(todo));
    } catch (error) {
      console.log("Something went wrong", error);
    }
    setTodo("");
  };
  return (
    <div className="flex justify-center">
      <div className="p-6 rounded shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-4 text-center">Todo List</h2>
        <form onSubmit={handleSubmit} className="flex items-center mb-4">
          <input
            type="text"
            value={todo}
            onChange={(e) => setTodo(e.target.value)}
            className="flex-grow p-2 text-black border rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Add a new task"
          />
          <button
            type="submit"
            onClick={() => handleSubmit}
            className="bg-blue-500 text-white p-2 rounded-r-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            Add
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddTask;
