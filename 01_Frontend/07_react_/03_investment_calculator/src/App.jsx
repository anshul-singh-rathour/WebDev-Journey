import { useState } from "react";
import Header from "./components/Header";
import UserInput from "./components/UserInput";
import Result from "./components/Result";

function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });

  const validInput = userInput.duration >= 1;

  function handleChange(inputIdentity, newValue) {
    setUserInput((prevInput) => {
      return {
        ...prevInput,
        [inputIdentity]: +newValue,
      };
    });
  }

  return (
    <>
      <Header />
      <UserInput userInput={userInput} handleChange={handleChange} />
      {!validInput && <p className="center">Please enter duration greater than zero . </p>}
      {validInput && <Result userInput={userInput} />}
    </>
  );
}

export default App;
