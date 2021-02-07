import React, { Component } from 'react';
import { HashRouter, Switch, Route } from "react-router-dom";
import Admin from "./pages/admin/admin";
import Login from "./pages/login/login";
import "./App.less";
class App extends Component {
    render() {
        return (
            <HashRouter>
                <Switch>
                    <Route path="/login"
                        component={Login} />
                    <Route ath="/admin"
                        component={Admin} />
                </Switch>
            </HashRouter>
        );
    }
}

export default App;