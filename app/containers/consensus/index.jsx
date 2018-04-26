import React from 'react';
import { Tabs } from 'antd';

import Header from '../../components/header';
import Footer from '../../components/footer';
import TabPane1 from '../../components/consensus-tabpane1';
import TabPane2 from '../../components/consensus-tabpane2';

import './style/index.less';
import intl from 'react-intl-universal';

class Consensus extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            activeTabKeyIndex: this._parsePropTabKey(this.props.params), 
        }
    }

    componentWillMount() {
        window.scrollTo(0, 0);
    }

    _parsePropTabKey(params) {
        let tabKey = Number(params.tabKey).valueOf();
        if (!Number.isInteger(tabKey)) {
            tabKey = 0;
        }
        if (tabKey < 0 || tabKey > 1) {
            tabKey = 0;
        }
        return String(tabKey).valueOf();
    }

    componentWillReceiveProps() {
        if (this.props.location.action == 'PUSH' || this.props.location.action == 'REPLACE') {
            let selectTabKey = this._parsePropTabKey(this.props.params);
            if (selectTabKey != this.state.activeTabKeyIndex) {
                this.setState({
                    activeTabKeyIndex: selectTabKey
                })
            }
        }
    }

    getBanner() {
        switch (this.state.activeTabKeyIndex) {
            case '0': {
                return (
                    <div className={`${this.props.className}-banner ${this.props.className}-banner-style1`}>
                        <p className={`${this.props.className}-banner-title`}>{intl.get('KANTOROVICH_CONSENSUS')}</p>
                        <p className={`${this.props.className}-banner-desc`}
                            style={{
                                maxWidth: '400px'
                            }}><br />{intl.get('KANTOROVICH_CONSENSUS_CON')}</p>
                    </div>
                )
                break;
            }

            case '1': {
                return (
                    <div className={`${this.props.className}-banner ${this.props.className}-banner-style2`}>
                        <p className={`${this.props.className}-banner-title`}>主要概念</p>
                        <p className={`${this.props.className}-banner-desc`}
                            style={{
                                maxWidth: '350px'
                            }}><br />革命性和创新性的权益证明算法实现所有参与者的纳什均衡和价值传递</p>
                    </div>
                )
                break;
            }
        }
        
        return (
            <div className={`${this.props.className}-banner ${this.props.className}-banner-style1`}></div>
        )
    }

    render() {
        return (
            <div className={this.props.className}>
                <Header history={this.props.history} />
                { /*this.getBanner() */}
                <div className={`${this.props.className}-banner ${this.props.className}-banner-style1`}>
                    <p className={`${this.props.className}-banner-title`}>{intl.get('KANTOROVICH_CONSENSUS')}</p>
                    <p className={`${this.props.className}-banner-desc`}
                        style={{
                            maxWidth: '400px'
                        }}><br />{intl.get('KANTOROVICH_CONSENSUS_CON')}</p>
                </div>
                <div className={`${this.props.className}-main`}>
                    <Tabs 
                        type='card' 
                        size='large'
                        activeKey={this.state.activeTabKeyIndex} 
                        animated={false}
                        onChange={(activeKey)=> {
                            this.setState({
                                activeTabKeyIndex: activeKey
                            })
                        }}>
                        <Tabs.TabPane tab={intl.get('KANTOROVICH_CONSENSUS')} key='0'>
                            <TabPane1 />
                        </Tabs.TabPane>
                        <Tabs.TabPane tab={intl.get('CONCEPTUAL')} key='1'>
                            <TabPane2 />
                        </Tabs.TabPane>
                    </Tabs>
                </div>
                <Footer />
            </div>
        )
    }
    getvalue() {
        return 'Kantorovich共识000'
    }
}

Consensus.defaultProps = {
    className: 'consensus'
}

export default Consensus;