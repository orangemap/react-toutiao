import React, { Component } from "react";
import { Form, Input, Button, message } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import logo from "../../assets/images/logo.png";
import "./login.less";
class login extends Component {
  onFinish = (values) => {
    const { username, password } = values;
    if (username && password) {
      localStorage.setItem("user", "王建文");
      message.success("登录成功");
      this.props.history.replace("/")
    }
  };
  validatorPwd = (rule, value, callback) => {
    value = value.trim();
    if (!value) {
      return Promise.reject("密码必须输入");
    } else if (value.length < 4) {
      return Promise.reject("密码必须不能小于4位");
    } else if (value.length > 12) {
      return Promise.reject("密码必须不能小于12位");
    } else if (!/^[a-zA-Z0-9_]+$/.test(value)) {
      return Promise.reject("密码必须是英文、字母、下划线");
    } else {
      return Promise.resolve();
    }
  };
  render() {
    return (
      <div className="login-wrapper">
        <div className="login-header">
          <img src={logo} alt="logo" />
          <h1>React : 后台管理系统</h1>
        </div>
        <div className="login-content">
          <h1>用户登录</h1>
          <div>
            <Form
              name="normal_login"
              className="login-form"
              initialValues={{
                remember: true,
              }}
              onFinish={this.onFinish}
            >
              <Form.Item
                name="username"
                rules={[
                  {
                    required: true,
                    whitespace: true,
                    message: "用户名必须输入",
                  },
                  {
                    min: 4,
                    message: "密码不能少于4个字符",
                  },
                  {
                    max: 12,
                    message: "密码不能少于12个字符",
                  },
                  {
                    pattern: /^[a-zA-Z0-9_]+$/,
                    message: "密码必须是英文、字母、下划线",
                  },
                ]}
              >
                <Input
                  prefix={
                    <UserOutlined
                      className="site-form-item-icon"
                      style={{ color: "rgba(0,0,0,.25)" }}
                    />
                  }
                  placeholder="请输入用户名"
                />
              </Form.Item>
              <Form.Item
                name="password"
                rules={[
                  {
                    validator: this.validatorPwd,
                  },
                ]}
              >
                <Input
                  prefix={
                    <LockOutlined
                      style={{ color: "rgba(0,0,0,.25)" }}
                      className="site-form-item-icon"
                    />
                  }
                  type="password"
                  placeholder="请输入密码"
                />
              </Form.Item>
              <Form.Item>
                <Button
                  type="primary"
                  htmlType="submit"
                  className="login-form-button"
                >
                  登录
                </Button>
              </Form.Item>
            </Form>
          </div>
        </div>
      </div>
    );
  }
}
export default login;
