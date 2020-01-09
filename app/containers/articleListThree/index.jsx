import React from 'react';
import { Link } from 'react-router';
import { Spin } from 'antd';
import _ from 'lodash';
import Header from '../../components/header';
import Footer from '../../components/footer';
import './style/index.less';
import intl from 'react-intl-universal';

import AllMd from '../../markdown/js/listThree.js'

class ArticleListThree extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          listAll : [],
          lists : [],
          loading : false,
          show : false
        }
    }
    componentWillMount () {
        window.scrollTo(0, 0);
        for(const [title,detail] of Object.entries(AllMd)){
          this.state.listAll.push(detail)
        }
        this.state.lists = this.state.listAll.slice(0,4);
    }
    componentDidMount () {
      const wrapper =  document.querySelector('#wrapper');
      const item = document.querySelector('.article-item');
      window.onscroll  = _.debounce(() => {
        const scrolDis = document.documentElement.scrollTop || document.body.scrollTop;
        const clientH =  document.body.clientHeight;

        const itemHeight = item.offsetHeight;
        const height = wrapper.offsetHeight + wrapper.offsetTop;
        const diff = Math.abs(clientH - height);
        if(this.state.listAll.length > this.state.lists.length ) {
          if(scrolDis > diff ) {
            this.setState({
              loading: true
            })
            const len = Math.round(height / itemHeight + 2);
            setTimeout(()=> {
                this.setState({
                  lists : this.state.listAll.slice(0,len),
                  loading: false
                })
            },500)
          }
        } else {
          this.setState({
            show:true
          })
        }

      },200)
    }
    componentWillUnmount () {
      window.onscroll = null
    }
    render() {
        return (
            <div className={this.props.className}>
                <Header history={this.props.history}  currentKey={this.currentKey}/>
                <div className={`${this.props.className}-banner ${this.props.className}-banner-style1`}>
                    <p className={`${this.props.className}-banner-desc`}
                        style={{
                            maxWidth: '528px'
                        }}>{intl.get('ARTICLE-DES')}</p>
                </div>
				<div className={`classify`}>
					<div className={`classify-box`}>
						<Link to="/articleList"><div className={`classify-list`}>{intl.get('UPCOMING_EVENTS')}</div></Link>
						<Link to="/articleListTwo"><div className={`classify-list`}>{intl.get('CURRENT_EVENTS')}</div></Link>
						<Link to="/articleListThree"><div className={`classify-list active`}>{intl.get('ETM_SOUND')}</div></Link>
					</div>
				</div>
                <div id="wrapper" className="article-wrapper">
                { this.state.lists.map((item) =>
                    <div   key={item.id} className="article-item">
                        <Link style={{color:'#666'}} to={`articleList/article/${item.path}`}>
                          <div className="title">{item.title}</div>
                        </Link>
                        <p className="time">{item.time}</p>
						<p className="describe">{item.describe}</p>
                    </div>
                    )}
                </div>
                <div>
                  <Spin  tip="Loading..." spinning={this.state.loading} ></Spin>
                  { this.state.show ?
                <div style={{color:'#666',textAlign:'center',marginBottom:'10px'}}>没有更多...</div> : null
                  }
              </div>
                <Footer />
            </div>
        )
    }
}
ArticleListThree.defaultProps = {
    className: 'articleListThree'
}

export default ArticleListThree;
