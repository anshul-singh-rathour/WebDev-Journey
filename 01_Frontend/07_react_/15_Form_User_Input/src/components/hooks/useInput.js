import { useState } from "react";
export function useInput(defaultvalue, validationFn) {
  const [enteredVAlue, setEnteredValue] = useState(defaultvalue);
  const [didEdit, setDidEdit] = useState(false);

  const valueIsValid = validationFn(enteredVAlue);
  function handleInputChange(event) {
    setEnteredValue(event.target.value);

    setDidEdit(false);
  }

  function handleInputBlur() {
    setDidEdit(true);
  }
  return {
    value: enteredVAlue,
    handleInputBlur,
    handleInputChange,
    hasError: didEdit && valueIsValid,
  };
}