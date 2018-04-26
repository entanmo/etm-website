import React from 'react';
import { Row, Col, Popover, Carousel } from 'antd';

import './style/index.less';

import RawLines from './image/lines.png';
import RawStage1 from './image/stage1.png';
import RawStage2 from './image/stage2.png';
import RawStage3 from './image/stage3.png';
import RawStage4 from './image/stage4.png';
import intl from 'react-intl-universal';

class Section extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            currentSelectedIndex: 1,
        }
    }

    render() {
        const clsName = this.props.className + '-section6';
        return (
            <div className={clsName}>
                <div className='container'>
                    <div className='content'>
                        <div className={`${clsName}-top`}>
                            <p className={`${clsName}-title`}>{intl.get('GLOBAL_PLAN')}</p>
                            <p className={`${clsName}-desc`}>{intl.get('GLOBAL_PLAN_CON')}</p>
                        </div>
                        <div className={`${clsName}-main`}>
                            <div className={`${clsName}-world-lg`}>
                                <Row gutter={6}>
                                    <Col span={6}>
                                            <div className={`${clsName}-stage-lg`}>
                                                <img src={RawStage1} alt="" 
                                                    onMouseEnter={() => { this.onMouseEnter(1); }}
                                                    onMouseLeave={() => { this.onMouseLeave(1); }} />
                                                <p className={`${clsName}-text-22`}>{intl.get('PETRARCH')}</p>
                                                <p className={`${clsName}-text-16`}>2018.05</p>
                                                <img className={`${clsName}-lines`} src={RawLines} alt=""/>
                                            </div>
                                    </Col>
                                    <Col span={6}>
                                            <div className={`${clsName}-stage-lg`}>
                                                <img src={RawStage2} alt="" 
                                                    onMouseEnter={() => { this.onMouseEnter(2); }}
                                                    onMouseLeave={() => { this.onMouseLeave(2); }} />
                                                <p className={`${clsName}-text-22`}>{intl.get('MASACCIO')}</p>
                                                <p className={`${clsName}-text-16`}>2018.09</p>
                                                <img className={`${clsName}-lines`} src={RawLines} alt=""/>
                                            </div>
                                    </Col>
                                    <Col span={6}>
                                            <div className={`${clsName}-stage-lg`}>
                                                <img src={RawStage3} alt="" 
                                                    onMouseEnter={() => { this.onMouseEnter(3); }}
                                                    onMouseLeave={() => { this.onMouseLeave(3); }} />
                                                <p className={`${clsName}-text-22`}>{intl.get('DA_VINCI')}</p>
                                                <p className={`${clsName}-text-16`}>2018.12</p>
                                                <img className={`${clsName}-lines`} src={RawLines} alt=""/>
                                            </div>
                                    </Col>
                                    <Col span={6}>
                                            <div className={`${clsName}-stage-lg`}>
                                                <img src={RawStage4} alt="" 
                                                    onMouseEnter={() => { this.onMouseEnter(4); }}
                                                    onMouseLeave={() => { this.onMouseLeave(4); }} />
                                                <p className={`${clsName}-text-22`}>{intl.get('GIORGIONE')}</p>
                                                <p className={`${clsName}-text-16`}>2019.12</p>
                                            </div>
                                    </Col>
                                </Row>
                                <div className={`${clsName}-infoshow-wrap`}>
                                    <Row gutter={6}>
                                        <Col span={6}>
                                            <div className={`${clsName}-arrowup-wrap`}>
                                                { 
                                                    this.state.currentSelectedIndex == 1 ? 
                                                    <div className={`${clsName}-arrowup`}></div> :
                                                    <div></div>
                                                }
                                            </div>
                                        </Col>
                                        <Col span={6}>
                                            <div className={`${clsName}-arrowup-wrap`}>
                                                { 
                                                    this.state.currentSelectedIndex == 2 ? 
                                                    <div className={`${clsName}-arrowup`}></div> :
                                                    <div></div>
                                                }
                                            </div>
                                        </Col>
                                        <Col span={6}>
                                            <div className={`${clsName}-arrowup-wrap`}>
                                                { 
                                                    this.state.currentSelectedIndex == 3 ? 
                                                    <div className={`${clsName}-arrowup`}></div> :
                                                    <div></div>
                                                }
                                            </div>
                                        </Col>
                                        <Col span={6}>
                                            <div className={`${clsName}-arrowup-wrap`}>
                                                { 
                                                    this.state.currentSelectedIndex == 4 ? 
                                                    <div className={`${clsName}-arrowup`}></div> :
                                                    <div></div>
                                                }
                                            </div>
                                        </Col>
                                    </Row>
                                    <Row gutter={6}>
                                        <Col span={1}>
                                        </Col>
                                        <Col span={22}>
                                            <div className={`${clsName}-info`}>
                                                {/* <p>{Section.DETAIL_INFOS[this.state.currentSelectedIndex - 1]}</p> */}
                                                <p>{ this.getSection(this.state.currentSelectedIndex - 1) }</p>
                                            </div>
                                        </Col>
                                    </Row>
                                </div>
                            </div>
                            <div className={`${clsName}-world-xs`}>
                                <Carousel mode='horizontal'>
                                    <div>
                                        <div className={`${clsName}-stage-xs`}>
                                            <img src={RawStage1} alt=""/>
                                            <p className={`${clsName}-text-22`}>{intl.get('PETRARCH')}</p>
                                            <p className={`${clsName}-text-16`}>2018.05</p>
                                            <p className={`${clsName}-text-14`} style={{
                                                maxWidth: '400px'
                                            }}>{intl.get('PETRARCH_CON')}</p>
                                        </div>
                                    </div>
                                    <div>
                                        <div className={`${clsName}-stage-xs`}>
                                            <img className='img-responsive'  src={RawStage2} alt=""/>
                                            <p className={`${clsName}-text-22`}>{intl.get('MASACCIO')}</p>
                                            <p className={`${clsName}-text-16`}>2018.09</p>
                                            <p className={`${clsName}-text-14`} style={{
                                                maxWidth: '400px'
                                            }}>{intl.get('MASACCIO_CON')}</p>
                                        </div>
                                    </div>
                                    <div>
                                        <div className={`${clsName}-stage-xs`}>
                                            <img src={RawStage3} alt=""/>
                                            <p className={`${clsName}-text-22`}>{intl.get('DA_VINCI')}</p>
                                            <p className={`${clsName}-text-16`}>2018.12</p>
                                            <p className={`${clsName}-text-14`} style={{
                                                maxWidth: '400px'
                                            }}>{intl.get('DA_VINCI_CON')}</p>
                                        </div>

                                    </div>
                                    <div>
                                        <div className={`${clsName}-stage-xs`}>
                                            <img src={RawStage4} alt=""/>
                                            <p className={`${clsName}-text-22`}>{intl.get('GIORGIONE')}</p>
                                            <p className={`${clsName}-text-16`}>2019.12</p>
                                            <p className={`${clsName}-text-14`} style={{
                                                maxWidth: '400px'
                                            }}>{intl.get('GIORGIONE_CON')}</p>
                                        </div>
                                    </div>
                                </Carousel>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    onMouseEnter(index) {
        this.setState({
            currentSelectedIndex: index,
        })
    }

    onMouseLeave(index) {
        /*
        this.setState({
            currentSelectedIndex: 1
        })
        */
    }

    getSection(index){
        if(index==0){
            return intl.get('PETRARCH_CON')
        }
        if(index==1){
            return intl.get('MASACCIO_CON')
        }
        if(index==2){
            return intl.get('DA_VINCI_CON')
        }
        if(index==3){
            return intl.get('GIORGIONE_CON')
        }
        return intl.get('PETRARCH_CON')
    }
}

Section.defaultProps = {
    className: 'home',
}

Section.DETAIL_INFOS = [
    `实现完全由网络基础协议和严格的加密技术保护和支持的、全新的、均衡的、高效的、去中心化的En-Tan-Mo区块链，
    形成了一套全新的货币规则和体系，同时开放技术社区和开发者大厅，培育和形成En-Tan-Mo的文化。`,
    `开发零知识证明技术以更好的保护用户隐私，结合闪电网络及石墨烯技术以提升交易速度、降低区块链的负担，提高可扩展性。
    通过智能合约、平行链交互协议和链配适器形成En-Tan-Mo的生态系统，各类资产在中心链和衍生链上进行数字登记,得到资产安全和数据完整性保证。`,
    `共识机制完全实现动态纳什均衡：算力单元会进入到一个混币计算联盟，是一种具有长期最佳收益的算力承载组件；所有的节点根据供需关系，自由平等的选择交易，获得均衡的受益。
    En-Tan-Mo成为一个能够承载高频次、高流量的大型数字权证交易所、联盟矿池、DAPP应用平台，混沌排序机制还天然形成一个博弈场。
    En-Tan-Mo还是一个最好的开发者社区、区块链应用组件承载平台。`,
    `在这一时期中，En-Tan-Mo将进一步超越经济领域，迎来区块链3.0时代的辉煌和盛况。En-Tan-Mo可用于实现全球范围内日趋自动化的物理资源和人力资产的分配，
    促进科学、健康、教育等领域的大规模协作，主要在自动化采购，智能化物联网应用，供应链自动化管理，虚拟资产兑换、转移，产权登记等场景中都将得以实现。`,
]

export default Section;