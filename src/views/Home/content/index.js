import React, { Component } from 'react';
import "./index.less"
import Title from "../title"
export default class Content extends Component{
    constructor(){
        super()
    }
    render (){
         return (
             <div>
                <Title></Title>
                <div></div>
             </div>
         )
    }
}