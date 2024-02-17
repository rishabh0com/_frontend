import "./App.css";
import { Provider } from "react-redux";
import { store } from "./redux/store.redux.js";
import DisplayBar from "./components/DisplayBar.jsx";
import Theme from "./components/Theme.jsx";
import User from "./components/User.jsx";
import Cart from "./components/Cart.jsx";


// Theme Reducer :

function App() {
  // app component
  return (
    <Provider store={store}>
      <div className="App">
        <h1>Hello Redux</h1>
        <div>
          <DisplayBar />
          <Theme />
          <User />
          <Cart />
        </div>
      </div>
    </Provider>
  );
}

export default App;
