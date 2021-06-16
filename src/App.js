import React, { useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Form1 from "./components/Form1";

import "./App.css";

function App() {
  return (
    <Router>
      <Route
        path="/"
        exact
        render={() => (
          <>
            <div className="div-parent-form-container">
              <Form1 title="" />
            </div>
          </>
        )}
      />
    </Router>
  );
}

export default App;
