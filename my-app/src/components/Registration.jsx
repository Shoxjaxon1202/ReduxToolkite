import React, { useEffect, useRef, useState } from "react";
import "../styles/login.scss";
import { useDispatch } from "react-redux";
import { loginApi } from "../redux/features/authSlice";

const Register = ({handleRegDisplay}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // const [formValue , setFormValue] = useState({
  //   email: "",
  //   password: "",
  //   username: "",
  //   firstname: "",
  //   lastname: "",
  // })
  const dispatch = useDispatch();
  const emailRef = useRef(null);

  const handleForm = (e) => {
    e.preventDefault();
 
  };

  useEffect(() => {
    emailRef.current.focus();
  }, []);

  return (
    <div className="login">
      <div className="login-container">
        <h1 className="login-title">Register</h1>
        <form onSubmit={handleForm} className="login-form">
          <div className="input-group">
            <label htmlFor="email" className="label">
              Email:
            </label>
            <input
              type="text"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              ref={emailRef}
              className="input-field"
            />
          </div>
          <div className="input-group">
            <label htmlFor="password" className="label">
              Password:
            </label>
            <input
              type="text"
              id="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="input-field"
            />
          </div>
          <button type="submit" className="login-btn">
            Register
          </button>
          <span onClick={
            ()=>{
              handleRegDisplay(false)
            }
          } className="login-btn register-span">
            Login
          </span>
        </form>
      </div>
    </div>
  );
};

export default Register;
