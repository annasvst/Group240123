import './App.css';
import {List} from './components/List'

export const App = () => {
  // const paragraph = (
  //   <p>Hello!</p>
  // );

  return (
    <div className="app">
      <header className="app-header">
        To-do list
      </header>
      {/*
      - Add a TodoList component
      - TodoList component would contain TodoListItem component
      */}
      <List />
    </div>
  );
};
