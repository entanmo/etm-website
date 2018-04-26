import React from 'react';

import './style/index.less';

import RawTwitter from './image/t.png';
import RawFacebook from './image/f.png';

class Footer extends React.Component {
    render() {
        return (
            <div className={this.props.className}>
                <div className='container' style={{width: '100%'}}>
                    <div className='content'>
                        <span>©2014-2018 En-Tan-Mo. All Rights Reserved.</span>
                        <a href=""><img src={RawTwitter} alt=""/></a>
                        <a href=""><img src={RawFacebook} alt=""/></a>
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