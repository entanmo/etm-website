import React from 'react';
import ReactDOM from 'react-dom';
import { hashHistory, Router, Route, IndexRoute } from 'react-router';
import intl from 'react-intl-universal';
import _ from "lodash";
import http from "axios";

import Home from './containers/home';
import Knownledge from './containers/knownledge';
import Ecosystem from './containers/ecosystem';
import Consensus from './containers/consensus';
import Moore from './containers/moore';

import './style/antd-patch.less';
import './style/global.less';

const SUPPOER_LOCALES = [
    {
      name: "English",
      value: "en-US"
    },
    {
      name: "简体中文",
      value: "zh-CN"
    }
  ];

class App extends React.Component {
    state = {initDone: false}

    constructor(props) {
        super(props);
        this.onSelectLocale = this.onSelectLocale.bind(this);
      }

    componentDidMount() {
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
            currentLocale = "en-US";
            // currentLocale = "zh-CN";
          }
      
          http
            .get(`locales/${currentLocale}.json`)
            .then(res => {
              console.log("App locale data", res.data);
              // init method will load CLDR locale data according to currentLocale
              return intl.init({
                currentLocale,
                locales: {
                  [currentLocale]: res.data
                }
              });
            })
            .then(() => {
              // After loading CLDR locale data, start to render
              this.setState({ initDone: true });
        });
    }

    renderLocaleSelector() {
        return (
          <select onChange={this.onSelectLocale} defaultValue="">
            <option value="" disabled>Change Language</option>
            {SUPPOER_LOCALES.map(locale => (
              <option key={locale.value} value={locale.value}>{locale.name}</option>
            ))}
          </select>
        );
    }
    
      onSelectLocale(e) {
        let lang = e.target.value;
        location.search = `?lang=${lang}`;
    }

    
}

class RouteMap extends React.Component {
    render() {
        return (
            <Router history={this.props.history}>
                <Route path='/' component={ App }>
                    <IndexRoute component={ Home } />
                    <Route path='knownledge(/:tabKey)' component={ Knownledge } />
                    <Route path='ecosystem(/:tabKey)' component={ Ecosystem } />
                    <Route path='consensus(/:tabKey)' component={ Consensus } />
                    <Route path='moore' component={ Moore } />
                </Route>
            </Router>
        );
    }
}

ReactDOM.render(
    <RouteMap history={hashHistory} />,
    document.getElementById('App')
);