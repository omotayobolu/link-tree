import React, { Fragment } from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage";
import Contact from "./components/Contact";

const App = () => {
  return (
    <Fragment>
      <div className="px-[3%] py-[7%] sm:px-[10%] sm:py-[3%]">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Fragment>
  );
};

export default App;
