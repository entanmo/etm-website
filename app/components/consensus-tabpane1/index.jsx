import React from 'react';

import './style/index.less';

import RawConsensus from './image/consensus.png';
import intl from 'react-intl-universal';

class TabPane extends React.Component {
    render() {
        const styleTitleContainer = {
            display: 'flex',
            width: '100%',
            justifyContent: 'space-between',
            alignItems: 'center'
        };
        const styleTitle = {
            fontSize: '33px',
            color: '#ff2717'
        };
        const styleFlag = {
            width: '0',
            height: '0',
            border: '13px solid rgba(255, 39, 33, 0.7)',
            borderBottom: '13px solid transparent',                            
        };
        const clsName = this.props.className + '-tabpane1';
        return (
            <div className={clsName}>
                <div className='tabpane-container' style={{backgroundColor: '#fff'}}>
                    <div className='content'>
                        <div className={`${clsName}-info`}>
                            <img src={RawConsensus} alt="" className={`${clsName}-consensus`}/>
                            <div className={`${clsName}-detail`}>
                                <div style={styleTitleContainer}>
                                    <p style={styleTitle}>{intl.get('KANTOROVICH_CONSENSUS')}</p>
                                    <div style={styleFlag}></div>
                                </div>
                                <br />
                                <p className='text-light'>{intl.get('KANTOROVICH_CONSENSUS_CON1')}<br />
                                {intl.get('KANTOROVICH_CONSENSUS_CON2')}<br />
                                {intl.get('KANTOROVICH_CONSENSUS_CON3')}<br />
                                {intl.get('KANTOROVICH_CONSENSUS_CON4')}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

TabPane.defaultProps = {
    className: 'consensus'
}

export default TabPane;