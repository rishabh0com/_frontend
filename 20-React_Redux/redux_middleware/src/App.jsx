import "./App.css";
import Display from "./Components/Display";
import { useSelector } from "react-redux";

function App() {
  // for (let key in types) {
  //   console.log(key, ":", types[key]);
  // }

  return (
    <>
      <h1 className=" text-bold text-5xl font-bold text text-blue-500 mb-7">
        React With Redux
      </h1>
      <br />
      <br />
      <Display />
    </>
  );
}

export default App;
