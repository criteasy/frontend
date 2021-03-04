import React from 'react';
import {Maincontainer} from './screen/maincontainer/maincontainer'
import { Route, BrowserRouter, Switch, Redirect } from "react-router-dom";
import './App.scss';
import { Login } from './screen/login/login';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route  path="/crit" component={Maincontainer} />
        <Route  path="/login" component={Login} />
        <Redirect to="/crit"></Redirect>
      </Switch>
    </BrowserRouter>
  );
}



export default App;
