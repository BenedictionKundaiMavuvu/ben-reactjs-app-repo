import React, { useState, useContext } from "react";
import { AppContext } from "../Components/Routing";

export const Profile = () => {
  const { username, setUsername } = useContext(AppContext);
  const [newUsername, setNewUsername] = useState();
  return (
    <div>
      <h2>This is the profile page</h2>
      <p>The user is: {username}</p>
      <input
        placeholder="Enter Username..."
        onChange={(e) => {
          setNewUsername(e.target.value);
        }}
      />
      <button
        onClick={() => {
          setUsername(newUsername);
        }}
      >
        Add User
      </button>
    </div>
  );
};

export default Profile;
