import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { Modal } from "antd";
import LinkButotn from "../link-button";
import "./index.less";
import menuList from "../../config/menuConfig";
import { reqWeather } from "../../api/index";
import { formateDate } from "../../utils/dateUtils";
const { confirm } = Modal;
class index extends Component {
  state = {
    currentTime: formateDate(Date.now()),
  };
  logout = () => {
    //显示确认提示
    confirm({
      title: "确定要退出登录么?",
      okText: "确认",
      cancelText: "取消",
      onOk: () => {
        this.props.history.replace("/login");
      },
      onCancel() {
        console.log("Cancel");
      },
    });
  };
  getWeather = async (city) => {
    // 调用接口请求异步获取数据
    const { dayPictureUrl, weather } = await reqWeather(city);
    console.log(dayPictureUrl);
  };
  getTitle = () => {
    let title = "";
    let path = this.props.location.pathname;
    if (path.indexOf("/product") === 0) {
      path = "/product";
    }
    menuList.forEach((item) => {
      if (item.key === path) {
        title = item.title;
      } else if (item.children) {
        let cItem = item.children.find((cItem) => cItem.key === path);
        if (cItem) {
          title = cItem.title;
        }
      }
    });
    return title;
  };
  componentWillUnmount() {
    clearInterval(this.IntervalId);
  }
  componentDidMount() {
    // this.getWeather("广州");
    //启动定时器
    this.IntervalId = setInterval(() => {
      this.setState({
        currentTime: formateDate(Date.now()),
      });
    }, 1000);
  }

  render() {
    const title = this.getTitle();
    const { currentTime } = this.state;
    return (
      <div className="header">
        <div className="header-top">
          欢迎，admin &nbsp;&nbsp;
          <LinkButotn onClick={this.logout}>退出</LinkButotn>
        </div>
        <div className="header-bottom">
          <div className="header-bottom-left">{title}</div>
          <div className="header-bottom-right">
            <span>{currentTime}</span>
            <img
              src="https://gw.alipayobjects.com/zos/antfincdn/XAosXuNZyF/BiazfanxmamNRoxxVxka.png"
              alt="avatar"
            />
            <span>晴天</span>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(index);
