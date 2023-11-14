import { useEffect, useState } from 'react';
import './styles.css';

export const ControlledInput = () => {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (event) => {
    // In real production application, you usually want to delay the update of the value: can be done with setTimer or debounce (lodash);
    setInputValue(event.target.value);
  };

  useEffect(() => console.log(inputValue), [inputValue]);

  return (
    <>
    <h2>Controlled Input</h2>
    <input
      className="input"
      type="text"
      value={inputValue}
      onChange={handleInputChange}
      placeholder='Joe Doe'
    />
    </>
  );
}
