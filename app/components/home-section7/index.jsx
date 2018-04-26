import React from 'react';
import ReactDOM from 'react-dom';
import { Row, Col, Button } from 'antd';

import CanvasSphere from '../canvas-sphere';

import './style/index.less';
import intl from 'react-intl-universal';

class Section extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            renderSize: { width: '100%', height: '100%' }
        };
    }

    componentDidMount() {
        var flushRenderSize = () => {
            const clsName = this.props.className + '-section7';
            var container = ReactDOM.findDOMNode(this.refs[clsName]);
            this.setState({
                renderSize: {
                    width: container.clientWidth,
                    height: container.clientHeight,
                }
            });
        };

        window.addEventListener('resize', () => {
            flushRenderSize();
        });
        flushRenderSize();
    }

    render() {
        const clsName = this.props.className + '-section7';
        return (
            <div ref={clsName} className={clsName}>
                <CanvasSphere {...this.state.renderSize} />
                <div className='container'>
                    <div className='content'>
                        <Row gutter={16} type='flex' justify='center'>
                            <Col span={24}>
                                <div className={`${clsName}-center`}>
                                    <p className={`${clsName}-title`}>{intl.get('MOORE_ECONOMICS')}</p>
                                </div>
                            </Col>
                            <Col span={24}>
                                <div className={`${clsName}-center`}>
                                    <p className={`${clsName}-desc`}>{intl.get('MOORE_ECONOMICS_CON')}</p>
                                </div>
                            </Col>
                            <Col span={24}>
                                <div className={`${clsName}-center ${clsName}-btn`}>
                                    <Button size='large' onClick={this.gotoMoore.bind(this)}>{intl.get('JOIN_ECONOMY')}</Button>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </div>
            </div>
        )
    }

    gotoMoore() {
        this.props.history.pushState(null, 'moore');
    }
}

Section.defaultProps = {
    className: 'home',
}

export default Section;