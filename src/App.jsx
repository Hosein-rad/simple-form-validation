import { useState } from "react";
import "./styles.css";

function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [submit, setSubmit] = useState("");

  const emailValidation = email.match(
    /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,10}$/g
  );
  const pwValid = password.match(
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[^\s]{10,50}$/g
  );
  const isTenToFifty = password.match(/\S{10,50}/g);
  const capitalExists = password.match(/.*[A-Z]/g);
  const lowerExists = password.match(/.*[a-z]/g);
  const digitExists = password.match(/.*[0-9]/g);

  return (
    <form className="form">
      <div
        className={`form-group ${
          submit ? (emailValidation ? "success" : "error") : null
        }`}
      >
        <label className="label" htmlFor="email">
          Email
        </label>
        <input
          className="input"
          type="email"
          id="email"
          placeholder="Enter your Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <div
          className={`msg ${
            submit ? (emailValidation ? "hidden" : null) : "hidden"
          }`}
        >
          <b>your Email is not valid.</b> <br />
          valid format: example@examle.example
        </div>
      </div>
      <div
        className={`form-group ${
          submit ? (pwValid ? "success" : "error") : null
        }`}
      >
        <label className="label" htmlFor="password">
          Password
        </label>
        <input
          className="input"
          type="password"
          id="password"
          placeholder="Enter your Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <div
          className={`msg ${submit ? (pwValid ? "hidden" : null) : "hidden"}`}
        >
          Password must:
          <br />
          <b className={`warning ${isTenToFifty ? "green" : null}`}>
            ✗ be at least 10 characters
          </b>
          <b className={`warning ${lowerExists ? "green" : null}`}>
            ✗ include a lowercase letter
          </b>
          <b className={`warning ${capitalExists ? "green" : null}`}>
            ✗ include an uppercase letter
          </b>
          <b className={`warning ${digitExists ? "green" : null}`}>
            ✗ include a number
          </b>
        </div>
      </div>
      <button
        className="btn"
        type="submit"
        onClick={(e) => {
          e.preventDefault();
          setSubmit("Change Bitch");
        }}
      >
        Submit
      </button>
    </form>
  );
}

export default App;
