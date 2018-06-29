import React from 'react';
import { Row, Col, Icon ,Tabs} from 'antd';

import FlipCountdown from '../../components/flipcountdown';

import './style/index.less';

import RawVideoBackground from './image/video.png';
import intl from 'react-intl-universal';

const TabPane = Tabs.TabPane;

class Section extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            tabId: 1
        }
    }
    
    onClickTab(key) {
        // console.log(key);
        this.setState({ tabId: key });
    }

    render() {
        const clsName = this.props.className + '-section5';
        var videopath = '../../video/' + this.state.tabId + '.mp4';
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
                                        {/* <img className='img-responsive' src={RawVideoBackground} alt=""/> */}
                                        <video className='video-box' src={videopath} controls="controls"></video>
                                    </Col>
                                    
                                    <Col xs={24} sm={12} md={12}>
                                        <Tabs defaultActiveKey="1" onChange={this.onClickTab.bind(this)}>
                                            <TabPane className={`${clsName}-name`} tab={intl.get('THOMAS')} key="1">
                                            <div className={`${clsName}-middle`}>
                                                <p className={`${clsName}-info`}>
                                                {intl.get('THOMAS_CON1')}<br />
                                                {intl.get('THOMAS_CON2')}<br />
                                                {intl.get('THOMAS_CON3')}<br />    
                                                {intl.get('THOMAS_CON4')}</p>
                                            </div>
                                            </TabPane>
                                            <TabPane className={`${clsName}-name`} tab={intl.get('SHELDON')} key="2">
                                            <div className={`${clsName}-middle`}>
                                                <p className={`${clsName}-info`}>
                                                {intl.get('SHELDON_CON1')}<br />
                                                {intl.get('SHELDON_CON2')}<br />    
                                                {intl.get('SHELDON_CON3')}</p>
                                            </div>
                                            </TabPane>
                                        </Tabs>
                                    </Col>
                                    {/* <Col xs={24} sm={24} md={24}>
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
                                                    fontSize: '22px',
                                                    paddingRight: '60px',
                                                    paddingLeft: '20px',
                                                    color: 'rgba(255, 255, 255, 0.6)'
                                                }}>{intl.get('NEXT_BOARD')}</p>
                                            </div>
                                            <FlipCountdown countdown={ new Date(2018, 5, 24) } />
                                        </div>
                                    </Col> */}
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