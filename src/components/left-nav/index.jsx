import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import { Menu } from "antd";
import * as Icon from "@ant-design/icons";
import logo from "../../assets/images/logo.png";
import menuList from "../../config/menuConfig";
import "./index.less";
const { SubMenu } = Menu;

//左侧导航组件
class leftNav extends Component {
  //根据数据渲染menu菜单
  getMenuNode = (menuList) => {
    const path = this.props.location.pathname;
    return menuList.map((item) => {
      if (item.children) {
        const cItem = item.children.find(cItem => path.indexOf(cItem.key) === 0);
        if (cItem) {
          this.openKey = item.key;
        }
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
  componentWillMount() {
    this.menuNodes = this.getMenuNode(menuList);
  }
  render() {
    //当前请求的路由路径
    let selectKey = this.props.location.pathname;
    if (selectKey.indexOf("/product")===0) {
      selectKey = "/product";
    }
    return (
      <div className="left-nav">
        <Link className="left-nav-link" to="/home">
          <img src={logo} alt="logo" />
          <h1>硅谷后台</h1>
        </Link>
        <div style={{ width: "100%" }}>
          <Menu
            selectedKeys={[selectKey]}
            defaultOpenKeys={[this.openKey]}
            mode="inline"
            theme="dark"
          >
            {this.menuNodes}
          </Menu>
        </div>
      </div>
    );
  }
}

export default withRouter(leftNav);
