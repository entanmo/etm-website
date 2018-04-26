import React from 'react';
import { Row, Col, Button } from 'antd';

import './style/index.less';

import RawBlock1 from './image/block1.png';
import RawBlock2 from './image/block2.png';
import RawBlock3 from './image/block3.png';
import intl from 'react-intl-universal';

class Block extends React.Component {
    render() {
        const clsName = this.props.className + '-block';
        return (
            <div className={clsName}>
                <div className='flex-vertical'>
                    <img className='img-responsive' src={this.props.logo} alt=""/>
                    <p className={`${clsName}-title`}>{this.props.title}</p>
                    <p className={`${clsName}-desc`}>{this.props.desc}</p>
                    <Button size='large' onClick={() => {this.onButtonClick()}}>{intl.get('UNDERSTAND_MORE')}</Button>
                </div>
            </div>
        )
    }

    onButtonClick() {
        this.props.callback();
    }
}

Block.propTypes = {
    logo: React.PropTypes.string,
    title: React.PropTypes.string,
    desc: React.PropTypes.string,
    callback: () => {},
}

Block.defaultProps = {
    className: 'home-section1',
    // btn: "了解更多"
}

class Section extends React.Component {
    render() {
        const clsName = this.props.className + '-section1';
        return (
            <div className={clsName}>
                <div className='container'>
                    <div className='content'>
                        <Row gutter={16}>
                            <Col xs={24} sm={12} md={8} >
                                <Block 
                                    logo={RawBlock1}
                                    title={intl.get('INTRODUCTION')}
                                    desc={intl.get('INTRODUCTION_CON')} 
                                    callback = {() => {this.gotoLink(0);}} />
                            </Col>
                            <Col xs={24} sm={12} md={8} >
                                <Block 
                                    logo={RawBlock2}
                                    title={intl.get('SHD_COMPLETENESS')}
                                    desc={intl.get('SHD_COMPLETENESS_CON')} 
                                    callback = {() => {this.gotoLink(1);}} />
                            </Col>
                            <Col xs={24} sm={12} md={8} >
                                <Block 
                                    logo={RawBlock3}
                                    title={intl.get('EQUILIBRIUM')}
                                    desc={intl.get('EQUILIBRIUM_CON')} 
                                    callback = {() => {this.gotoLink(2);}} />
                            </Col>
                        </Row>
                    </div>
                </div>
            </div>
        )
    }

    gotoLink(index) {
        var link = 'knownledge/' + String(index).valueOf();
        this.props.history.pushState(null, link);
    }
}

Section.defaultProps = {
    className: 'home',
}

export default Section;