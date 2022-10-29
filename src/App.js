import React, { Fragment } from "react";
import Footer from "./components/Footer";
import Links from "./components/Links";
import Profile from "./components/Profile";

const App = () => {
  return (
    <Fragment>
      <div className="px-[3%] py-[7%] sm:px-[10%] sm:py-[3%]">
        <Profile />
        <Links />
      </div>
      <Footer />
    </Fragment>
  );
};

export default App;
