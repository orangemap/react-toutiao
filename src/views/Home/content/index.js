import React, { Component } from 'react';
import "./index.less"
import Title from "../title"
export default class Content extends Component {
    state = {
        twoImageList: [
            {
                title: "5月卖得最好的10款SUV",
                text: " 5月份的SUV细分市场，总体销量依然下滑，共卖出66.9万台，同比下降9.6%。但这都不是让人忧心的，让人忧心的是国内SUV市场的自主品牌光环渐渐暗淡，销量逐渐被合资品牌分薄，看看销量榜就知道。",
                imageUrl: "http://p1.pstatp.com/large/pgc-image/d559d390e69545b5bc58206648426abf",
                count: "20"
            },
            {
                title: "5月卖得最好的10款SUV",
                text: "5月份的SUV细分市场，总体销量依然下滑，共卖出66.9万台，同比下降9.6%。但这都不是让人忧心的，让人忧心的是国内SUV市场的自主品牌光环渐渐暗淡，销量逐渐被合资品牌分薄，看看销量榜就知道。",
                imageUrl: "http://p1.pstatp.com/large/pgc-image/d559d390e69545b5bc58206648426abf",
                count: "120"
            },
            {
                title: "5月卖得最好的10款SUV",
                text: "5月份的SUV细分市场，总体销量依然下滑，共卖出66.9万台，同比下降9.6%。但这都不是让人忧心的，让人忧心的是国内SUV市场的自主品牌光环渐渐暗淡，销量逐渐被合资品牌分薄，看看销量榜就知道。",
                imageUrl: "http://p1.pstatp.com/large/pgc-image/d559d390e69545b5bc58206648426abf",
                count: "120"
            }
        ],
        oneImageList: [
            {
                title: "张艺谋看中一夜成名，如今模样大变",
                text: " 张艺谋挖掘不过不少女星，大家都统称她们为“谋女郎”，被张艺谋选中的女星，她们身上都有一种与众不同的气质美，而且成为谋女郎之后，演艺事业都会发展的顺风顺水，知名度大增，甚至很大可能会一夜爆红。",
                imageUrl: "http://p1.pstatp.com/large/pgc-image/4f68c4516a674608b60283825080363b",
                count: "20"
            },
            {
                title: "张艺谋看中一夜成名，如今模样大变",
                text: "张艺谋挖掘不过不少女星，大家都统称她们为“谋女郎”，被张艺谋选中的女星，她们身上都有一种与众不同的气质美，而且成为谋女郎之后，演艺事业都会发展的顺风顺水，知名度大增，甚至很大可能会一夜爆红。",
                imageUrl: "http://p1.pstatp.com/large/pgc-image/4f68c4516a674608b60283825080363b",
                count: "120"
            },
            {
                title: "张艺谋看中一夜成名，如今模样大变",
                text: "张艺谋挖掘不过不少女星，大家都统称她们为“谋女郎”，被张艺谋选中的女星，她们身上都有一种与众不同的气质美，而且成为谋女郎之后，演艺事业都会发展的顺风顺水，知名度大增，甚至很大可能会一夜爆红。",
                imageUrl: "http://p1.pstatp.com/large/pgc-image/4f68c4516a674608b60283825080363b",
                count: "120"
            }
        ],
        threeImageList: [
            {
                title: "NBA有哪些长相老气的球员？",
                text: " 所谓“长相老气”，应该是指“实际年龄”和“目测年龄”差距比较大。那么以下几位应该都颇有竞争力：",
                imageUrl: "http://p3.pstatp.com/large/1a08f00035edb953f6b41",
                count: "20"
            },
            {
                title: "NBA有哪些长相老气的球员？",
                text: "所谓“长相老气”，应该是指“实际年龄”和“目测年龄”差距比较大。那么以下几位应该都颇有竞争力：",
                imageUrl: "http://p3.pstatp.com/large/1a08f00035edb953f6b41",
                count: "120"
            },
            {
                title: "NBA有哪些长相老气的球员？",
                text: "所谓“长相老气”，应该是指“实际年龄”和“目测年龄”差距比较大。那么以下几位应该都颇有竞争力：",
                imageUrl: "http://p3.pstatp.com/large/1a08f00035edb953f6b41",
                count: "120"
            }
        ]
    }
    render() {
        const { twoImageList } = this.state
        const { oneImageList } = this.state
        const { threeImageList } = this.state
        return (
            <div>
                <Title></Title>
                <div className="home-box">
                    <div className="swiper-content">
                        <section className="swiper-box">
                            <ul className="content-list">
                                {
                                    twoImageList.map((item, index) => {
                                        return (
                                            <li key={index} className="list-item border-half-bottom">
                                                <div>
                                                    <div className="item-title">
                                                        <h4>{item.title}</h4>
                                                        <p className="item-text">
                                                            {item.text}
                                                        </p>
                                                    </div>
                                                    <div className="item-content">
                                                        <img src={item.imageUrl} alt={item.imageUrl} />
                                                        <img src={item.imageUrl} alt={item.imageUrl} />
                                                    </div>
                                                    <div className="dibu-footer">
                                                        <div className="small-box">
                                                            <span>央视网新闻</span>
                                                            <span>评论：{item.count}</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                        )
                                    })
                                }
                                {
                                    oneImageList.map((item, index) => {
                                        return (
                                            <li key={index} className="list-item border-half-bottom">
                                                <div className="flex">
                                                    <div className="item-left">
                                                        <div className="item-title">
                                                            <h4>{item.title}</h4>
                                                            <p className="item-text">
                                                                {item.text}
                                                            </p>
                                                        </div>
                                                        <div className="dibu-footer">
                                                            <div className="small-box">
                                                                <span>央视网新闻</span>
                                                                <span>评论：{item.count}</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="item-right">
                                                        <img src={item.imageUrl} alt={item.imageUrl} />
                                                    </div>
                                                </div>
                                            </li>
                                        )
                                    })
                                }
                                {
                                    threeImageList.map((item, index) => {
                                        return (
                                            <li key={index} className="list-item border-half-bottom">
                                                    <div >
                                                        <div className="item-title">
                                                            <h4>{item.title}</h4>
                                                            <p className="item-text">
                                                                {item.text}
                                                            </p>
                                                        </div>
                                                        <div className="item-right-content">
                                                            <img src={item.imageUrl} alt={item.imageUrl} />
                                                            <img src={item.imageUrl} alt={item.imageUrl} />
                                                            <img src={item.imageUrl} alt={item.imageUrl} />
                                                        </div>
                                                        <div className="dibu-footer">
                                                            <div className="small-box">
                                                                <span>央视网新闻</span>
                                                                <span>评论：{item.count}</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                            </li>
                                        )
                                    })
                                }
                            </ul>
                        </section>
                    </div>
                </div>
            </div>
        )
    }
}