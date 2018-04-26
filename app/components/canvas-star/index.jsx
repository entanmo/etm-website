import React from 'react';

import './style/index.less';

class CanvasStar extends React.Component {
    render() {
        return (
            <div style={{
                width: this.props.width,
                height: this.props.height,
            }} className='canvas-star'>
                <div id='stars'></div>
                <div id='stars2'></div>
                <div id='stars3'></div>
            </div>
        )
    }
}

CanvasStar.defaultProps = {
    width: '100%',
    height: '100%',
}

export default CanvasStar;