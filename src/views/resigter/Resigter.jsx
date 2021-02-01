import React, { Component } from "react";
import {
  NavBar,
  Button,
  WingBlank,
  Radio,
  WhiteSpace,
  List,
  InputItem,
} from "antd-mobile";
import Logo from "../../components/logo/logo.jsx";
const Item = List.Item;

class Resigter extends Component {
  state = {
    hasError: false,
    value: "",
  };
  render() {
    return (
      <div>
        <NavBar>硅&nbsp;谷&nbsp;智&nbsp;聘</NavBar>
        <Logo></Logo>
        <WingBlank>
          <List>
            <InputItem placeholder="请输入" value={this.state.value} clear>
              用户名：
            </InputItem>
            <WhiteSpace></WhiteSpace>
            <InputItem
              placeholder="请输入"
              type="password"
              value={this.state.value}
              placeholder="****"
              clear
            >
              密&nbsp;&nbsp;码：
            </InputItem>
            <WhiteSpace></WhiteSpace>
            <InputItem
              placeholder="请输入"
              type="password"
              value={this.state.value}
              placeholder="****"
              clear
            >
              确认密码：
            </InputItem>
            <Item>
              <span>用户类型</span>
              &nbsp;&nbsp;&nbsp;&nbsp;
              <Radio>大神</Radio>
              &nbsp;&nbsp;&nbsp;&nbsp;
              <Radio>老板</Radio>
            </Item>
            <WhiteSpace></WhiteSpace>
            <Button type="primary">注 &nbsp;&nbsp;&nbsp;&nbsp;册</Button>
            <WhiteSpace></WhiteSpace>
            <Button>还没有账户</Button>
          </List>
        </WingBlank>
      </div>
    );
  }
}

export default Resigter;
