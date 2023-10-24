import './App.css';
// Example of renaming imported component
import { List as TodoList} from './components/List';

export const App = () => {

  return (
    <div className="app">
      <header className="app-header">
        To-do list
      </header>
      <TodoList />
    </div>
  );
};
