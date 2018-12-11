import React from 'react';
import intl from 'react-intl-universal';
import './style/index.less'
class RouteMap extends React.Component{
  constructor(){
    super()
  }
  render(){
    const clsName = this.props.className + '-routeMap';
    return (
      <div className={clsName}>
        <div className="content-map" >
          <p className="title">{intl.get('ROAD-MAP')}</p>
          <img className='img-responsive' src={((lang_change)=>{return require('./image/map_'+lang_change+'.png')})(global.lang_change)} alt=""/>
        </div>
        <div className="mcontent-map">
          <p className="title">{intl.get('ROAD-MAP')}</p>
          <img className='img-responsive' src={((lang_change)=>{return require('./image/phone-map_'+lang_change+'.png')})(global.lang_change)} alt=""/>
        </div>
      </div>

    )
  }
}
RouteMap.defaultProps = {
  className: 'home',
}
export default RouteMap
