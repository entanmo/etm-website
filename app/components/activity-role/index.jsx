import React from 'react';
import './style/index.less';

import intl from 'react-intl-universal';

class TabPane extends React.Component {
    render() {
        const styleFixedImg = {
            width: '140px', 
            height: '140px',
            flex: '0 0 auto',
            zoom: '0.8',
        };
        const clsName = this.props.className + '-tabpane2';
        let lists = [1,2,3,4,5];
        return (
            <div className={clsName}>
                <div className='tabpane-container'>
                    <div className='content'>
                    {
                        lists.map((item,index) => 
                            <div key={index}>
                                <div className={`${clsName}-info`} style={{marginTop: '70px'}}>
                                <img src={require('./image/'+item+'.png')} alt="" style={styleFixedImg}/>
                                    <div className={`${clsName}-detail`}>
                                        <p className='small-title'>{intl.get('ACTIVITY-ROLE0'+item+'-TITLE01')}</p>
                                        <br />
                                        <p className='text-dark'>{intl.get('ACTIVITY-ROLE0'+item+'-description01')}</p>
                                        <p className='text-dark'>{intl.get('ACTIVITY-ROLE0'+item+'-description02')}</p>
                                    </div>
                                </div> 
                            </div>                           
                        )
                    }
                    </div>
                </div>
            </div>
        )
    }
}

TabPane.defaultProps = {
    className: 'act-role'
}

export default TabPane;