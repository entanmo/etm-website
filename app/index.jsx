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
import Activity from './containers/activity';

import './style/antd-patch.less';
import './style/global.less';

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
        // console.log(props)
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

class RouteMap extends React.Component {
    render() {
        return (
            <Router history={this.props.history}>
                <Route path='/' component={App}>
                    <IndexRoute component={Home} />
                    <Route path='knownledge(/:tabKey)' component={Knownledge} />
                    <Route path='ecosystem(/:tabKey)' component={Ecosystem} />
                    <Route path='consensus(/:tabKey)' component={Consensus} />
                    <Route path='moore' component={Moore} />
                    <Route path='activity' component={Activity} />
                </Route>
            </Router>
        );
    }
}

ReactDOM.render(
    <RouteMap history={hashHistory} />,
    document.getElementById('App')
);