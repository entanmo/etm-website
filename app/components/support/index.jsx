import React,{Component} from 'react'
import './style/support.less'
class Support extends Component {
    constructor(props){
      super(props)
    }
    render(){
      const list = createList()
      return (
        <div className="clearfix" >
          <ul className={`${this.props.className}-list`}>
          {
            list.map((item,index) => {
              return <li className={`${this.props.className}-list-item`} key={index}><img className="ad" src={require('./image/mediaLogo'+item+'.png')} alt="" /></li>
            })
          }
          </ul>
        </div>
      )
      function createList () {
        let lists = []
        const num = 10
        for(let i = 1;i<=num;i++){
          lists.push(i)
        }
        return lists
      }
    }
}
Support.defaultProps ={
  className : 'support'
}
export default Support