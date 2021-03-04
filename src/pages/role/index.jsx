import React, { Component } from "react";
import { Card, Select, Input, Table, Button, message } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import rules from "../../api/rule";
import LinkButton from "../../components/link-button";
import { formateDate } from "../../utils/dateUtils"

// import throttle from "lodash.throttle";
const Option = Select.Option;
class index extends Component {
    state = {
        rules: [],
        loading: false,
        isShowAdd: false,
        isShowAuth: false,
        current: 1,
        total: 0,
    };
    //初始化表格
    initColums = () => {
        this.columns = [
            { title: "角色名称", dataIndex: "name" },
            {
                title: "创建时间", dataIndex: "create_time", render: formateDate


            },
            { title: "授权人", dataIndex: "auth_name" },
            {
                title: "授权时间", dataIndex: "auth_time",
                render: formateDate
            },
            {
                title: "操作",
                render: (role) => (
                    <LinkButton
                        onClick={() => {
                            // this.props.history.push("/product/detail");
                        }}
                    >
                        设置权限
                    </LinkButton>
                ),
            },
        ];
    };
    getrules = (pageNum) => {
        setTimeout(() => {
            this.setState({
                loading: false,
                current: 1,
                rules: rules
            });
        }, 1000);
    };
    onChangePage = (page, pageSize) => {
        this.setState({
            current: page.current,
        });
    };
    componentDidMount() {
        this.getrules();
    }
    componentWillMount() {
        this.initColums();
    }
    render() {
        const title = (
            <span>
                <Button
                    type="primary"
                    onClick={() => {
                        this.getrules(1);
                    }}
                >
                    创建角色
        </Button>
            </span>
        );
        return (
            <Card title={title} >
                <Table
                    bordered
                    rowKey="_id"
                    loading={this.state.loading}
                    columns={this.columns}
                    dataSource={this.state.rules}
                    onChange={this.onChangePage}
                    pagination={{
                        defaultPageSize: 3,
                        current: this.state.current,
                        showQuickJumper: true,
                    }}
                />
            </Card>
        );
    }
}

export default index;
