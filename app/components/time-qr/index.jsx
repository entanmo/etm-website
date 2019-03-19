import React from 'react';
import { Row, Col, Button } from 'antd';

import './style/index.less';

import intl from 'react-intl-universal';


class Section extends React.Component {
    render() {
        const clsName = this.props.className + '-section1';
        const list = this.props.list
        return (
            <div className={clsName}>
                <div className='container qr'>
                <div className='content flex-vertical' >
                <img className='img-icon' src={list? list.icon : ''} alt=""/>
                <p className="title-text">{list? list.text:''}</p>
                <img className='img-title' src={list? list.title : ''} alt=""/>
                    <p className="info" >{list? list.info : ''}</p>
                    <p className="info" >{list? list.info1 : ''}</p>
                </div>
                </div>
            </div>
        )
    }

}

Section.defaultProps = {
    className: 'home',
}

export default Section;
