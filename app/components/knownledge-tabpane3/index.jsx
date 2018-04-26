import React from 'react';

import './style/index.less';

import RawEnv from './image/env.png';
import RawPay from './image/pay.png';
import RawEnv_en from './image/env-en.png';
import RawPay_en from './image/pay-en.png';
import intl from 'react-intl-universal';

class TabPane extends React.Component {
    render() {
        const styleImgContainer1 = {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            padding: '40px 0',
        };
        const styleImgContainer2 = {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            paddingTop: '40px',
        };
        const styleImg = {maxWidth: '100%'};
        const clsName = this.props.className + '-tabpane3';
        return (
            <div className={`${clsName} content-center`}>
                <div className='tabpane-container' style={{backgroundColor: '#fff', padding: '80px 0 140px'}}>
                    <div className='content'>
                        <br /><br />
                        <p className='normal-title'>{intl.get('EQUILIBRIUM')}</p>
                        <br />
                        <p className='text-light'>{intl.get('EQUILIBRIUM_CON1')}
                        </p>
                        <br />
                        <div style={styleImgContainer1}>
                            <img src={global.lang=="zh-CN"?RawEnv:RawEnv_en} alt="" style={styleImg}/>
                        </div>
                        <br />
                        <p className='text-light'>
                        {intl.get('EQUILIBRIUM_CON2')}<br />
                        {intl.get('EQUILIBRIUM_CON3')}<br />
                        {intl.get('EQUILIBRIUM_CON4')}</p>
                        <br />
                        <div style={styleImgContainer2}>
                            <img src={global.lang=="zh-CN"?RawPay:RawPay_en} alt="" style={styleImg}/>
                        </div>
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