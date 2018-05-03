import React from 'react';
import { Tabs } from 'antd';

import Header from '../../components/header';
import Footer from '../../components/footer';
import TabPane1 from '../../components/knownledge-tabpane1';
import TabPane2 from '../../components/knownledge-tabpane2';
import TabPane3 from '../../components/knownledge-tabpane3';

import './style/index.less';
import intl from 'react-intl-universal';

const PREFIXED = 'knownledge-';

class Knownledge extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.knownledgeMounted = false;

        this.state = {
            activeTabKeyIndex: this._parsePropTabKey(this.props.params), 
        };

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
        if (tabKey < 0 || tabKey > 2) {
            tabKey = 0;
        }
        return String(tabKey).valueOf();
    }

    componentWillReceiveProps() {
        if (!this.knownledgeMounted) { return ; }

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

    componentDidMount() {
        this.knownledgeMounted = true;
    }

    componentWillUnmount() {
        this.knownledgeMounted = false;
    }

    render() {
        return (
            <div className={this.props.className}>
                <Header history={this.props.history} currentKey={this.currentKey}/>
                <div className={`${this.props.className}-banner`}>

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
                        <Tabs.TabPane tab={intl.get('INTRODUCTION')} key='0'>
                            <TabPane1 />
                        </Tabs.TabPane>
                        <Tabs.TabPane tab={intl.get('SHD_COMPLETENESS')} key='1'>
                            <TabPane2 />
                        </Tabs.TabPane>
                        <Tabs.TabPane tab={intl.get('EQUILIBRIUM')} key='2'>
                            <TabPane3 />
                        </Tabs.TabPane>
                    </Tabs>
                </div>
                <Footer />
            </div>
        )
    }
}

Knownledge.defaultProps = {
    className: 'knownledge'
}

export default Knownledge;