import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import CreateComponent from "./components/CreateComponent";
import HeaderComponent from "./components/HeaderComponent";
import EmployeeComponent from "./components/EmployeeComponent";
import FooterComponent from "./components/FooterComponent";

function App() {
  return (
    <div className="container">
      <Router>
        <HeaderComponent />
        <Switch>
          <Route path="/" exact component={EmployeeComponent} />
          <Route path="/create" component={CreateComponent} />
        </Switch>
        <FooterComponent />
      </Router>
    </div>
  );
}

export default App;
