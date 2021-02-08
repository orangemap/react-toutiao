import React, { Component } from 'react';
import {Redirect} from "react-router-dom";

class admin extends Component {
    render() {
        const   user = localStorage.getItem("user")
        if(!user){
           return <Redirect to="/login"/>
        }
        return (
            <div>
                hello,{user}
            </div>
        );
    }
}

export default admin;