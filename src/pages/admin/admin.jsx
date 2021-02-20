import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { Layout } from "antd";
import LeftNav from "../../components/left-nav/index";
import Header from "../../components/header/index";
const { Footer, Sider, Content } = Layout;
class admin extends Component {
  render() {
    const user = localStorage.getItem("user");
    if (!user) {
      return <Redirect to="/login" />;
    }
    return (
      <Layout style={{ height: "100%" }}>
        <Sider>
          <LeftNav></LeftNav>
        </Sider>
        <Layout>
          <Header></Header>
          <Content style={{ background: "pink" }}>Content</Content>
          <Footer style={{textAlign:"center",color:"rgba(0,0,0,0.5)"}}>
            使用谷哥浏览器，效果体验更佳
          </Footer>
        </Layout>
      </Layout>
    );
  }
}

export default admin;
