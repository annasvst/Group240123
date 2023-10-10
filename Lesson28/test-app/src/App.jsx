import logo from './logo.svg';
import {Button} from './components/Button';
import './App.css';

function Footer({children}) {
  return (
    <footer className="footer">{children}</footer>
  );
};

function Menu({menuTitle}) {
  return (
    <div className="menu">{menuTitle}</div>
  );
};


function App() {
  console.log('Hello world!');

  return (
    <div className="App">
      <Menu menuTitle={'Menu title'} />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hello World !
        </p>
        <Button />
      </header>
      <Footer>
        <Menu menuTitle={'Footer menu title'}/>
      </Footer>
    </div>
  );
};

export default App;
