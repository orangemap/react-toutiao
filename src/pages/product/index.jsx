import React, { Component } from "react";
import { Card, Select, Input, Table, Button } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import products from "../../api/product";
import LinkButton from "../../components/link-button";
const Option = Select.Option;
class index extends Component {
  state = {
    products: [],
    loading: false,
  };
  //初始化表格
  initColums = () => {
    this.columns = [
      { title: "商品名称", dataIndex: "name" },
      { title: "描述", dataIndex: "desc" },
      {
        title: "价格",
        dataIndex: "price",
        render: (product) => "¥" + product,
      },
      {
        title: "状态",
        dataIndex: "status",
        width:150,
        render: (status) => {
          let  btnText = "下架";
          let text = "在售";
          if (status === "2") {
            btnText = '上架'
            text = "已下架"
          }
          return (
            <span>
              <Button type="primary"> {btnText}</Button>
              <span style={{margin:'0 10px'}}>{text}</span>
            </span>
          );
        },
      },
      {
        title: "操作",
        dataIndex: "",
        width: 200,
        render: () => (
            <span>
                <LinkButton onClick={this.showModals}>详情</LinkButton>
                <LinkButton onClick={this.showModals}>修改</LinkButton>
            </span>
          
        ),
      },
    ];
  };
  getProducts = () => {
    this.setState({
      products: products,
      loading: true,
    });
  };
  componentDidMount() {
    this.getProducts();
    setTimeout(() => {
      this.setState({
        loading: false,
      });
    }, 1000);
  }
  componentWillMount() {
    this.initColums();
  }
  render() {
    const title = (
      <span>
        <Select style={{ width: 200 }} value="2">
          <Option value="1">按名称搜索</Option>
          <Option value="2"> 按描述搜索</Option>
        </Select>
        <Input
          style={{ width: 200, margin: "0 10px" }}
          placeholder="我爱大宁宁"
        />
        <Button type="primary">搜索</Button>
      </span>
    );
    //右上角的操作区域
    const extra = (
      <Button type="primary">
        <PlusOutlined />
        添加商品
      </Button>
    );
    const { loading } = this.state;
    return (
      <Card title={title} extra={extra}>
        <Table
          bordered
          rowKey="_id"
          loading={loading}
          columns={this.columns}
          dataSource={products}
          pagination={{ defaultPageSize: 5, showQuickJumper: true }}
        />
      </Card>
    );
  }
}

export default index;
