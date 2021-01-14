import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Home from "./components/Home";
import Users from "./components/Users";

function App() {

  return (
    <BrowserRouter>
      <Switch>
        <Route path="/:id" component={Users} />
        <Route exact path="/" component={Home} />
      </Switch>
    </BrowserRouter>

  )
}

export default App;
