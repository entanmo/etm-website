import React from 'react'
import { Link } from 'react-router';
import { Breadcrumb } from 'antd';
import Header from '../../components/header';
import Footer from '../../components/footer';
import list from '../../markdown/js/list';
import './style/index.less'
  class Article extends React.Component{
    constructor(props){
      super(props)
      this._isMounted = false
      this.state = {
        Md1Inst: null,
        path:''
      }
    }
    isArtcle(){
      let arr = [];
      const url = window.location.href;
      const reg = /article\/(.+)\?/g;
      const path = reg.exec(url)[1];
      for(const [title,detail] of Object.entries(list)){
        arr.push(title)
      }
      if(url.match(reg) && arr.indexOf(path) !== -1){
        this.state.path = path
      } else {
        this.state.path = 404
      }
    }
    requireAsync (name,cb) {
      require.ensure([], require => {
        cb(null, require(`../../markdown/${name}.md`).default);
      }, 'Md1');
    }
    change (err,inst){
      if(err){
        return
      }
      if(this._isMounted){
        this.setState({Md1Inst:inst})
      } else {
        this.state.Md1Inst = inst
      }
    }
    componentWillReceiveProps (prevProps){
    }
    componentDidMount(){
      this._isMounted = true
    }
    componentWillMount(){
      window.scrollTo(0, 0);
      this.isArtcle()
    }
    render(){
      return (
        <div style={{color:'#666'}} >
          <Header history={this.props.history}  currentKey={this.currentKey} ></Header>
            <div className="main">
            <div className="breadcrumb">
              <Breadcrumb>
                <Breadcrumb.Item>
                <Link style={{ color:'#666'}} to={`articleList`}>文章列表</Link></Breadcrumb.Item>
                <Breadcrumb.Item style={{ color:'#666'}} href="javascript:;">{this.state.path}</Breadcrumb.Item>
            </Breadcrumb>
            </div>
            {
              this.state.Md1Inst == null ?this.requireAsync(`${this.state.path}-${global.lang}`,this.change.bind(this)) : <this.state.Md1Inst />
            }
            </div>
          <Footer></Footer>
        </div>
      )
    }
  }
  Article.defaultProps = {
    className: 'article'
  }
  export default Article
