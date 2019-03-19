import React from 'react';

import './style/index.less';
import title from './image/2.png';

import intl from 'react-intl-universal';
import { relative } from 'path';


class Api extends React.Component {
    render() {
        const clsName = this.props.className + '-section1';

        const list = this.props.list
        return (
            <div className={clsName} style={{backgroundColor:list.bgc}}>
                <div className='container'>
                <div className='content flex-vertical'>
                    <div style={{height:'400px',width:'500px',position:'relative'}}>
                    <img className='img-responsive' src={title} alt=""/>
                      <div className="halo ring-1"></div>
                      <div className="halo ring-2"></div>
                      <div className="halo ring-3"></div>
                      <div className="halo ring-4"></div>
                      <div className="halo ring-5"></div>
                      <div className="halo ring-6"></div>
                      <div className="halo ring-7"></div>
                      <div className="halo ring-8"></div>
                    </div>
                    <p className="info" >{list? list.info : ''}</p>
                    <p className="info" >{list? list.info1 : ''}</p>
                </div>
                </div>
            </div>
        )
    }

}

Api.defaultProps = {
    className: 'api',
}

export default Api;
