// Theme.tsx
import React from "react";
import { CHANGE_THEME } from "../Redux/actionTypes";
import { useDispatch } from "react-redux";

const Theme = () => {
  const dispatch = useDispatch();
  const theme = (theme) => ({ type: CHANGE_THEME, payload: theme });
  return (
    <div className="flex justify-center items-center space-x-4">
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={() => dispatch(theme("light"))}>
        Light Theme
      </button>
      <button
        className="bg-gray-700 hover:bg-gray-800 text-white font-bold py-2 px-4 rounded"
        onClick={() => dispatch(theme("dark"))}>
        Dark Theme
      </button>
    </div>
  );
};

export default Theme;
