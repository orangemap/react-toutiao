import React, { Component } from "react";
import { Redirect, Switch, Route } from "react-router-dom";
import ProductDetail from "./detail";
import ProductHome from "./index";
class product extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/product"  component={ProductHome} />
        <Route path="/product/detail" component={ProductDetail} />
        <Redirect to="/product" />
      </Switch>
    );
  }
}

export default product;
