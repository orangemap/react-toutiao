import React, { Component } from "react";
import { Card, Form, Select, Input, Button } from "antd";
import { ArrowLeftOutlined } from "@ant-design/icons";
import LinkButton from "../../components/link-button";
import PicturesWall from "./pictures-wall";
import RichTextEditor from "./rich-text-editor";
import CateGory from "../../api/cate";
import "./index.less";
import memoryUtils from "../../utils/memoryUtils";
const Item = Form.Item;
const layout = {
  labelCol: { span: 2 },
  wrapperCol: { span: 8 },
};
const { Option } = Select;
class ProductAddUpdate extends Component {
  state = {
    categorys: [],
  };
  getCategorys = () => {
    this.setState({
      categorys: CateGory,
      loading: true,
    });
  };
  validatorPrice = (rule, value, callback) => {
    if (value === "") {
      return Promise.resolve();
    } else if (value * 1 <= 0) {
      return Promise.reject("商品价格大于0");
    } else {
      return Promise.resolve();
    }
  };
  onFinish = (values) => {
    const { name, desc, price, categoryId } = values;
    const detail = this.refs["editRef"].getDetail();
    const imgs = this.refs["ptwRef"].getImgs();
    this.props.history.push("/product")
  };
  componentDidMount() {
    this.getCategorys();
    setTimeout(() => {
      this.setState({
        loading: false,
      });
    }, 1000);
  }
  componentWillMount() {
    this.product = memoryUtils.product;
    this.isUpdate = !!this.product._id;
    if (!this.isUpdate) {
      this.product = {};
    }
  }
  render() {
    const { categorys } = this.state;
    const { isUpdate, product } = this;
    const title = (
      <span>
        <LinkButton
          onClick={() => {
            this.props.history.goBack();
          }}
        >
          <ArrowLeftOutlined />
        </LinkButton>
        <span>{isUpdate ? "修改商品" : "添加商品"}</span>
      </span>
    );
    return (
      <Card title={title}>
        <Form {...layout} onFinish={this.onFinish}>
          <Item
            label="商品名称:"
            name="name"
            initialValue={product.name}
            rules={[
              {
                required: true,
                message: "商品名称必须输入",
              },
            ]}
          >
            <Input placeholder="商品名称" />
          </Item>
          <Item
            label="商品描述:"
            name="desc"
            initialValue={product.desc}
            rules={[
              {
                required: true,
                message: "商品描述必须输入",
              },
            ]}
          >
            <Input placeholder="商品描述" />
          </Item>
          <Item
            label="商品价格:"
            name="price"
            initialValue={product.price}
            rules={[
              {
                required: true,
                message: "必须指定商品价格",
              },
              {
                validator: this.validatorPrice,
              },
            ]}
          >
            <Input placeholder="商品价格" type="number" addonAfter="元" />
          </Item>
          <Item
            label="商品分类:"
            name="categoryId"
            initialValue={product._id}
            rules={[
              {
                required: true,
                message: "商品分类必须输入",
              },
            ]}
          >
            <Select>
              <Option value="">未选择</Option>
              {categorys.map((c) => (
                <Option value={c._id} key={c._id}>
                  {c.name}
                </Option>
              ))}
            </Select>
          </Item>
          <Item label="商品图片:">
            <PicturesWall  imgs={product.imgs} ref="ptwRef"></PicturesWall>
          </Item>
          <Item label="商品详情:" wrapperCol={ {span: 20 }}>
            <RichTextEditor detail={product.detail}  ref="editRef"></RichTextEditor>
          </Item>
          <Item >
            <Button type="primary" htmlType="submit">
              提交
            </Button>
          </Item>
        </Form>
      </Card>
    );
  }
}

export default ProductAddUpdate;
