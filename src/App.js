import React, { useState } from "react";

import { userContext } from "./helper/Context";
import "./App.css";
import Login from "./components/Login";
import Profile from "./components/Profile";

function App() {
  const [userName, setUserName] = useState("");
  const [profile, setProfile] = useState(false);
  return (
    <userContext.Provider value={{ userName, setUserName, setProfile }}>
      {profile ? <Profile /> : <Login />}
    </userContext.Provider>
  );
}

export default App;
