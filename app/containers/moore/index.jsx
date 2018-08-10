import React from 'react';
import { Divider } from 'antd';

import Header from '../../components/header';
import Footer from '../../components/footer';

import './style/index.less';

// import RawPieChart from './image/piechart.png';
// import RawPieChart_en from './image/piechart-en.jpg';
import intl from 'react-intl-universal';

class Moore extends React.Component {
    componentWillMount() {
        window.scrollTo(0, 0);
    }

    render() {
        const styleImgContainer = {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            paddingTop: '40px',
        };
        const styleImg = {
            maxWidth: '100%',
            zoom: '0.8',
        };
        
        return (
            <div className={this.props.className}>
                <Header history={this.props.history} currentKey='moore'/>
                <div className={`${this.props.className}-banner`}>
                    <p className={`${this.props.className}-banner-title`}>{intl.get('MOORE_ECONOMICS')}</p>
                    <p className={`${this.props.className}-banner-desc`}><br />{intl.get('MOORE_ECONOMICS_CON')}</p>
                </div>
                <div className={`${this.props.className}-main`}>
                    <div className='container' style={{backgroundColor: '#fff', padding: '80px 0 140px'}}>
                        <div className='content'>
                            <div style={styleImgContainer}>
                                <img src={((lang)=>{return require('./image/piechart_'+lang+'.jpg')})(global.lang_change)} alt="" style={styleImg}/>
                            </div>
                            <p className='normal-title'><br />{intl.get('ETM_PRIVATE_EQUITY')}</p>
                            <br />
                            <p className='text-dark'>{intl.get('ETM_PRIVATE_EQUITY_CON')}</p>
                            <br /><br />
                            <Divider />
                            <p className='normal-title'><br />{intl.get('ETM_FOUNDATION')}</p>
                            <br />
                            <p className='text-dark'>{intl.get('ETM_FOUNDATION_CON')}</p>
                            <br /><br />
                            <Divider />
                            <p className='normal-title'><br />{intl.get('POW_MINERS')}</p>
                            <br />
                            <p className='text-dark'>{intl.get('POW_MINERS_CON')}</p>
                            <br /><br />
                            <Divider />
                            <p className='normal-title'><br />{intl.get('DPOS_REWARDS')}</p>
                            <br />
                            <p className='text-dark'>{intl.get('DPOS_REWARDS_CON')}</p>
                            <br /><br />
                            <Divider />
                            <p className='normal-title'><br />{intl.get('TEAM_SUPPORTERS')}</p>
                            <br />
                            <p className='text-dark'>{intl.get('TEAM_SUPPORTERS_CON')}</p>
                            <br />
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        )
    }
}

Moore.defaultProps = {
    className: 'moore',
}

export default Moore;