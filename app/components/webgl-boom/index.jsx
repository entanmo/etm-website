import React from 'react';
import ReactDOM from 'react-dom';

// import loadScene from './index.js';
import WebGLUtils from './webgl_utils';

class WebGLBoom extends React.Component {
    componentDidMount() {
        let container = ReactDOM.findDOMNode(this.refs.boomContainer);
        let canvas = ReactDOM.findDOMNode(this.refs.boomCanvas);

        this.webGLUtils = new WebGLUtils(container, canvas);
    }

    componentWillReceiveProps(props) {
        this.webGLUtils.flushWebGLViewPortProps(props.width, props.height);
    }

    render() {
        return (
            <div ref='boomContainer' style={{
                width: this.props.width,
                height: this.props.height,
                top: this.props.top,
                position: 'absolute',
                zIndex: '-1',
            }}>
                <canvas ref='boomCanvas'></canvas>
                <div style={{
                    width: '100%',
                    height: '100%',
                    backgroundColor: 'rgba(0, 0, 0, 0.2)',
                    position: 'absolute',
                    top: '0'
                }}></div>
            </div>
        )
    }
}

WebGLBoom.defaultProps = {
    width: '100%',
    height: '600px',
    top: '260px',
}

export default WebGLBoom;