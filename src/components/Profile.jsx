import React, { useContext } from "react";
import { userContext } from "../helper/Context";
import "../App.css";
const Profile = () => {
  const { userName } = useContext(userContext);
  return (
    <div className="profile">
      <h1>profile</h1>
      <h2>Username:{userName}</h2>
    </div>
  );
};

export default Profile;
