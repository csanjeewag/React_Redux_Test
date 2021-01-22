import React, { Component } from "react";
import routes from "./routes";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
// import { createBrowserHistory } from "history";
class App extends Component {
  render() {
    return (

      <div>
        <BrowserRouter >
        <Switch>
          {routes.map((route, index) => (
            <Route
              key={index}
              exact={route.exact}
              path={route.path}
              component={route.layout(route.component)}
            />
          ))}
        <Route path ='/*' render={()=><Redirect to="/home"/>}>
     
        </Route>
        </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;

