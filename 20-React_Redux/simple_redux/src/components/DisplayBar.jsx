import { useSelector } from "react-redux";

const DisplayBar = () => {
  const values = useSelector((state) => state);
  const theme = useSelector((state) => state.theme);

  //   console.log(values);
  const the = theme == "light-mode" ? true : false;
  return (
    <div
      style={{
        backgroundColor: the ? "white" : "grey",
        color: the ? "grey" : "white",
      }}>
      <h2>Redux States </h2> <hr />
      <div>
        <p>Theme : {JSON.stringify(values.theme, null, 5)}</p>
        <hr />
        <p>Cart : {JSON.stringify(values.cart)}</p> <hr />
        <p>UserName : {JSON.stringify(values.user.userName)}</p>
        <p>LoggedIn:{values.user.auth ? " true" : " false"}</p> <hr />
      </div>
    </div>
  );
};

export default DisplayBar;
