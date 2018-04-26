import React from 'react';
import { Divider } from 'antd';

import './style/index.less';

import RawHistory from './image/history.png';
import RawHistory_en from './image/history-en.png';
import intl from 'react-intl-universal';

class TabPane extends React.Component {
    render() {
        const styleImgContainer = {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            paddingTop: '30px',
            paddingBottom: '30px',
        };
        const styleImg = {maxWidth: '100%'};
        const clsName = this.props.className + '-tabpane1';
        return (
            <div className={clsName}>
                <div className='tabpane-container' style={{backgroundColor: '#fff', paddingTop: '80px'}}>
                    <div className='content'>
                        <br />
                        <br />
                        <p className='normal-title'>{intl.get('HISTORY')}：</p>
                        <br />
                        <p className='text-light'>{intl.get('HISTORY_CON1')}<br />
                        {intl.get('HISTORY_CON2')}<br /> 
                        {intl.get('HISTORY_CON3')}</p>
                        <br />
                        <div style={styleImgContainer}>
                            <img src={global.lang=="zh-CN"?RawHistory:RawHistory_en} alt="" style={styleImg}/>
                        </div>
                        <br />
                    </div>
                </div>
                <div className='tabpane-container' style={{backgroundColor: '#f8f7f7', paddingBottom: '140px'}}>
                    <div className='content'>
                        <br /><br />
                        <p className='normal-title'>{intl.get('WHAT_IS_ETM')}</p>
                        <br />
                        <p className='text-light'>{intl.get('WHAT_IS_ETM_CON')}</p>
                        <br /><br />
                        <Divider />
                        <p className='normal-title'>{intl.get('ETM_BUILDERS')}</p>
                        <br />
                        <p className='text-light'>{intl.get('ETM_BUILDERS_CON1')}<br />
                        {intl.get('ETM_BUILDERS_CON2')}<br />
                        {intl.get('ETM_BUILDERS_CON3')}</p>
                        <br />
                    </div>
                </div>
            </div>
        )
    }
}

TabPane.defaultProps = {
    className: 'knownledge'
}

export default TabPane;