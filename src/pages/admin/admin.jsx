import React, { Component } from "react";
import { Redirect, Switch, Route } from "react-router-dom";
import { Layout } from "antd";
import LeftNav from "../../components/left-nav/index";
import Header from "../../components/header/index";
import Home from "../home"
import Category from "../category"
import Product from "../product/product"
import Role from "../role"
import User from "../user"
import Bar from "../bar"
import Line from "../line"
import Pie from "../pie"
import Order from "../order"
import NotFound from "../../components/notfound"
const { Footer, Sider, Content } = Layout;
class admin extends Component {
  render() {
    const user = localStorage.getItem("user");
    if (!user) {
      return <Redirect to="/login" />;
    }
    return (
      <Layout style={{ height: "100%" }}>
        <Sider style={{borderRight:"1px solid #e8e8e8"}} >
          <LeftNav></LeftNav>
        </Sider>
        <Layout>
          <Header></Header>
          <Content style={{ margin: "30px", backgroundColor: "white" }}>
            <Switch>
              <Redirect exact from="/" to="/home" />
              <Route path="/home" component={Home} />
              <Route path="/category" component={Category} />
              <Route path="/product" component={Product} />
              <Route path="/role" component={Role} />
              <Route path="/user" component={User} />
              <Route path="/charts/bar" component={Bar} />
              <Route path="/charts/line" component={Line} />
              <Route path="/charts/pie" component={Pie} />
              <Route path="/order" component={Order} />
              <Route component={NotFound} /> {/*上面没有一个匹配, 直接显示*/}
            </Switch>
          </Content>
          <Footer style={{ textAlign: "center", color: "rgba(0,0,0,0.5)" }}>
            使用谷哥浏览器，效果体验更佳
          </Footer>
        </Layout>
      </Layout>
    );
  }
}

export default admin;
