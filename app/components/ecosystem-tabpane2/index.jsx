import React from 'react';

import './style/index.less';

import RawParallelChain from './image/parallelchain.png';
import RawParallelChain_en from './image/parallelchain-en.png';
import intl from 'react-intl-universal';

class TabPane extends React.Component {
    render() {
        const styleImgContainer = {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            paddingTop: '40px'
        };
        const styleImg = {maxWidth: '100%'};
        const clsName = this.props.className + '-tabpane2';
        return (
            <div className={clsName}>
                <div className='tabpane-container' style={{backgroundColor: '#fff', padding: '80px 0 140px'}}>
                    <div className='content'>
                        <br /><br />
                        <p className='normal-title'>{intl.get('PARALLEL_CHAIN')}</p>
                        <br />
                        <p className='text-light'>{intl.get('PARALLEL_CHAIN_CON1')}</p>
                        <br />
                        <div style={styleImgContainer}>
                            <img src={global.lang=="zh-CN"?RawParallelChain:RawParallelChain_en} alt="" style={styleImg}/>
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