import React, { useState, useContext } from "react";
import { userContext } from "../helper/Context";
import "../App.css";

const Login = () => {
  const { userName, setUserName, setProfile } = useContext(userContext);
  const [password, setPassword] = useState("");

  const handleChange = (e) => {
    setUserName(e.target.value);
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setProfile(true);
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
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
        <button type="submit">Login</button>
      </form>
    </>
  );
};

export default Login;
