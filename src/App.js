import React from "react";
import Links from "./components/Links";
import Profile from "./components/Profile";

const App = () => {
  return (
    <div className="p-[2%] sm:px-[10%] sm:py-[3%]">
      <Profile />
      <Links />
    </div>
  );
};

export default App;
