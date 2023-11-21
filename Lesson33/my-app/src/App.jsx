import { Card } from './components/Card';
import { UncontrolledInput} from './components/UncontrolledInput'
import {ControlledInput} from './components/ControlledInput';
import { LoginForm } from './components/LoginForm';

export const App = () => {
  
  return (
    <div className="container">
      <Card dark>
        <UncontrolledInput />
      </Card>
      <Card>
        <ControlledInput />
      </Card>
      <LoginForm/>
    </div>
  );
};
