import React, { Component } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import "./index.less";
import menuList from "../../config/menuConfig";
import { Menu } from "antd";
import * as Icon from "@ant-design/icons";

const { SubMenu } = Menu;

//左侧导航组件
class leftNav extends Component {
  state = {
    collapsed: false,
  };
  //根据数据渲染menu菜单
  getMenuNode = (menuList) => {
    return menuList.map((item) => {
      if (item.children) {
        return (
          <SubMenu
            key={item.key}
            icon={React.createElement(Icon[item.icon], {
              style: { fontSize: "16px" },
            })}
            title={item.title}
          >
            {this.getMenuNode(item.children)}
          </SubMenu>
        );
      } else {
        return (
          <Menu.Item
            key={item.key}
            icon={React.createElement(Icon[item.icon], {
              style: { fontSize: "16px" },
            })}
          >
            <Link to={item.key}>{item.title}</Link>
          </Menu.Item>
        );
      }
    });
  };

  render() {
    return (
      <div className="left-nav">
        <Link className="left-nav-link" to="/home">
          <img src={logo} alt="logo" />
          <h1>硅谷后台</h1>
        </Link>
        <div style={{ width: "100%" }}>
          <Menu
            defaultSelectedKeys={["/home"]}
            defaultOpenKeys={["/product"]}
            mode="inline"
            theme="dark"
            inlineCollapsed={this.state.collapsed}
          >
            {this.getMenuNode(menuList)}
          </Menu>
        </div>
      </div>
    );
  }
}

export default leftNav;
