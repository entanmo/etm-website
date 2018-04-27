import React from 'react';
import { Tag, Divider } from 'antd';

import './style/index.less';

import RawNash from './image/nash.png';
import RawKantorivich from './image/kantorivich.png';
import RawStakhanov from './image/stakhanov.png';
import RawSupervision from './image/supervision.png';
import RawSupervision_en from './image/supervision-en.png';
import RawParote from './image/parote.png';
import RawParote_en from './image/parote-en.png';
import intl from 'react-intl-universal';

class TabPane extends React.Component {
    render() {
        const styleImgContainer = {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',

            padding: '40px 0',
        };
        const styleImg = {maxWidth: '100%'};
        const styleFixedImg = {
            width: '277px', 
            height: '277px',
            flex: '0 0 auto',
            zoom: '0.8',
        };
        const clsName = this.props.className + '-tabpane2';
        return (
            <div className={clsName}>
                <div className='tabpane-container' style={{backgroundColor: '#f8f7f7'}}>
                    <div className='content'>
                        <div className={`${clsName}-info`} style={{marginTop: '80px'}}>
                            <img src={RawNash} alt="" style={styleFixedImg}/>
                            <div className={`${clsName}-detail`}>
                                <p className='small-title'>{intl.get('NASH_EQUILIBRIUM')}</p>
                                <br />
                                <p className='text-dark'>{intl.get('NASH_EQUILIBRIUM_CON')}</p>
                            </div>
                        </div>
                        <div className={`${clsName}-info`} style={{margin: '70px 0 80px'}}>
                            <img src={RawKantorivich} alt="" style={styleFixedImg}/>
                            <div className={`${clsName}-detail`}>
                                <p className='small-title'>{intl.get('KANTOROVICH')}</p>
                                <br />
                                <p className='text-dark'>{intl.get('KANTOROVICH_CON')}</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='tabpane-container' style={{backgroundColor: '#fff', paddingBottom: '140px'}}>
                    <div className='content'>
                        <br />
                        {/* <p className='small-title' style={{
                            paddingTop: '40px',
                        }}>{intl.get('STAKHANOV')}</p>
                        <br />
                        <p className='text-dark'>{intl.get('STAKHANOV_CON')}</p>
                        <br /> */}
                        {/* <div style={styleImgContainer}>
                            <img src={RawStakhanov} alt="" style={styleImg}/>
                        </div>
                        <Divider /> */}
                        <br />
                        <p className='small-title' style={{
                            paddingTop: '40px'
                        }}>{intl.get('TRIBUNALS')}</p>
                        <br />
                        <p className='text-dark'>{intl.get('TRIBUNALS_CON')}</p>
                        <br />
                        <div style={styleImgContainer}>
                            <img src={global.lang=="zh-CN"?RawSupervision:RawSupervision_en} alt="" style={styleImg}/>
                        </div>
                        <Divider />
                        <br />
                        <p className='small-title' style={{
                            paddingTop: '40px'
                        }}>{intl.get('PARETO_MINING_POOL')}</p>
                        <br />
                        <p className='text-dark'>{intl.get('PARETO_MINING_POOL_CON')}</p>
                        <br />
                        <div style={styleImgContainer}>
                            <img src={global.lang=="zh-CN"?RawParote:RawParote_en} alt="" style={styleImg}/>
                        </div>
                        <Divider />
                        <br />
                        <p className='small-title' style={{
                            paddingTop: '40px'
                        }}>{intl.get('MIR')}</p>
                        <br />
                        <p className='text-dark'>{intl.get('MIR_CON')}</p>
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