import React, { useState } from "react";

import { userContext } from "./helper/Context";
import "./App.css";
import Login from "./components/Login";
import Profile from "./components/Profile";

function App() {
  const [userName, setUserName] = useState("");
  const [profile, setProfile] = useState(false);
  return (
    <div className="app">
      <userContext.Provider value={{ userName, setUserName, setProfile }}>
        {profile ? <Profile /> : <Login />}
      </userContext.Provider>
    </div>
  );
}

export default App;
