import { useDispatch } from "react-redux";
import { ADD_TO_CART } from "../redux/actions.redux.js";
// cart component
const Cart = () => {
  const dispatch = useDispatch();
  const handleCart = () => {
    dispatch({
      type: ADD_TO_CART,
      payload: document.getElementById("item").value,
    });
    document.getElementById("item").value = "";
  };
  return (
    <div>
      <h2>Cart</h2>
      <div>
        <label>Items : </label>
        <input id="item" type="text" placeholder="Enter items" />
      </div>
      <div>
        <button onClick={handleCart}>Add Item</button>
      </div>
    </div>
  );
};

export default Cart;
