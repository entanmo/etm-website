import React from 'react';
import { Popover } from 'antd';

import './style/index.less';

import RawTopLogo from './image/top-logo.png';
import RawLeftLogo from './image/left-logo.png';
import RawRightLogo from './image/right-logo.png';
// import RawInfo from './image/info.png';
// import RawInfo_en from './image/info-en.png';
import intl from 'react-intl-universal';

class Block extends React.Component {
    render() {
        const clsName = this.props.className + '-block';
        return (
            <div className={clsName}>
                <img className='img-responsive' src={this.props.logo} alt=""/>
                <p>{this.props.name}</p>
                <p>{this.props.desc}</p>
            </div>
        );
    }
}

Block.propTypes = {
    logo: React.PropTypes.string,
    name: React.PropTypes.string,
    desc: React.PropTypes.string,
}

Block.defaultProps = {
    className: 'home-section4',
}

class Top extends React.Component {
    render() {
        const clsName = this.props.className + '-top';
        return (
            <Popover placement="right">
                <div className={clsName}>
                    <Block logo={RawTopLogo} name={'En-Tan-Mo'} desc={intl.get('FOUNDATION')} />
                </div>
            </Popover>
        );
    }
}

Top.defaultProps = {
    className: 'home-section4',
}

class Left extends React.Component {
    render() {
        const clsName = this.props.className + '-left';
        return (
            <div className={clsName}>
                <Block logo={RawLeftLogo} name={'Emgo'} desc={intl.get('TECHNOLOGY_DEVELOPMENT')} />
            </div>
        );
    }
}

Left.defaultProps = {
    className: 'home-section4',
}

class Right extends React.Component {
    render() {
        const clsName = this.props.className + '-right';
        return (
            <div className={clsName}>
                <Block logo={RawRightLogo} name={'IOEM'} desc={intl.get('BUSINESS_COMPANY')} />
            </div>
        );
    }
}

Right.defaultProps = {
    className: 'home-section4',
}

class Section extends React.Component {
    render() {
        const clsName = this.props.className + '-section4';
        const flexBlockStyle = {
            padding: '40px 0',
        };
        const flexBlockPStyle = {
            fontSize: '16px',
            color: 'rgba(255, 255, 255, 0.8)'
        };
        
        return (
            <div className={clsName}>
                <div className='container'>
                    <div className='content'>
                        <p className={`${clsName}-title`}>{intl.get('ORGANIZATION')}</p>
                        <div className={`${clsName}-content`}>
                            <div className={`${clsName}-graph`}>
                                {/*
                                <Top />
                                <Left />
                                <Right />
                                */}
                                {/* <img className='img-responsive' src={global.lang=="zh-CN"?RawInfo:RawInfo_en} alt=""/> */}
                                <img className='img-responsive' src={((lang)=>{return require('./image/info_'+lang+'.png')})(global.lang)} alt=""/>
                            </div>
                            <div className={`${clsName}-flex`}>
                                <div className='flex nowrap' style={flexBlockStyle}>
                                    <Block logo={RawTopLogo} name={'En-Tan-Mo'} desc={intl.get('FOUNDATION')} />
                                    <p className='desc' style={flexBlockPStyle}>{intl.get('FOUNDATION_CON')}</p>
                                </div>
                                <div className='flex nowrap' style={flexBlockStyle}>
                                    <Block logo={RawLeftLogo} name={'Emgo'} desc={intl.get('TECHNOLOGY_DEVELOPMENT')} />
                                    <p className='desc' style={flexBlockPStyle}>{intl.get('TECHNOLOGY_DEVELOPMENT_CORPORATION_CON')}</p>
                                </div>
                                <div className='flex nowrap' style={flexBlockStyle}>
                                    <Block logo={RawRightLogo} name={'IOEM'} desc={intl.get('BUSINESS_COMPANY')} />
                                    <p className='desc' style={flexBlockPStyle}>{intl.get('BUSINESS_COOPERATION_COMPANY_CON')}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

Section.defaultProps = {
    className: 'home',
}

export default Section;