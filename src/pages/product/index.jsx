import React, { Component } from "react";
import { Card, Select, Input, Table, Button, message } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import products from "../../api/product";
import LinkButton from "../../components/link-button";
import memoryUtils  from "../../utils/memoryUtils"
const Option = Select.Option;
class index extends Component {
  state = {
    products: [],
    loading: false,
    current: 1,
    total: 0,
    searchType: "productName",
    searchName: "", //搜索关键字
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
        // dataIndex: "status",
        width: 200,
        render: (item) => {
          let btnText = "下架";
          let text = "在售";
          if (item.status === "2") {
            btnText = "上架";
            text = "已下架";
          }
          return (
            <span>
              <Button
                type="primary"
                onClick={() => {
                  item.status = item.status === "1" ? "2" : "1";
                  message.success("商品更新成功");
                  this.getProducts();
                }}
              >
                {btnText}
              </Button>
              <span style={{ margin: "0 10px" }}>{text}</span>
            </span>
          );
        },
      },
      {
        title: "操作",
        dataIndex: "",
        width: 200,
        render: (product) => (
          <span>
            <LinkButton
              onClick={() => {
                memoryUtils.product =product
                this.props.history.push("/product/detail");
              }}
            >
              详情
            </LinkButton>
            <LinkButton onClick={()=>{
                memoryUtils.product =product
                this.props.history.push("/product/add");
            }}>修改</LinkButton>
          </span>
        ),
      },
    ];
  };
  getProducts = (pageNum) => {
    const { searchName, searchType } = this.state;
    if (searchName) {
      let newProducts = products.filter((value, index, array) => {
        return searchName === value.name;
      });
      console.log(newProducts);
      this.setState({
        products: newProducts,
        loading: true,
      });
    } else {
      this.setState({
        products: products,
        loading: true,
      });
    }
    setTimeout(() => {
      this.setState({
        loading: false,
        current: 1,
      });
    }, 1000);
  };
  handleChange = (value, option) => {
    this.setState({
      searchType: value,
    });
  };
  onChangePage = (page, pageSize) => {
    this.setState({
      current: page.current,
    });
  };
  componentDidMount() {
    this.getProducts();
  }
  componentWillMount() {
    this.initColums();
  }
  render() {
    const { loading, searchName, searchType } = this.state;
    const title = (
      <span>
        <Select
          style={{ width: 200 }}
          value={searchType}
          onChange={this.handleChange}
        >
          <Option value="productName">按名称搜索</Option>
          <Option value="productDesc"> 按描述搜索</Option>
        </Select>
        <Input
          value={searchName}
          onChange={(e) => {
            this.setState({ searchName: e.target.value });
          }}
          style={{ width: 200, margin: "0 10px" }}
          placeholder="我爱大宁宁"
        />
        <Button
          type="primary"
          onClick={() => {
            this.getProducts(1);
          }}
        >
          搜索
        </Button>
      </span>
    );
    //右上角的操作区域
    const extra = (
      <Button type="primary" onClick={()=>{
        memoryUtils.product ={}
        this.props.history.push("/product/add");
      }}>
        <PlusOutlined />
        添加商品
      </Button>
    );
    return (
      <Card title={title} extra={extra}>
        <Table
          bordered
          rowKey="_id"
          loading={loading}
          columns={this.columns}
          dataSource={this.state.products}
          onChange={this.onChangePage}
          pagination={{
            defaultPageSize: 5,
            current: this.state.current,
            showQuickJumper: true,
          }}
        />
      </Card>
    );
  }
}

export default index;
