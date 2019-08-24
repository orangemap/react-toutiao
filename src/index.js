import React from 'react';
import ReactDOM from 'react-dom';
// import 'nprogress/nprogress.css'
import './styles/index.css';
import './styles/index.less';
// import './utils/iconfont'   
// import DevTools from './devTools'
// import { Provider } from 'react-redux'
// import Router from './router'
// import store from './store'
import App from './App';    
import * as serviceWorker from './serviceWorker';
import initReactFastclick from 'react-fastclick'
initReactFastclick() // 解决IOS onClick不生效
ReactDOM.render(
    <App/>,
    document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
