import React from 'react';

import Header from '../../components/header';
import Footer from '../../components/footer';
import './style/index.less';
import intl from 'react-intl-universal';
import { Button } from 'antd';


class GoldenMiner extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            changeSize :{
                computedWith : '100%',
                computedHight : '100%'
            }
        }
    }
    componentWillMount() {
        window.scrollTo(0, 0);
    }
    render() {
        let paragraphNum = [1,2,3,4,5,6,7,8,9];
        return (
            <div className={this.props.className}>
                <Header history={this.props.history}  currentKey={this.currentKey}/>
                <div className={`${this.props.className}-banner ${this.props.className}-banner-style1`}>
                    <p className={`${this.props.className}-banner-title`}>{intl.get('MINER-TITLE')}</p>
                    <p className={`${this.props.className}-banner-desc`}>{intl.get('MINER-DES')}</p>
                    <Button className='link-activity' size='large'  >
                        <a style={{color:'rgba(255, 255, 255, 0.8)'}} target="_blank"  href='https://goo.gl/forms/eLMWGhGDASAPKTLM2'> {intl.get('MINER-BTN')}</a>
                    </Button>
                </div>
                <div className={`${this.props.className}-main`}>
                    <div className='main'>
                        <div className='main-des'>
                            <h5>{intl.get('MINER-DES-THEME')}</h5>
                            {
                              paragraphNum.map((item,index) => <p key={index} className={'main-text'+' '+ 'main-text'+index} >{intl.get('MINER-PARAGRAPH'+item)}</p>)
                            }
                        </div>
                        <div className='main-set'>
                            <div className='set-list'>
                            <h4>{intl.get('MINER-DES-TITLE01')}</h4>
                            <p className="text" >{intl.get('MINER-DES01-PAR01')}</p>
                            <p className="text" >{intl.get('MINER-DES01-PAR02')}</p>
                            <h4 className="margin-title">{intl.get('MINER-DES-TITLE02')}</h4>
                            <p className="text" >{intl.get('MINER-DES02-PAR01')}</p>
                            <h4 className="margin-title">{intl.get('MINER-DES-TITLE03')}</h4>
                            <p className="text" >{intl.get('MINER-DES03-PAR03')}</p>
                            <p className="text" >{intl.get('MINER-DES03-PAR01')}</p>
                            <p className="text" >{intl.get('MINER-DES03-PAR02')}</p>
                            <h4 className="margin-title">{intl.get('MINER-DES-TITLE04')}</h4>
                            <p className="text" >{intl.get('MINER-DES04-PAR01')}</p>
                            <img  src={((lang)=>{return require('./image/table_'+lang+'.jpg')})(global.lang)} style={{width:'100%',marginTop:'10px'}} alt=""/>
                            <h4 className="margin-title">{intl.get('MINER-DES-TITLE05')}</h4>
                            <p className="text" >{intl.get('MINER-DES05-PAR01')}</p>
                            <h4 className="margin-title">{intl.get('MINER-DES-TITLE06')}</h4>
                            <p className="text" >{intl.get('MINER-DES06-PAR01')}</p>
                            <h4 className="margin-title">{intl.get('MINER-DES-TITLE07')}</h4>
                            <p className="text" >{intl.get('MINER-DES07-PAR01')}</p>
                            <p className="text" >{intl.get('MINER-DES07-PAR02')}</p>
                            <p className="text" >{intl.get('MINER-DES07-PAR03')}</p>
                            <p className="text" >{intl.get('MINER-DES07-PAR04')}</p>
                            <p className="text" >{intl.get('MINER-DES07-PAR05')}</p>
                            <p className="text" >{intl.get('MINER-DES07-PAR07')}</p>
                            </div>
                        </div>
                        <div className="act-way">
                            <div className="act-in">
                                <h4 className="act-cooperation">{intl.get('MINER-FOOT-TITLE1')}</h4>
                                <p className="act-name">{intl.get('MINER-FOOT-PAR01')}</p>
                                <h4 className="argument">{intl.get('MINER-FOOT-TITLE2')}</h4>
                                <div className="address">{intl.get('MINER-FOOT02-PAR01')}</div>
                                <div className="address">{intl.get('MINER-FOOT02-PAR02')}</div>
                                <div className="address">{intl.get('MINER-FOOT02-PAR03')}</div>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        )
    }
}

GoldenMiner.defaultProps = {
    className: 'goldenMiner'
}

export default GoldenMiner;
