import React, { Component } from "react";
import { Card, List } from "antd";
import { ArrowLeftOutlined } from "@ant-design/icons";
import LinkButton from "../../components/link-button";
import "./index.less";
class detail extends Component {
  render() {
    const Item = List.Item;
    const title = (
      <span>
        <LinkButton
          onClick={() => {
            this.props.history.goBack();
          }}
        >
          <ArrowLeftOutlined />
        </LinkButton>
        <span>商品详情</span>
      </span>
    );
    return (
      <Card title={title} className="detail">
        <List>
          <Item>
            <span className="detail-left">商品名称:</span>
            <span>aa</span>
          </Item>
          <Item>
            <span className="detail-left">商品描述:</span>
            <span>放散阀</span>
          </Item>
          <Item>
            <span className="detail-left">商品价格:</span>
            <span>11元</span>
          </Item>
          <Item>
            <span className="detail-left">所属分类:</span>
            <span>电子类</span>
          </Item>
          <Item>
            <span className="detail-left">商品图片:</span>
            <span>
              <img
                className="detail-img"
                src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
                alt=""
              />
              <img
                className="detail-img"
                src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
                alt=""
              />
            </span>
          </Item>
          <Item>
            <span className="detail-left">商品详情:</span>
            <span>电子类</span>
          </Item>
        </List>
      </Card>
    );
  }
}

export default detail;
