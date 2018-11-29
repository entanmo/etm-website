import React from 'react';

import { Button } from 'antd';

import Header from '../../components/header';
import Footer from '../../components/footer';
import Banner from '../../components/home-banner';
// import ActLists from '../../components/act-lists';
import Section1 from '../../components/home-section1';
import Section2 from '../../components/home-section2';
import Section3 from '../../components/home-section3';
import Section4 from '../../components/home-section4';
import Section5 from '../../components/home-section5';
import Section6 from '../../components/home-section6';
import Section7 from '../../components/home-section7';

import FlipCountdown from '../../components/flipcountdown';

import './style/index.less';

class Home extends React.Component {
    constructor(props, context) {
        super(props, context);
    }

    componentWillMount() {
        window.scrollTo(0, 0);
    }

    render() {
        return (
            <div className={this.props.className}>
                <Header history={this.props.history} />
                <Banner />
                {/* <ActLists></ActLists> */}
                <Section1 history={this.props.history}/>
                <Section2 history={this.props.history}/>
                <Section3 history={this.props.history}/>
                <Section4 history={this.props.history}/>
                <Section5 history={this.props.history}/>
                <Section6 history={this.props.history}/>
                <Section7 history={this.props.history}/>
                <Footer />
            </div>
        );
    }
}

Home.defaultProps = {
    className: 'home',
}

export default Home;
