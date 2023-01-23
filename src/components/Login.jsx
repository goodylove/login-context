import React, { useState, useContext } from "react";
import { userContext } from "../helper/Context";
import "../App.css";

const Login = () => {
  const { userName, setUserName, setProfile } = useContext(userContext);
  const [password, setPassword] = useState("");
  const [isDisabled, setIsDisabled] = useState(false);

  const handleChange = (e) => {
    setUserName(e.target.value);
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (userName === "") {
      setIsDisabled(true);
    } else {
      setProfile(true);
      setIsDisabled(false);
    }
  };
  return (
    <>
      <form onSubmit={handleSubmit} className="form">
        <input
          type="text"
          placeholder="username"
          onChange={handleChange}
          value={userName}
        />
        <input
          type="text"
          placeholder="password"
          onChange={handlePassword}
          value={password}
        />
        <button type="submit" isDisabled>
          Login
        </button>
      </form>
    </>
  );
};

export default Login;
