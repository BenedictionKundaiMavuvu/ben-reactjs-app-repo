import React, { useContext } from "react";
import { AppContext } from "../Components/Routing";

export const Home = () => {
  const { username } = useContext(AppContext);
  return (
    <div>
      <h2>This is the home page</h2>
      <p>The user is {username}</p>
    </div>
  );
};

export default Home;
