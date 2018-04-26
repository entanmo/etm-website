import React from 'react';
import { Row, Col } from 'antd';

import './style/index.less';

import RawBlock1 from './image/block1.png';
import RawBlock2 from './image/block2.png';
import RawBlock3 from './image/block3.png';
import RawBlock4 from './image/block4.png';
import RawBlock5 from './image/block5.png';
import intl from 'react-intl-universal';

class Block extends React.Component {
    render() {
        const clsName = this.props.className + '-block';
        return (
            <div className={clsName}>
                <div className={`${clsName}-wrap`}>
                    <Row gutter={16}>
                        <Col span={24}>
                            <img className='img-responsive' src={this.props.logo} alt=""/>
                        </Col>
                        <Col span={24}>
                            <p className={`${clsName}-title`}>{this.props.title}</p>
                            <p className={`${clsName}-desc`}>{this.props.desc}</p>
                        </Col>
                    </Row>
                </div>
            </div>
        )
    }
}

Block.defaultProps = {
    className: 'home-section3',
}


class Section extends React.Component {
    render() {
        const clsName = this.props.className + '-section3';
        return (
            <div className={clsName}>
                <div className='container'>
                    <div className='content'>
                        <Row gutter={24}>
                            <Col span={24}>
                                <div className={`${clsName}-align-center`}>
                                    <p className={`${clsName}-title`}>{intl.get('ETM_ECOSYSTEMS')}</p>
                                    <p className={`${clsName}-desc`}>{intl.get('ETM_ECOSYSTEMS_CON')}</p>
                                </div>
                            </Col>
                            <Col span={24}>
                                <Row gutter={32} type='flex' justify='start'>
                                    <Col xs={24} sm={12} md={4}>
                                        <Block 
                                            logo={RawBlock1}
                                            title={intl.get('CHAIN_ADAPTOR')}
                                            desc={intl.get('CHAIN_ADAPTOR_CON')}/>
                                    </Col>
                                    <Col xs={24} sm={12} md={5}>
                                        <Block 
                                            logo={RawBlock2}
                                            title={intl.get('SAMRT_CONTRACT')}
                                            desc={intl.get('SAMRT_CONTRACT_CON')}/>
                                    </Col>
                                    <Col xs={24} sm={12} md={5}>
                                        <Block 
                                            logo={RawBlock3}
                                            title={intl.get('CENTRA-DERIVED_CHAINS')}
                                            desc={intl.get('CENTRA-DERIVED_CHAINS_CON')}/>
                                    </Col>
                                    <Col xs={24} sm={12} md={5}>
                                        <Block 
                                            logo={RawBlock4}
                                            title={intl.get('PARALLEL_CHAIN')}
                                            desc={intl.get('PARALLEL_CHAIN_CON')}/>
                                    </Col>
                                    <Col xs={24} sm={12} md={4}>
                                        <Block 
                                            logo={RawBlock5}
                                            title={intl.get('MILL_MALL')}
                                            desc={intl.get('MILL_MALL_CON')}/>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                    </div>
                </div>
            </div>
        )
    }
}

Section.defaultProps = {
    className: 'home'
}

export default Section;