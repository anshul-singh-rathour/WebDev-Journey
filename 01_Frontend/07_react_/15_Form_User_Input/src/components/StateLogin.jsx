import useInput from "./hooks/useInput.js";
import Input from "./Input.jsx";
import { isEmail, isNotEmpty, hasMinLength } from "../util/validation.js";
export default function Login() {
  const { value: emailValue, handleInputBlur: handleEmailBlur, handleInputChange: handleEmailChange, hasError: emailHasError } = useInput("", (value) => isEmail(value) && isNotEmpty(value));

  const { value: passwordValue, handleInputBlur: handlePasswordBlur, handleInputChange: handlePasswordChange, hasError: passwordHasError } = useInput("", (value) => hasMinLength(value, 6));

  function handleSubmit(event) {
    event.preventDefault();
    if (emailHasError || passwordHasError) {
      return;
    }
    console.log("submitted");
  }

  //   now to get values entered by the user we can use use State to check at every keystroke
  //   const [enteredEmail, setEnteredEmail] = useState("");
  //   const [enteredPassword, setEnteredPassword] = useState("");
  //   function handleEmailChange(event) {
  //     setEnteredEmail(event.target.value);
  //   }
  //   function handlePasswordChange(event) {
  //     setEnteredPassword(event.target.value);
  //   }

  //   combined state method

  //   const [enteredVAlues, setEnteredValues] = useState({
  //     email: "",
  //     password: "",
  //   });

  //    checking validation on each change and using useState
  //   const emailIsInvalid = enteredVAlues.email !== "" && !enteredVAlues.email.includes("@");
  //

  //   for checking only after unfocus
  //   const [didEdit, setDidEdit] = useState({
  //     email: false,
  //     password: false,
  //   });

  //   const emailIsInvalid = didEdit.email && !isEmail(enteredVAlues.email) && !isNotEmpty;

  //   const passwordIsInvalid = didEdit.password && hasMinLength(enteredVAlues.password, 6);

  //   function handleInputChange(identifier, value) {
  //     setEnteredValues((preValues) => ({
  //       ...preValues,
  //       [identifier]: value,
  //     }));

  //     setDidEdit((prevEdit) => ({
  //       ...prevEdit,
  //       [identifier]: false,
  //     }));
  //   }

  //   function handleInputBlur(identifier) {
  //     setDidEdit((prevEdit) => ({
  //       ...prevEdit,
  //       [identifier]: true,
  //     }));
  //   }

  return (
    // more elegant and good method to stop reload on submit
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>

      <div className="control-row">
        {/* <div className="control no-margin">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            name="email"
            onBlur={() => handleInputBlur("email")}
            onChange={(event) => {
              handleInputChange("email", event.target.value);
            }}
            value={enteredVAlues.email}
          />
          <div className="control-error">{emailIsInvalid && <p>please enter a valid email </p>}</div>
        </div> */}

        {/* <div className="control no-margin">
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            name="password"
            onChange={(event) => {
              handleInputChange("password", event.target.value);
            }}
            value={enteredVAlues.password}
          />
        </div>
      */}

        <Input label="Email" id="email" name="email" type="email" onBlur={handleEmailBlur} onChange={handleEmailChange} value={emailValue} error={emailHasError && "Please enter a valid email! ."} />

        <Input label="Password" id="password" name="password" type="password" onBlur={handlePasswordBlur} onChange={handlePasswordChange} value={passwordValue} error={passwordHasError && "Please enter a valid password! ."} />

        <p className="form-actions">
          <button className="button button-flat">Reset</button>
          {/*  one way to stop submit the form  */}
          <button /*type="button" onClick={handleSubmit}*/>Login</button>
        </p>
      </div>
    </form>
  );
}
