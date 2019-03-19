import React from 'react';

import './style/index.less';



import intl from 'react-intl-universal';


class Section extends React.Component {
  constructor () {
    super()
    this.state = {
    }
  }
    render() {
        const clsName = this.props.className + '-section1';
        const list = this.props.list
        return (
            <div className={clsName} style={{backgroundColor:list.bgc}}>
                <div className='container'>
                <div className='content flex-vertical' >
                    <img className='img-icon' src={list? list.icon : ''} alt=""/>
                    <p className="title-text">{list? list.text:''}</p>
                    <img className='img-responsive' src={list? list.title : ''} alt=""/>
                    <p className="info" >{list? list.info : ''}</p>
                    <p className="info" >{list? list.info1 : ''}</p>
                </div>
                </div>
            </div>
        )
    }

}

Section.defaultProps = {
    className: 'random',
}

export default Section;
