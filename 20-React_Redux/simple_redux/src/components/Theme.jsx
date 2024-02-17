import { useDispatch } from "react-redux";
import { SET_THEME } from "../redux/actions.redux.js";

// theme component
const Theme = () => {

  const dispatch = useDispatch();
  const handleLight = () => {
    dispatch({ type: SET_THEME, payload: "light-mode" });
  };
  const handleDark = () => {
    dispatch({ type: SET_THEME, payload: "dark-mode" });
  };
  return (
    <div >
      <button onClick={handleLight}>Light Theme</button>
      <button onClick={handleDark}>Dark Theme</button>
    </div>
  );
};

export default Theme;
