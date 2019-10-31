import React from 'react';

import Header from '../../components/header';
import Footer from '../../components/footer';
import './style/index.less';
import intl from 'react-intl-universal';
import { Button } from 'antd';


class Yellowbook extends React.Component {
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
                    <p className={`${this.props.className}-banner-title`}>{intl.get('YELLOWBOOK-TITLE')}</p>
                    <p className={`${this.props.className}-banner-desc`}>{intl.get('YELLOWBOOK-DES')}</p>
                    <Button className='link-activity gjzdy' size='large'  >
                        <a style={{color:'rgba(255, 255, 255, 0.8)'}} target="_blank"  href='http://www.entanmo.com/docs/ETM%20interpretation_Science_zh-CN.pdf'> {intl.get('JUMPSTARTB-BTN')}</a>
                    </Button>
                </div>
                <div className={`${this.props.className}-main`}>
                    <div className='main'>
                        <div className='main-set'>
                            <div className='set-list'>
                                <p className="text" >{intl.get('YELLOWBOOK-DES01-PAR00')}</p><br/>
                                <p className="text" >{intl.get('YELLOWBOOK-DES01-PAR01')}</p><br/>
                                <p className="text" >{intl.get('YELLOWBOOK-DES01-PAR02')}</p><br/>
                                <p className="text" >{intl.get('YELLOWBOOK-DES01-PAR03')}</p><br/>
                                <p className="text" >{intl.get('YELLOWBOOK-DES01-PAR04')}</p><br/>
                                <p className="text" >{intl.get('YELLOWBOOK-DES01-PAR05')}</p><br/>
                                <p className="text" >{intl.get('YELLOWBOOK-DES01-PAR06')}</p><br/>
                                <p className="text" >{intl.get('YELLOWBOOK-DES01-PAR07')}</p><br/>
                                <p className="text" >{intl.get('YELLOWBOOK-DES01-PAR08')}</p><br/>
                                <p className="text" >{intl.get('YELLOWBOOK-DES01-PAR09')}</p><br/>
                                <p className="text" >{intl.get('YELLOWBOOK-DES01-PAR10')}</p><br/>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        )
    }
}

Yellowbook.defaultProps = {
    className: 'yellowbook'
}

export default Yellowbook;
