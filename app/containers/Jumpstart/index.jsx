import React from 'react';

import Header from '../../components/header';
import Footer from '../../components/footer';
import './style/index.less';
import intl from 'react-intl-universal';
import { Button } from 'antd';


class Jumpstart extends React.Component {
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
                    <p className={`${this.props.className}-banner-title`}>{intl.get('JUMPSTARTB-TITLE')}</p>
                    <p className={`${this.props.className}-banner-desc`}>{intl.get('JUMPSTARTB-DES')}</p>
                    <Button className='link-activity' size='large'  >
                        <a style={{color:'rgba(255, 255, 255, 0.8)'}} target="_blank"  href='https://support.okex.com/hc/zh-cn/articles/360028789492'> {intl.get('JUMPSTARTB-BTN')}</a>
                    </Button>
                </div>
                <div className={`${this.props.className}-main`}>
                    <div className='main'>
                        <div className='main-set'>
                            <div className='set-list'>
                            <p className="text" >{intl.get('JUMPSTARTB-PARAGRAPH1')}</p>
                            <p className="text" >{intl.get('JUMPSTARTB-PARAGRAPH2')}</p>
                            <br/>
                            <h4 className="margin-title">{intl.get('JUMPSTARTB-DES01-PAR00')}</h4>
                            <p className="text" >{intl.get('JUMPSTARTB-DES01-PAR01')}</p>
                            <p className="text" >{intl.get('JUMPSTARTB-DES01-PAR02')}</p>
                            <p className="text" >{intl.get('JUMPSTARTB-DES01-PAR03')}</p>
                            <h4 className="margin-title">{intl.get('JUMPSTARTB-DES01-PAR04')}</h4>
                            <p className="text" >{intl.get('JUMPSTARTB-DES01-PAR05')}</p>
                            <p className="text" >{intl.get('JUMPSTARTB-DES01-PAR06')}</p>
                            <p className="text" >{intl.get('JUMPSTARTB-DES01-PAR07')}</p>
                            <p className="text" >{intl.get('JUMPSTARTB-DES01-PAR08')}</p>
                            <p className="text" >{intl.get('JUMPSTARTB-DES01-PAR09')}</p>
                            <p className="text" >{intl.get('JUMPSTARTB-DES01-PAR10')}</p>
                            <p className="text" >{intl.get('JUMPSTARTB-DES01-PAR11')}</p>
                            <h4 className="margin-title">{intl.get('JUMPSTARTB-DES01-PAR12')}</h4>
                            <p className="text" >{intl.get('JUMPSTARTB-DES01-PAR13')}</p>
                            <p className="text" >{intl.get('JUMPSTARTB-DES01-PAR14')}</p>
                            <p className="text" >{intl.get('JUMPSTARTB-DES01-PAR15')}</p>
                            <p className="text" >{intl.get('JUMPSTARTB-DES01-PAR16')}</p>
                            <p className="text" >{intl.get('JUMPSTARTB-DES01-PAR17')}</p>
                            <h4 className="margin-title">{intl.get('JUMPSTARTB-DES01-PAR18')}</h4>
                            <p className="text" >{intl.get('JUMPSTARTB-DES01-PAR19')}</p>
                            <h4 className="margin-title">{intl.get('JUMPSTARTB-DES01-PAR20')}</h4>
                            <p className="text" >{intl.get('JUMPSTARTB-DES01-PAR21')}</p>
                            <p className="text" >{intl.get('JUMPSTARTB-DES01-PAR22')}</p>
                            <p className="text" >{intl.get('JUMPSTARTB-DES01-PAR23')}</p>
                            <p className="text" >{intl.get('JUMPSTARTB-DES01-PAR24')}</p>
                            <h4 className="margin-title">{intl.get('JUMPSTARTB-DES01-PAR25')}</h4>
                            <p className="text" >{intl.get('JUMPSTARTB-DES01-PAR26')}</p>
                            <p className="text" >{intl.get('JUMPSTARTB-DES01-PAR27')}</p>
                            <p className="text" >{intl.get('JUMPSTARTB-DES01-PAR28')}<a style={{color:'rgba(0, 0, 0, 0.8)'}} target="_blank"  href='https://support.okex.com/hc/zh-cn/articles/360028789492'>https://support.okex.com/hc/zh-cn/articles/360028789492。</a></p>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        )
    }
}

Jumpstart.defaultProps = {
    className: 'jumpstart'
}

export default Jumpstart;
