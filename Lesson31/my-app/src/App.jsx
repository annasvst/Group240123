import "./App.css";
import { List } from "./components/List";

export const App = () => {
  // const loggedInUser = {
  //   isLoggedInUser: true,
  //   name: "John"
  // };
  // const loggedOutUser = {
  //   isLoggedInUser: false
  // };
  return (
    <div className="app">
      <List />
    </div>
  );
};