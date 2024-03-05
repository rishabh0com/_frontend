import { useSelector, useDispatch } from "react-redux";
import { DECREMENT, INCREMENT } from "../Redux/actionTypes";

const Count = () => {
  const dispatch = useDispatch();
  const theme = useSelector((state) => state.theme);
  const count = useSelector((state) => state.count);
  const bgColor = theme === "dark" ? "bg-black" : "bg-white";
  const textColor = theme === "dark" ? "text-white" : "text-black";

  return (
    <div
      className={`flex items-center justify-center space-x-4 ${bgColor} py-4 px-6 rounded-lg`}>
      <button
        className={`bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded ${textColor}`}
        onClick={() => dispatch({ type: DECREMENT, payload: 1 })}
        disabled={count === 0}>
        -
      </button>
      <span className={`text-4xl font-bold ${textColor}`}>{count}</span>
      <button
        className={`bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded ${textColor}`}
        onClick={() => dispatch({ type: INCREMENT, payload: 1 })}>
        +
      </button>
    </div>
  );
};

export default Count;
