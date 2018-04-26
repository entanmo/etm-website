import React from 'react';

import './style/index.less';
import intl from 'react-intl-universal';

class TabPane extends React.Component {
    render() {
        const clsName = this.props.className + '-tabpane3';
        return (
            <div className={clsName}>
                <div className='tabpane-container' style={{backgroundColor: '#fff', padding: '80px 0 140px'}}>
                    <div className='content'>
                        <br /><br />
                        <p className='normal-title'>{intl.get('CHAIN_ADAPTOR')}</p>
                        <br />
                        <p className='text-light'>{intl.get('CHAIN_ADAPTOR_CON1')}<br />
                        {intl.get('CHAIN_ADAPTOR_CON2')}</p>
                        <br />
                    </div>
                </div>
            </div>
        )
    }
}

TabPane.defaultProps = {
    className: 'ecosystem'
}

export default TabPane;