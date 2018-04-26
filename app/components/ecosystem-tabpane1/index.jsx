import React from 'react';

import './style/index.less';

import RawMainChain from './image/mainchain.png';
import RawMainChain_en from './image/mainchain-en.png';
import intl from 'react-intl-universal';

class TabPane extends React.Component {
    render() {
        const styleImgContainer = {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            paddingTop: '40px',
        };
        const styleImg = {maxWidth: '100%'};
        const clsName = this.props.className + '-tabpane1';
        return (
            <div className={clsName}>
                <div className='tabpane-container' style={{backgroundColor: '#fff', padding: '80px 0 140px '}}>
                    <div className='content'>
                        <br /><br />
                        <p className='normal-title'>{intl.get('CENTRA-DERIVED_CHAINS')}</p>
                        <br />
                        <p className='text-light'>{intl.get('CENTRA-DERIVED_CHAINS_CON1')}<br />
                        {intl.get('CENTRA-DERIVED_CHAINS_CON2')}</p>
                        <br />
                        <div style={styleImgContainer}>
                            <img src={global.lang=="zh-CN"?RawMainChain:RawMainChain_en} alt="" style={styleImg}/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

TabPane.defaultProps = {
    className: 'ecosystem'
}

export default TabPane;