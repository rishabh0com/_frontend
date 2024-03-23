import { createContext, useState } from "react";

export const TodoContext = createContext();

const TodoContextProvider = ({ children }) => {
    const [todos, setTodos] = useState([]);
    const [clickEffect, setClickEffect] = useState(false);
    return (
        <TodoContext.Provider value={{ todos, setTodos,clickEffect,setClickEffect }}>{children}</TodoContext.Provider>
    );
};

export default TodoContextProvider;