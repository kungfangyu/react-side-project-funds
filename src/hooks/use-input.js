/*
 * @Date: 2021-09-07 21:15:08
 * @LastEditors: Fane Kung
 * @LastEditTime: 2021-09-07 21:52:21
 * @FilePath: /website-funds/src/hooks/use-input.js
 */
import { useState } from "react";

const useInput = (validateValue) => {
  const [enteredValue, setEnteredValue] = useState('');
  const [isTouched, setIsTouched] =  useState(false);

  const valueIsValid = validateValue(enteredValue);
  const hasError = !valueIsValid && isTouched;

  const valueChangeHandler = (event) => {
    setEnteredValue(event.target.value)
  }

  const inputBlurHandler = event => {
    setIsTouched(true)
  }

  const reset = event => {
    setEnteredValue('')
    setIsTouched(false)
  }

  return{
    value: enteredValue,
    isValid: valueIsValid,
    hasError: hasError,
    valueChangeHandler,
    inputBlurHandler,
    reset
  }

}

export default useInput; 

