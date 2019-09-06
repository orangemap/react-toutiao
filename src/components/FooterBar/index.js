import React from 'react';
import Icon from '../Icon-svg';
import "./index.css"

export default class extends React.Component {
    constructor() {
        super();
        this.state = {
            footerList: [
                { title: '首页', icon: 'home', path: '/', check: true },
                { title: '西瓜视频', icon: 'video', path: '/video', check: false },
                { title: '微头条', icon: 'comment', path: '/headline', check: false },
                { title: '未登录', icon: 'account', path: '/account', check: false }
            ],
        };
    }
    handleClick(index) {
        console.log(index)
        let arr = this.state.footerList
        arr.forEach((item, key) => {
            item.check = false
            if (index === key) {
                item.check = true
            }
        })
        console.log('color:green;', arr)
        this.setState({
            footerList: arr
        })
    }
    render() {
        return (
            <footer className="footer-wraaper">
                <ul className="footer-wraaper-content">
                    {
                        this.state.footerList.map((item, index) => {
                            return (
                                <li key={index} className={item.check === true ? "active" : ""} onClick={() => { this.handleClick(index) }}>
                                    <Icon iconName={item.icon}></Icon>
                                    <div>
                                        {item.title}
                                    </div>
                                </li>
                            )
                        })
                    }
                </ul>
            </footer>
        )
    }
}
