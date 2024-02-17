import { useDispatch } from "react-redux";
import { UPDATE_USER } from "../redux/actions.redux.js";

// user component
const User = () => {
  const dispatch = useDispatch();
  const handleLogin = () => {
    dispatch({
      type: UPDATE_USER,
      payload: {
        userName: document.getElementById("username").value,
        auth: true,
      },
    });
  };
  const handleLogout = () => {
    dispatch({ type: UPDATE_USER, payload: { userName: "", auth: false } });
  };

  return (
    <div>
      <div>
        <label>UserName : </label>
        <input id="username" type="text" placeholder="Enter your name" />
      </div>
      <div>
        <button onClick={handleLogin}>Login</button>
        <button onClick={handleLogout}>Logout</button>
      </div>
    </div>
  );
};

export default User;