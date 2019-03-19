import React from 'react';
import ReactDOM from 'react-dom';
import { hashHistory, Router, Route, IndexRoute } from 'react-router';
import intl from 'react-intl-universal';
import _ from "lodash";
import http from "axios";
import './style/antd-patch.less';
import './style/global.less';
import './style/markdown.less';

const SUPPOER_LOCALES = [
    {
        name: "English",
        value: "en-GB"     //英语(英国) [en-GB]
    },
    {
        name: "简体中文",
        value: "zh-CN"    //中文(简体) [zh-CN]
    },
    {
        name: "繁體中文",
        value: "zh-TW"    //中文(繁体，台湾) [zh-TW]
    },
    {
        name: "Français",
        value: "fr-FR"    //法语(法国) [fr-FR]
    },
    {
        name: "日本の",
        value: "ja-JP"    //日语(日本) [ja-JP]
    },
    {
        name: "русский ",
        value: "ru-RU"    //俄语(俄罗斯) [ru-RU]
    },
    {
        name: "한국어.",
        value: "ko-KR"    //朝鲜语(韩国) [ko-KR]
    }
];

class App extends React.Component {
    state = { initDone: false }

    constructor(props) {
        super(props);
        // this.onSelectLocale = this.onSelectLocale.bind(this);
        document.cookie="lang=en-US";
    }
    componentWillMount(){
      this.loadLocales();
    }
    render() {
        return (
          this.state.initDone &&
          <div>
              {this.props.children}
          </div>
        );
    }

    loadLocales() {
        let currentLocale = intl.determineLocale({
            urlLocaleKey: "lang",
            cookieLocaleKey: "lang"
        });
        if (!_.find(SUPPOER_LOCALES, { value: currentLocale })) {
            currentLocale = "en-GB";
        }

        global.select = currentLocale;
        switch(currentLocale){
            case'zh-CN':
            global.lang = 'zh-CN';
            global.lang_change = 'zh-CN';
            break;
            case'zh-TW':
            global.lang = 'en-GB';
            global.lang_change = 'zh-TW';
            break;
            default:
            global.lang = 'en-GB';
            global.lang_change = 'en-GB'
        }
        // console.log("main:" + global.lang);
        http
            .get(`locales/${currentLocale}.json`)
            .then(res => {
                return intl.init({
                    currentLocale,
                    locales: {
                        [currentLocale]: res.data
                    }
                });
            })
            .then(() => {
                this.setState({ initDone: true });
            });
    }
}


const ArticleList  = (location, cb) => {
    require.ensure([], require => {
      cb(null, require('./containers/articleList').default);
    }, 'ArticleList');
  };
const Article  = (location, cb) => {
  require.ensure([], require => {
    cb(null, require('./containers/article').default);
  }, 'Article');
};
const Home  = (location, cb) => {
  require.ensure([], require => {
    cb(null, require('./containers/home').default);
  }, 'Home');
};
const Knownledge = (location,cb) => {
	require.ensure([],require => {
		cb(null,require('./containers/knownledge').default)
	},'Knownledge')
}
const Ecosystem = (location,cb) => {
	require.ensure([],require => {
		cb(null,require('./containers/ecosystem').default)
	},'Ecosystem')
}
const Consensus = (location,cb) => {
	require.ensure([],require => {
		cb(null,require('./containers/consensus').default)
	},'Consensus')
}
const Moore = (location,cb) => {
	require.ensure([],require => {
		cb(null,require('./containers/moore').default)
	},'Moore')
}
const Activity = (location,cb) => {
	require.ensure([],require => {
		cb(null,require('./containers/activity').default)
	},'Activity')
}
const GoldenMiner = (location,cb) => {
	require.ensure([],require => {
		cb(null,require('./containers/goldenMiner').default)
	},'GoldenMiner')
}

class RouteMap extends React.Component {
    render() {
        return (
          <Router history={this.props.history}>
            <Route path='/' component={App}>
              <IndexRoute getComponent={Home} />
              <Route path='knownledge(/:tabKey)' getComponent={Knownledge} />
              <Route path='ecosystem(/:tabKey)' getComponent={Ecosystem} />
              <Route path='consensus(/:tabKey)' getComponent={Consensus} />
              <Route path='moore' getComponent={Moore} />
              <Route path='activity' getComponent={Activity} />
              <Route path='goldenMiner' getComponent={GoldenMiner} />
              <Route path='articleList' getComponent={ArticleList} />
               <Route path='articleList/article(/:name)' getComponent={Article} />
            </Route>
          </Router>
        );
    }
}

ReactDOM.render(
    <RouteMap history={hashHistory} />,
    document.getElementById('App')
);
