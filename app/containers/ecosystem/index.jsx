import React from 'react';
import { Tabs } from 'antd';

import Header from '../../components/header';
import Footer from '../../components/footer';
import TabPane1 from '../../components/ecosystem-tabpane1';
import TabPane2 from '../../components/ecosystem-tabpane2';
import TabPane3 from '../../components/ecosystem-tabpane3';
import TabPane4 from '../../components/ecosystem-tabpane4';
import TabPane5 from '../../components/ecosystem-tabpane5';

import './style/index.less';
import intl from 'react-intl-universal';

const PREFIXED = 'ecosystem-';

class Ecosystem extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            activeTabKeyIndex: this._parsePropTabKey(this.props.params), 
        }

        this.currentKey = PREFIXED + (Number.parseInt(this.state.activeTabKeyIndex) + 1);
    }

    componentWillMount() {
        window.scrollTo(0, 0);
    }

    _parsePropTabKey(params) {
        let tabKey = Number(params.tabKey).valueOf();
        if (!Number.isInteger(tabKey)) {
            tabKey = 0;
        }
        if (tabKey < 0 || tabKey > 4) {
            tabKey = 0;
        }
        return String(tabKey).valueOf();
    }

    componentWillReceiveProps() {
        if (this.props.location.action == 'PUSH' || this.props.location.action == 'REPLACE') {
            let selectTabKey = this._parsePropTabKey(this.props.params);
            if (selectTabKey != this.state.activeTabKeyIndex) {
                this.currentKey = PREFIXED + (Number.parseInt(selectTabKey) + 1);
                this.setState({
                    activeTabKeyIndex: selectTabKey
                })
            }
        }
    }

    render() {
        return (
            <div className={this.props.className}>
                <Header history={this.props.history}  currentKey={this.currentKey}/>
                <div className={`${this.props.className}-banner`}>
                    <p className={`${this.props.className}-banner-title`}>{intl.get('ECOSYSTEM')}</p>
                    <p className={`${this.props.className}-banner-desc`}><br />{intl.get('ETM_ECOSYSTEMS_CON')}</p>
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
                        <Tabs.TabPane tab={intl.get('CENTRA-DERIVED_CHAINS')} key='0'>
                            <TabPane1 />
                        </Tabs.TabPane>
                        <Tabs.TabPane tab={intl.get('PARALLEL_CHAIN')} key='1'>
                            <TabPane2 />
                        </Tabs.TabPane>
                        <Tabs.TabPane tab={intl.get('CHAIN_ADAPTOR')} key='2'>
                            <TabPane3 />
                        </Tabs.TabPane>
                        <Tabs.TabPane tab={intl.get('SAMRT_CONTRACT')} key='3'>
                            <TabPane4 />
                        </Tabs.TabPane>
                        <Tabs.TabPane tab={intl.get('MILL_MALL')} key='4'>
                            <TabPane5 />
                        </Tabs.TabPane>
                    </Tabs>
                </div>
                <Footer />
            </div>
        )
    }
}

Ecosystem.defaultProps = {
    className: 'ecosystem'
}

export default Ecosystem;