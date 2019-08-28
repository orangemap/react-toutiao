import React from 'react';
import HeaderBar from './components/HeaderBar'
import FooterBar from "./components/FooterBar"
import Home from "./views/Home/title"
import './utils/iconfont'
const mainStyles = {
    width: '100%',
    height: 'calc(100% - 100px)'
}
function App() {
    return (
        <div className="App">
            <HeaderBar></HeaderBar>
            <main style={mainStyles}>
                <Home></Home>
                {/* {this.props.children} */}
            </main>
            <FooterBar></FooterBar>
        </div>
    );
}
export default App;