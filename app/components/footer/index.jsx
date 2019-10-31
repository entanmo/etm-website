import React from 'react';

import './style/index.less';

import RawTwitter from './image/t.png';
import Github from './image/github.png';
import Telegram from './image/telegram.png'
import Wx from './image/wx.png'
import Ewm from './image/ewm.png'
class Footer extends React.Component {
    render() {
        return (
            <div className={this.props.className}>
                <div className='container' style={{width: '100%'}}>
                    <div className='content'>
                        <span>©2014-2019 En-Tan-Mo. All Rights Reserved.</span>
                        <a href="https://twitter.com/entanmo1"><img src={RawTwitter} alt=""/></a>
                        <a href="https://github.com/entanmo"><img src={Github} alt=""/></a>
                        <a href={global.lang=="zh-CN"?"https://t.me/entanmo":"https://t.me/dianbaoetmen01"}><img src={Telegram} alt=""/></a>
                        <div className="ewm">
                            <img className="wx" src={Wx} alt=""/>
                            <img className="show" src={Ewm} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

Footer.defaultProps = {
    className: 'footer',
}

export default Footer;
