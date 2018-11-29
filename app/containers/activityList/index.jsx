import React from 'react';
import { Link } from 'react-router';

import Header from '../../components/header';
import Footer from '../../components/footer';
import './style/index.less';
import intl from 'react-intl-universal';
import Section7 from '../../components/home-section7';



class ActivityList extends React.Component {
    constructor(props, context) {
        super(props, context);
    }
    componentWillMount() {
        window.scrollTo(0, 0);
    }
    render() {
        console.log(global.lang)
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
                <div>
									<ul role='nav'>
											<li><Link style={{color:'#666'}} to={`activityList/page-${global.lang}`}>md1</Link></li>
											<li><Link style={{color:'#666'}} to='activityList/2'>md2</Link></li>
                  </ul>
                  <Section7 history={this.props.history}/>
                </div>
                <Footer />
            </div>
        )
    }
}

ActivityList.defaultProps = {
    className: 'activity'
}

export default ActivityList;
