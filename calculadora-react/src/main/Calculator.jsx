import React, { useState } from 'react';

import './Calculator.css'

import Button from '../components/Button';
import Display from '../components/Display';

export default props => {

  const initialState = {
    displayValue: '0',
    clearDisplay: false,
    operation: null,
    values: [0, 0],
    current: 0,
  }

  const [displayValue, setDisplayValue] = useState(initialState.displayValue);
  const [clearDisplay, setClearDisplay] = useState(initialState.clearDisplay);
  const [operationState, setOperationState] = useState(initialState.operation);
  const [values, setValues] = useState(initialState.values);
  const [current, setCurrent] = useState(initialState.current);



  const clearMemory = () => {
    setDisplayValue(initialState.displayValue);
    setClearDisplay(initialState.clearDisplay);
    setOperationState(initialState.operation)
    setValues(initialState.values)
    setCurrent(initialState.current)
  }

  const setOperation = operation => {
   
    if (current === 0) {
      setOperationState(operation);
      setCurrent(1);
      setClearDisplay(true);
    } else {

      const equals = operation === '=';

      const currentOperation = operationState;

      const currentValues = [...values]


      switch(currentOperation){
        case '+':
          currentValues[0] = currentValues[0] + currentValues[1];
          break;
        case '-':
          currentValues[0] = currentValues[0] - currentValues[1];
          break;
        case '*':
          currentValues[0] = currentValues[0] * currentValues[1];
          break;
        case '/':
          currentValues[0] = currentValues[0] * currentValues[1];
          break;
        default:
          break;
      }


      currentValues[1] = 0;

      setDisplayValue(currentValues[0]);
      setOperationState(equals ? null : operation);
      setCurrent(equals ? 0 : 1);
      setClearDisplay(!equals);
      setValues(currentValues);

    }
  }

  const addDigit = n => {

    if (n === '.' && displayValue.includes('.')) {
      return
    }

    const clearDisplayCurrent = displayValue === '0' || clearDisplay
    const currentValue = clearDisplayCurrent ? '' : displayValue
    const displayValueCurrent = currentValue + n

    setDisplayValue(displayValueCurrent);
    setClearDisplay(false);


    if (n !== '.') {
      console.log(current)
      const i = current;
      const newValue = parseFloat(displayValueCurrent);
      const valuesCurrent = [...values];
      valuesCurrent[i] = newValue;
      setValues(valuesCurrent);

    }

  }




  return (

    <div className="calculator">
      <Display value={displayValue} />
      <Button label="AC" click={clearMemory} triple />
      <Button label="/" click={setOperation} operation />
      <Button label="7" click={addDigit} />
      <Button label="8" click={addDigit} />
      <Button label="9" click={addDigit} />
      <Button label="*" click={setOperation} operation />
      <Button label="4" click={addDigit} />
      <Button label="5" click={addDigit} />
      <Button label="6" click={addDigit} />
      <Button label="-" click={setOperation} operation />
      <Button label="1" click={addDigit} />
      <Button label="2" click={addDigit} />
      <Button label="3" click={addDigit} />
      <Button label="+" click={setOperation} operation />
      <Button label="0" click={addDigit} double />
      <Button label="." click={addDigit} />
      <Button label="=" click={setOperation} operation />
    </div>

  )

}