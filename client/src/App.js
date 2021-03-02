import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Dashboard, Blocks, Components, Articles } from "./views";
import { CssBaseline } from "@material-ui/core";
import AppBar from "./components/AppBar";

const App = () => {
  return (
    <>
      <CssBaseline />
      <Router>
        <AppBar />
        <Switch>
          <Route exact path="/" render={(props) => <Dashboard {...props} />} />
          <Route
            exact
            path="/blocks"
            render={(props) => <Blocks {...props} />}
          />
          <Route
            exact
            path="/components"
            render={(props) => <Components {...props} />}
          />
          <Route
            exact
            path="/articles"
            render={(props) => <Articles {...props} />}
          />
        </Switch>
      </Router>
    </>
  );
};

export default App;
