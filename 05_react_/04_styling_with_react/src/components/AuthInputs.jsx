import { useState } from "react";
// use of styled components
import { styled } from "styled-components";

import StyledInput from "./StyledInput.jsx";

import { StyledSimpleButton, StylednewButton } from "./StyledButton.jsx";

// this return a coponent like div with the properties
const Containerdiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
`;

export default function AuthInputs() {
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredPassword, setEnteredPassword] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleInputChange(identifier, value) {
    if (identifier === "email") {
      setEnteredEmail(value);
    } else {
      setEnteredPassword(value);
    }
  }

  function handleLogin() {
    setSubmitted(true);
  }

  const emailNotValid = submitted && !enteredEmail.includes("@");
  const passwordNotValid = submitted && enteredPassword.trim().length < 6;

  return (
    <div id="auth-inputs">
      <Containerdiv>
        {/* <p>
         <Labelstyle className={`label ${emailNotValid ? 'invalid' : ''}`}>Email</Labelstyle> 
        $ sign use so that props do not clash with builtin props 
         <Labelstyle $invalid={emailNotValid}>Email</Labelstyle>
          <Input
            $invalid={emailNotValid}
            type="email" 
        // className={emailNotValid ? 'invalid' : undefined}
            // style={{
        //     backgroundColor: emailNotValid ? '#fed2d2': '#d1d5db' ,
            // }}
            onChange={(event) => handleInputChange("email", event.target.value)}
          />
        </p> */}
        {/* <p>
            {/* <Labelstyle className={`label ${passwordNotValid ? 'invalid' : ''}`}>Password</Labelstyle> }
            <Labelstyle $invalid={passwordNotValid}>Password</Labelstyle>
            <Input
              $invalid={passwordNotValid}
              type="password"
              // className={passwordNotValid ? 'invalid' : undefined}
              //  style={{
              //     backgroundColor: passwordNotValid ? '#fed2d2': '#d1d5db' ,
              // }}
              onChange={(event) =>
                handleInputChange("password", event.target.value)
              }
            />
          </p> */}
        <StyledInput
          label={"Email"}
          $invalid={emailNotValid}
          type="email"
          onChange={(event) => handleInputChange("email", event.target.value)}
        />
        <StyledInput
          label={"Password"}
          $invalid={passwordNotValid}
          type="password"
          onChange={(event) => handleInputChange("password", event.target.value) }
        />
      </Containerdiv>
      <div className="actions">
        <StylednewButton type="button" className="text-button">
          Create a new account
        </StylednewButton>
        <StyledSimpleButton className="button" onClick={handleLogin}>
          Sign In
        </StyledSimpleButton>
      </div>
    </div>
  );
}
