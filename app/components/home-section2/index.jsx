import React from 'react';
import ReactDOM from 'react-dom';
import { Button } from 'antd';

import WebGLBoom from '../webgl-boom';

import './style/index.less';
import intl from 'react-intl-universal';

class Section extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            webglProps: {
                width: '100%', 
                height: '600px', 
                top: '260px'
            }
        }
    }

    componentDidMount() {
        const clsName = this.props.className + '-section2';
        const container = ReactDOM.findDOMNode(this.refs[clsName]);

        var flushWebGLProps = () => {
            var width = container.clientWidth;
            var height = container.clientHeight;
            this.setState({
                webglProps: {
                    width: width,
                    height: height,
                    top: '0px',
                }
            });
        }

        window.addEventListener('resize', () => {
            flushWebGLProps();
        });
        flushWebGLProps();
    }

    render() {
        const clsName = this.props.className + '-section2';
        return (
            <div ref={clsName} className={clsName}>
                {<WebGLBoom { ...this.state.webglProps }/>}
                <div className='container'>
                    <div className='content flex-vertical flex-center'>
                    {/*
                        <p className={`${clsName}-title`}>ETM共识机制</p>
                        <p className={`${clsName}-desc`}>Kantorovich</p>
                    */}
                        <p className={`${clsName}-title`}>Kantorovich {intl.get('ETM_CONSENSUS')}</p>
                        <Button size='large' onClick={() => { this.gotoKantorovich() }}>{intl.get('GET_CONSENSUS')}</Button>
                    </div>
                </div>
            </div>
        )
    }

    gotoKantorovich() {
        this.props.history.pushState(null, 'consensus/0');
    }
}

Section.defaultProps = {
    className: 'home'
}

export default Section;