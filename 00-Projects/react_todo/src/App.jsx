import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import "./App.css";
import Todo from "./components/Todo";
import { TodoContext } from "./context/TodoContext.jsx";

function App() {
  const apiKey = import.meta.env.VITE_API_KEY;
  const [pageCount, setPageCount] = useState(1);
  const [isTodo, setIsTodo] = useState(true);
  const { todos, setTodos,clickEffect } = useContext(TodoContext);
  const getTodos = async () => {
    try {
      const response = await axios({
        method: "get",
        url: `${apiKey}/todos?_page=${pageCount}&_limit=5`,
        headers: { "Content-Type": "application/json" },
      });
      const data = await response.data;
      console.log(data);
      if (data[0]) {
        setTodos(() => data);
        setIsTodo(true);
      } else {
        setIsTodo(false);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getTodos();
    return () => {
      console.log("cleanup");
    };
  }, [pageCount,clickEffect]);

  return (
    <section>
      <header className="flex items-center justify-between w-[35rem] font-bold ">
        <h1>TODO'S </h1>
        <div className="flex items-center space-x-4 bg-slate-900 rounded-lg p-1 font-extrabold  ">
          <button
            className="bg-white text-black text-[2rem] py-0 px-3"
            disabled={pageCount <= 1}
            onClick={() => setPageCount(pageCount - 1)}>
            {" "}
            &lt;{" "}
          </button>
          <span className="text-xl w-[1rem]">{pageCount}</span>
          <button
            className="bg-white text-black text-[2rem]  py-0 px-3 "
            onClick={() => setPageCount(pageCount + 1)}>
            {" "}
            &gt;{" "}
          </button>
        </div>
      </header>
      <hr className="mt-2" />
      <main className="w-[35rem] pt-4">
        {isTodo ? (
          todos.map((todo) => {
            // console.log(Date.now() + Math.random());
            return <Todo key={Date.now() + Math.random()} todo={todo}  />;
          })
        ) : (
          <h1 className="text-2xl text-red-500">No todo found</h1>
        )}
      </main>
    </section>
  );
}

export default App;
