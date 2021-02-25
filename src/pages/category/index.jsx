import React, { Component } from "react";
import { Card, Button, Modal, Table, Form, Input,message } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import LinkButton from "../../components/link-button";
import CateGory from "../../api/cate";
class index extends Component {
  state = {
    categorys: [],
    loading: false,
    name: "",
    showStatus: 0,
  };
  
  showModal = () => {
    this.setState({
      showStatus: 1,
    });
  };
  showModals = () => {
    this.setState({
      showStatus: 2,
    });
  };
  handleOk = (e) => {
    if (this.state.name) {
      this.setState({
        showStatus: 0,
      });
    }else{
        message.error('请输入分类名称');
    }
  };
  handleCancel = (e) => {
    this.setState({
      showStatus: 0,
    });
  };
  //初始化表格
  initColums = () => {
    this.columns = [
      { title: "分类的名称", dataIndex: "name", key: "_id" },
      {
        title: "操作",
        dataIndex: "",
        width: 300,
        render: () => <LinkButton  onClick={this.showModals}>修改分类</LinkButton>,
      },
    ];
  };
  getCategorys = () => {
    this.setState({
      categorys: CateGory,
      loading: true,
    });
  };
  onValuesChange = (values) => {
    console.log(values);
    const { name } = values;
    this.setState({
      name,
    });
  };
  componentWillMount() {
    this.initColums();
  }
  componentDidMount() {
    this.getCategorys();
    setTimeout(() => {
      this.setState({
        loading: false,
      });
    }, 1000);
  }
  render() {
      
    //右上角的操作区域
    const extra = (
      <Button type="primary" onClick={this.showModal}>
        <PlusOutlined />
        添加
      </Button>
    );
    const { categorys, loading, showStatus } = this.state;
    return (
      <Card extra={extra}>
        <Table
          bordered
          rowKey="_id"
          loading={loading}
          columns={this.columns}
          dataSource={categorys}
          pagination={{ defaultPageSize: 5, showQuickJumper: true }}
        />
        <Modal
          title={showStatus === 1 ? "添加分类" : "修改分类"}
          visible={showStatus !== 0 ? true : false}
          okText="确认"
          cancelText="取消"
          onOk={this.handleOk}
          onCancel={this.handleCancel}
        >
          <Form
            name="normal_login"
            className="login-form"
            onValuesChange={this.onValuesChange}
            initialValues={{
                name: "",
            }}
          >
            <Form.Item
              name="name"
              rules={[
                {
                  required: true,
                  message: "分类名称必须输入",
                },
              ]}
            >
              <Input placeholder="请输入分类名称" />
            </Form.Item>
          </Form>
        </Modal>
      </Card>
    );
  }
}

export default index;
