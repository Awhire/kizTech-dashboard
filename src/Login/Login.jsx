import "./Login.css";
import kiztech from "../assets/KizTech.jpg";
import { useState } from "react";
import warning from "../assets/warning.png";

import { auth } from "../Firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

const Login = () => {
  const [NewUser, setNewUser] = useState(false);
  const [loading, setLoading] = useState(false);

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [error, setError] = useState(false);
  const [errorMsg, setErrorMsg] = useState(false);

  const submit = (e) => {
    e.preventDefault();
    setError(false);
    setLoading(true);
    setTimeout(() => {
      if (NewUser) {
        // Create User
        createUserWithEmailAndPassword(auth, email, password)
          .then(() => {
            localStorage.setItem("username", username);
          })
          .catch((error) => {
            setError(true);
            const errorMessage = error.message;
            setErrorMsg(errorMessage);
          });
      } else {
        // Sign in user
        signInWithEmailAndPassword(auth, email, password).catch((error) => {
          setError(true);
          const errorMessage = error.message;
          setErrorMsg(errorMessage);
        });
      }
      setLoading(false);
    }, 2000);
  };

  return (
    <div className="login-page">
      <header>
        <span>KizTech Studio Dashboard</span>
      </header>

      <img src={kiztech} alt="" className="logo" />
      {/* <h2 className="title">
        Sub-min <br /> Dashboard
      </h2> */}

      <form onSubmit={submit}>
        {NewUser && (
          <div className="username">
            <input
              onChange={(e) => setUsername(e.target.value)}
              type="username"
              id="username"
              required
            />
            <label htmlFor="username">username</label>
          </div>
        )}

        <div className="email">
          <input
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            id="email"
            required
          />
          <label htmlFor="email">email</label>
        </div>
        <div className="password">
          <input
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            id="password"
            required
          />
          <label htmlFor="password">password</label>
        </div>

        {error && <img src={warning} alt="" className="status" />}
        {error && <span className="error">Process Failed</span>}
        {error && <span className="error">{errorMsg}</span>}

        <button type="submit">
          {NewUser ? "Sign Up" : "Log In"}{" "}
          {loading ? (
            <span className="spin">
              <AiOutlineLoading3Quarters className="loading" />
            </span>
          ) : (
            ""
          )}
        </button>
        {NewUser ? (
          <span className="user-stat">
            Already have an account?{" "}
            <b
              onClick={() => {
                setNewUser(!NewUser);
                setError(false);
              }}
            >
              Log In
            </b>
          </span>
        ) : (
          <span className="user-stat">
            Don't have an account?{" "}
            <b
              onClick={() => {
                setNewUser(!NewUser);
                setError(false);
              }}
            >
              Sign Up
            </b>
          </span>
        )}
      </form>
    </div>
  );
};

export default Login;
