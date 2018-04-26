import React from 'react';
import { Row, Col, Icon } from 'antd';

import FlipCountdown from '../../components/flipcountdown';

import './style/index.less';

import RawVideoBackground from './image/video.png';
import intl from 'react-intl-universal';

class Section extends React.Component {
    render() {
        const clsName = this.props.className + '-section5';
        return (
            <div className={clsName}>
                <div className='container'>
                    <div className='content'>
                        <Row gutter={16}>
                            <Col span={24} >
                                <p className={`${clsName}-title`}>{intl.get('ADVISORY_BOARD')}</p>
                            </Col>
                            <Col span={24} >
                                <Row gutter={24} >
                                    <Col xs={24} sm={12} md={12}>
                                        <img className='img-responsive' src={RawVideoBackground} alt=""/>
                                    </Col>
                                    <Col xs={24} sm={12} md={12}>
                                        <div className={`${clsName}-middle`}>
                                            <p className={`${clsName}-name`}>{intl.get('THOMASJ.SARGENT')} </p>
                                            {/* <p style={{
                                                fontSize: '16px'
                                            }}>THOMAS J. SARGENT</p> */}
                                            <div className={`${clsName}-infowrap`}></div>
                                            <p className={`${clsName}-info`}>{intl.get('THOMASJ.SARGENT_CON1')}<br />    
                                            {intl.get('THOMASJ.SARGENT_CON2')}</p>
                                        </div>
                                    </Col>
                                    <Col xs={24} sm={24} md={24}>
                                        <div style={{
                                            width: '100%',

                                            margin: '20px 0',

                                            padding: '20px 0',

                                            // backgroundColor: 'rgba(8, 24, 37, 0.8)',
                                            backgroundColor: 'rgba(255, 255, 255, 0.05)',
                                            borderRadius: '5px'
                                        }} className={`${clsName}-countdown`}>
                                            <div style={{
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center'
                                            }} className={`${clsName}-countdown-desc`}>
                                                <Icon type="clock-circle-o" style={{
                                                    fontSize: '32px',
                                                    color: 'rgba(255, 255, 255, 0.6)',
                                                }}/>
                                                <p style={{
                                                    fontSize: '26px',
                                                    paddingRight: '60px',
                                                    paddingLeft: '20px',
                                                    color: 'rgba(255, 255, 255, 0.6)'
                                                }}>{intl.get('NEXT_BOARD')}</p>
                                            </div>
                                            <FlipCountdown countdown={ new Date(2018, 6, 24) } />
                                        </div>
                                    </Col>
                                </Row>
                            </Col>
                            
                        </Row>
                    </div>
                </div>
            </div>
        );
    }
}

Section.defaultProps = {
    className: 'home',
}

export default Section;