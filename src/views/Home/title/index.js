import React, { Component } from 'react';
import Swiper from "react-id-swiper"
import "./index.less"
export default class Title extends Component {
    state = {
        swiper: {},
        NewsIndex: 0,
        TitleList: [
            {
                title: "推荐",
                check: true
            },
            {
                title: "视频",
                check: false
            },
            {
                title: "热点",
                check: false
            },
            {
                title: "社会",
                check: false
            },
            {
                title: "娱乐",
                check: false
            },
            {
                title: "军事",
                check: false
            },
            {
                title: "科技",
                check: false
            },
            {
                title: "汽车",
                check: false
            },
            {
                title: "体育",
                check: false
            },
            {
                title: "财经",
                check: false
            },
            {
                title: "国际",
                check: false
            },
            {
                title: "时尚",
                check: false
            },
            {
                title: "社会",
                check: false
            }
        ]

    }
    componentDidMount() {
        const swiper = this.refs["top-bar-swiper"].swiper
        this.setState({
            swiper: swiper
        })
        const index = this.state.NewsIndex
        swiper.slideTo((index - 2 >= 0 ? index - 2 : 0), 500, false)
    }
    setNewsIndex(index) {
        this.setState({
            NewsIndex: index
        })
    }
    actived(index) {
        this.setNewsIndex(index)
        this.state.swiper.slideTo((index - 2 >= 0 ? index - 2 : 0), 500, false)
    }
    render() {
        const { TitleList } = this.state
        return (
            <div className="home-topbar-wrapper border-half-bottom">
                <div className="top-menu-bar">
                    <Swiper slidesPerView={6} ref='top-bar-swiper'>
                        {
                            TitleList.map((item, index) => (
                                <div key={index} onClick={() => { this.actived(index) }}
                                    className={index === this.state.NewsIndex ? "active" : ""}>
                                    {item.title}
                                </div>
                            ))
                        }
                    </Swiper>
                </div>
                <button className="top-menu-more-btn df-c" ><i className="list-shadow"></i><span className="cross"></span></button>
            </div>
        )
    }
}