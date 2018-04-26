import React from 'react';

import './style/index.less';

import RawSHD from './image/SHD.png';
import RawSHD_en from './image/SHD-en.png';
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
        const clsName = this.props.className + '-tabpane2';
        return (
            <div className={`${clsName} content-center`}>
                <div className='tabpane-container' style={{backgroundColor: '#fff', padding: '80px 0 140px'}}>
                    <div className='content'>
                        <br /><br />
                        <p className='normal-title'>{intl.get('SHD_COMPLETENESS')}</p>
                        <br />
                        <p className='text-light'>{intl.get('SHD_COMPLETENESS_CON1')}<br />
                        {intl.get('SHD_COMPLETENESS_CON2')}<br />
                        {intl.get('SHD_COMPLETENESS_CON3')}<br />
                        {intl.get('SHD_COMPLETENESS_CON4')}</p>
                        <br />
                        <div style={styleImgContainer}>
                            <img src={global.lang=="zh-CN"?RawSHD:RawSHD_en} alt="" style={styleImg}/>
                        </div>
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