import React from 'react';
import HeaderBar from './components/HeaderBar'
const mainStyles = {
    width: '100%',
    height: 'calc(100% - 1rem)'
}
function App() {
    return (
        <div className="App">
            <HeaderBar></HeaderBar>
            <main style={mainStyles}>
                {/* {this.props.children} */}
            </main>
        </div>
    );
}
export default App;