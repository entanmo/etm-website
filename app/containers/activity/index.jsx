import React from 'react';

import Header from '../../components/header';
import Footer from '../../components/footer';
import RoleList from '../../components/activity-role';
import './style/index.less';
import intl from 'react-intl-universal';

import logoImg  from './image/ETM.png'; 
import iconImg from './image/Stanford.png';
import Item from 'antd/lib/list/Item';
import { Button } from 'antd';


class Activity extends React.Component {
    constructor(props, context) {
        super(props, context);
    }
    componentWillMount() {
        window.scrollTo(0, 0);
    }
    render() {
        let paragraphNum = [1,2,3,4];
        return (
            <div className={this.props.className}>
                <Header history={this.props.history}  currentKey={this.currentKey}/>
                <div className={`${this.props.className}-banner ${this.props.className}-banner-style1`}>
                    <p className={`${this.props.className}-banner-title`}>{intl.get('ACTIVITY-TITLE')}</p>
                    <p className={`${this.props.className}-banner-desc`}
                        style={{
                            maxWidth: '528px'
                        }}>{intl.get('ACTIVITY-DES')}</p>
                    <p className={`${this.props.className}-banner-desc`}
                        style={{
                            maxWidth: '800px'
                        }}>{intl.get('ACTIVITY-DES02')}</p>                        
                </div>
                <div className={`${this.props.className}-main`}>
                    <div className='main'>
                        <div className='main-des'>
                            <h5>{intl.get('ACTIVITY-THEME')}</h5>
                            {
                                paragraphNum.map((item,index) => <p key={index} className="main-text">{intl.get('ACTIVITY-PARAGRAPH'+item)}</p>)
                            }
                        </div>
                        <div className='main-role'>
                            <div className='role-list'>
                            <h4>{intl.get('ACTIVITY-ROLE-TITLE')}</h4>
                            <RoleList></RoleList>    
                                {/* {intl.get('ACTIVITY-LISTS')} */}
                            </div>
                        </div>
                        <div className="act-way">
                            <div className="act-in">
                                <h4 style={{marginBottom:'20px'}}>{intl.get('ACTIVITY-WAY-TITLE')}</h4>
                                <img className="act-logo" src={logoImg} alt=""/>
                                <div className="iconImg">
                                    <img src={iconImg} alt=""/>
                                </div>
                                <h4 className="act-cooperation">{intl.get('ACTIVITY-WAY-TITLE02')}</h4>
                                <p className="act-name">{intl.get('ACTIVITY-COOPERATION')}</p>
                                <h4 className="argument">{intl.get('ACTIVITY-ARRGUMENT')}</h4>
                                <div className="time">{intl.get('ACTIVITY-TIME')}</div>
                                <div className="address">{intl.get('ACTIVITY-ADDRESS')}</div>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        )
    }
}

Activity.defaultProps = {
    className: 'activity'
}

export default Activity;