import React from 'react';
import ReactDOM from 'react-dom';
import ClockBg from '../clock-bg'
import CountUp from '../timer'
import './style/index.less';
import intl from 'react-intl-universal';
import title1 from './image/title1.png';
import io from 'socket.io-client';
class Clock extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            renderSize: { width: '100%', height: '100%' },
            randomNum:[],
            total:0
        }
    }
    componentWillUnmount(){
        this._isMounted = false
        const clsName = this.props.className + '-clock';
        const container = ReactDOM.findDOMNode(this.refs[clsName]);
    }
    componentDidMount() {
        const socket = io('http://47.107.148.76:7777')
        let arr = [];
        socket.on('newrandom', msg => {
          this.refs.countUp.reset()
          arr.push(msg.random)
          if(arr.length>=8){
            arr.shift()
          }
          this.setState({
            randomNum:arr,
            total:msg.index+1
          })
          const domList = document.getElementById('randomNum')
          const oLi = domList.getElementsByTagName('li');
          const lastLi = oLi[oLi.length-1]
          this.animateCSS(lastLi,'fadeInDown')

        })
        this._isMounted = true
        const clsName = this.props.className + '-clock';
        const container = ReactDOM.findDOMNode(this.refs[clsName]);
        let flushRenderSize = () => {
            if(this._isMounted){
                this.setState({
                    renderSize: {
                        width: container.clientWidth,
                        height: container.clientHeight,
                    }
                });
            }
        }
            window.addEventListener('resize', () => {
                flushRenderSize();
            });
        flushRenderSize();

    }
    animateCSS(node, animationName, callback) {
      node.classList.add('animated', animationName)

      function handleAnimationEnd() {
          node.classList.remove('animated', animationName)
          node.removeEventListener('animationend', handleAnimationEnd)

          if (typeof callback === 'function') callback()
      }

      node.addEventListener('animationend', handleAnimationEnd)
  }
    render() {
        const clsName = this.props.className+'-clock';
        return (
            <div ref={clsName} className={clsName}>
                <div className={`${clsName}-bg`}></div>
                <div className='container'>
                  <ClockBg></ClockBg>
                  <div className="clock-wrapper">
                    <div className="wrapper-left">
                      <img  src={title1} />
                      <div className="timer"><CountUp ref='countUp'></CountUp></div>
                      <p className="title">区块链量子随机数发生器</p>
                      <ul className="randomNum " id="randomNum">
                        {this.state.randomNum.map((item,index) => {
                          return <li key={index}>{item}</li>
                        })}
                      </ul>
                      <div className="total">累计已生成：{this.state.total} 个</div>
                    </div>
                </div>
                </div>
            </div>
        )
    }


}

Clock.defaultProps = {
    className: 'home',
}

export default Clock;
