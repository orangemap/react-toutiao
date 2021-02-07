import React, { Component } from "react";
import { Form, Input, Button } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import logo from "../../assets/images/logo.png";
import "./login.less";
class login extends Component {
  onFinish = (values) => {
    console.log("Received values of form: ", values);
  };
  handleConfirmSkuId = (rule, value, callback) => {

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
                    message: "用户名必须输入",
                  },
                  {
                    min:4,
                    message: '密码不能少于4个字符',
                  },
                //   {
                //     validator: (rule, value, callback) =>
                //       this.handleConfirmSkuId(rule, value, callback),
                //   },
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
                    required: true,
                    message: "密码必须输入",
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
