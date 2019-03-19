import React from 'react'

class CountUp extends React.Component{
  constructor(){
    super()
    this.timer = null
    this.millisecond = 0
    this.state ={
        timer:'00:00:00'
    }

    this.startTimer = null;
    this.endTimer = null;
  }
  render(){
    return (
        <div>{this.state.timer}</div>
    )
  }
  componentDidMount(){
    this.initTimer()
  }
  initTimer(){
      this.startTimer = Date.now();
      this.timer = setInterval(() => {
        this.endTimer = Date.now();
        this.millisecond = Math.floor((this.endTimer - this.startTimer) * 1);
        let num = this.formatNumber(this.millisecond)
        this.setState({
          timer:num
        })
      },1)
  }
  reset(){
    this.startTimer = null
    this.endTimer = null
    if(this.timer != null){
      clearInterval(this.timer)
      this.timer = null
    }
    this.initTimer()
  }
  formatNumber (milliseconds){
      const ms = milliseconds % 1000;
      let tmp = Math.floor(milliseconds / 1000);
      const s = tmp % 60;
      tmp = Math.floor(tmp / 60);
      const m = tmp % 60;
      const h = Math.floor(tmp / 60);
      return this.addZero(h)+':'+this.addZero(m)+':'+this.addZero(s)+'.'+ms
  }
  addZero(num){
    if(num*1>9){
      return num
    }else {
      return '0'+ num
    }
  }
}

export default CountUp
