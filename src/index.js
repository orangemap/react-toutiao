import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store";
import Resigter from "./views/resigter/Resigter.jsx";
import Login from "./views/login/Login.jsx";
import Main from "./views/main/Main.jsx";

import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <Provider store={store}>
    <HashRouter>
      <Switch> <Route path="/resigter" component={Resigter}></Route>
        <Route path="/login" component={Login}></Route>
        <Route component={Main}></Route></Switch>
    </HashRouter>
  </Provider>
  ,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
