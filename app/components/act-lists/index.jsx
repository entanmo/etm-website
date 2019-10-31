import React from 'react';
import './style/swiper-4.3.5.min.css'
import './style/index.less';
import Swiper from 'swiper'
import { Link } from 'react-router';

class actLists extends React.Component{
    constructor(){
      super()
    }
    render(){
        return(
            <div className="act-list">
              <div className="act-in">
                <section className="etm-act swiper-container index_tab_con" ref={self => this.swiperID = self}>
                  <ul className="swiper-wrapper">
                    <li className="swiper-slide">
                        <Link to='/yellowbook'>
                          <img className='slide-img'  src={((lang)=>{return require('./image/act04_'+lang+'.png')})(global.lang_change)}  alt=""/>                                                                           
                        </Link>
                    </li>
                    <li className="swiper-slide">
                        <Link to='/jumpstart'>
                          <img className='slide-img'  src={((lang)=>{return require('./image/act01_'+lang+'.png')})(global.lang_change)}  alt=""/>                                                                           
                        </Link>
                    </li>
                    <li className="swiper-slide">
                        <Link to='/thermo'>
                           <img className='slide-img'  src={((lang)=>{return require('./image/act02_'+lang+'.png')})(global.lang_change)}  alt=""/>                                                                                                       
                        </Link>
                    </li>
                    <li className="swiper-slide">
                          <img className='slide-img'  src={((lang)=>{return require('./image/act03_'+lang+'.png')})(global.lang_change)}  alt=""/>                                                                                                       
                    </li>
                  </ul>
                <div className="swiper-pagination banner-pagination" ref={self => this.paginateID = self}></div>
              </section>
              </div>
            </div>
        )
        
    }
    componentDidMount() {
      const setSwiper = () =>{
          new Swiper(this.swiperID, {
            slidesPerView : 'auto',
            spaceBetween : 40,
              pagination: {
                  el: this.paginateID,
              },
          });
      }
      setSwiper();
        window.addEventListener('resize',()=>{
          setSwiper();
        })
    }
}

export default actLists