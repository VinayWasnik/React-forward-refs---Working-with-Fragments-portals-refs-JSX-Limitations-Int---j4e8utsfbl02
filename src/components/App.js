import React ,{ useRef,useState } from 'react'
import '../styles/App.css';
import InputField from './InputField.js';
const App = () => {
  const inputRef = useRef();

  const settingValue = () => {
    const inputValue = inputRef.current.value;
    setValues(inputValue);
  }

  const focusInput = () => {
    inputRef.current.focus();
  }

 const [values, setValues] = useState('');
//code here 


 
  return (
    <div>
    <InputField ref={inputRef}  type="text"/><br/>
    <button id="settingValueButton" onClick={settingValue}>Set Value</button>
    <button id="focusInputButton" onClick={focusInput}>Focus the input</button><br/><br/>
     <textarea id="textarea" value={values}></textarea>

    </div>
  );
}


export default App;
