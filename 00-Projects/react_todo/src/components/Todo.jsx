import axios from "axios";
import { useEffect, useContext } from "react";
import { TodoContext } from "../context/TodoContext";

const Todo = ({ todo }) => {
  const { setClickEffect } = useContext(TodoContext);
  const apiKey = import.meta.env.VITE_API_KEY;
  console.log("props", todo);
  const { title, status, id } = todo;

  const handleStatus = (status, id) => {
    setClickEffect((prev) => !prev);
    try {
      axios({
        method: "patch",
        url: `${apiKey}/todos/${id}`,
        headers: { "Content-Type": "application/json" },
        data: {
          status: !status,
        },
      });
    } catch (error) {
      console.log(error);
    }
  };
    const handleDelete = (id) => {
      setClickEffect((prev) => !prev);
    try {
      axios({
        method: "delete",
        url: `${apiKey}/todos/${id}`,
        headers: { "Content-Type": "application/json" },
      });
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {}, [handleStatus]);
  return (
    <div className="flex items-center justify-between bg-gray-900 p-2 rounded-md mb-2">
      <div className="w-[30%] text-left ">
        <h3 className="text-lg font-semibold">{title}</h3>
      </div>
      <p
        className={`text-black p-1 cursor-pointer ${
          status ? "bg-green-500" : "bg-yellow-500"
        } border-1 rounded-md   border-sky-500 w-[20%]`}
        onClick={() => handleStatus(status, id)}>
        {status ? "Completed" : "Pending"}
      </p>

      <div className="flex items-center space-x-5 cursor-pointer">
        <span className=" text-[1.5rem]">
          <i class="fa-regular fa-pen-to-square"></i>
        </span>
        {/* <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md mr-2">Update</button> */}
        {/* <button className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md">
          Delete
        </button> */}
        <span className="text-red-500 text-[1.5rem]" onClick={()=>handleDelete(id)}>
          <i class="fa-regular fa-trash-can"></i>
        </span>
      </div>
    </div>
  );
};

export default Todo;
