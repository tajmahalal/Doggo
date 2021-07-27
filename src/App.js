import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Home, SpecificBreed } from "./components/Index";

//Tajinder Singh


function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={() => <Home />} />
          <Route path="/SpecificBreed" exact component={() => <SpecificBreed />} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
