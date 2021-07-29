import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "../container/Home";
import Checkout from "../container/Checkout";
import NotFound from "../container/NotFound";


const App = () => {
  return (
    <Router>
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/checkout">
            <Checkout />
          </Route>
          <Route exact>
            <NotFound />
          </Route>
        </Switch>
    </Router>
  );
};

export default App;
