import React from "react";
import { Route } from "react-router-dom";
import NavWrapper from "./components/NavWrapper";
import data from "./data";
import "./App.css";

function App() {
  return (
    <Route
      exact
      path="/"
      render={props => {
        <NavWrapper {...props} data={data} />;
      }}
    />
  );
}

export default App;
