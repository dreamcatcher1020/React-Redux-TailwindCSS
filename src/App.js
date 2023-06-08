import React from "react";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "./routes/Home";
import About from "./routes/About";
import Feedback from "./routes/Feedback";
import PersonalityTest from "./routes/PersonalityTest";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

export default function App() {
  return (
    <Router>
      <div className="flex-1">
        <Navbar />
        <Switch>
          <Route path="/personality-test/:testId/feedback">
            <Feedback />
          </Route>
          <Route path="/personality-test/:testId">
            <PersonalityTest />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
      <Footer />
    </Router>
  );
}
