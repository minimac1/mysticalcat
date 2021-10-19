import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import AppHeader from './AppHeader';
import AppFooter from './AppFooter';
import {FirstBackground} from './Backgrounds';
import {Updates} from './Updates';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import {FirstCat} from './Cats';
function temp() {
  alert("ALL")
}



function App() {
  return (
    <div className="App">
      <AppHeader/>
      <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Redirect to="/home" />
        </Route>
        <Route path="/home">
          <FirstBackground />
        </Route>
        <Route path="/Updates">
          <Updates />
        </Route>
      </Switch>
      </BrowserRouter>
      <AppFooter/>
    </div>
  );
}

export default App;
