import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Layout from "../Layout/Layout";
import Home from "../container/Home/Home";
import NotFound from "../container/NotFound";
import Success from "../container/Success/Success";
import Checkout from "../container/Checkout/Checkout";


const App = () => {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/checkout" exact>
            <Checkout />
          </Route>
          <Route path="/checkout/success" exact>
            <Success />
          </Route>
          <Route exact>
            <NotFound />
          </Route>
        </Switch>
      </Layout>
    </Router>
  );
};

export default App;
