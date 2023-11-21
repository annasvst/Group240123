import { useEffect, useState } from 'react';
import './styles.css';

export const ControlledInput = () => {
  // If you need to use default value in controlled component, then you have to set it as default state value
  const [inputValue, setInputValue] = useState('');
  const [helperMessage, setHelperMessage] = useState(undefined);
  /*
  Undefined - the value was not defiened yet
  Null - "empty" / "falsy" value
  */

  const handleInputChange = (event) => {
    // In real production application, you usually want to delay the update of the value: can be done with setTimeout or debounce (lodash);
    setInputValue(event.target.value);
    if (inputValue.length < 5) {
      setHelperMessage('Your input should be at least 5 characters long');
    } else if (inputValue.length > 10) {
      setHelperMessage('Your input should be no mre than 10 characters long');
    } else {
      setHelperMessage(null);
    }
  };

  useEffect(() => console.log(inputValue), [inputValue]);

  return (
    <>
    <h2>Controlled Input</h2>
    <form action="">
    <input
      className="input"
      type="text"
      value={inputValue}
      onChange={handleInputChange}
      placeholder='Joe Doe'
    />
    <div><span>{helperMessage}</span></div>
    <button type='submit'>Submit</button>
    </form>
    </>
  );
}
