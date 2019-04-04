import React from 'react';
import { Menu, Dropdown, Button, Icon } from 'antd';
import ConstDefines from '../../models/const-defines';

import './style/index.less';
import intl from 'react-intl-universal';
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
class Header extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            mediaQuery: false,
            collapse: true,
            reload:false
        };

        let selectedKey = this.props.currentKey;

        this.selectedKeys = [];
        if (selectedKey) {
            this.selectedKeys = [selectedKey];
        }
    }

    onMediaQuery() {
        let clientWidth = document.documentElement.clientWidth;
        let currentMediaQuery = true;
        if (clientWidth <= ConstDefines.MediaQuery.xs) {
            currentMediaQuery = true
        } else if (clientWidth <= ConstDefines.MediaQuery.sm) {
            currentMediaQuery = true
        } else if (clientWidth <= ConstDefines.MediaQuery.md) {
            currentMediaQuery = true
        } else if (clientWidth <= ConstDefines.MediaQuery.lg) {
            currentMediaQuery = true
        } else if (clientWidth <= ConstDefines.MediaQuery.xl) {
            currentMediaQuery = false
        } else if (clientWidth <= ConstDefines.MediaQuery.xxl) {
            currentMediaQuery = false
        }

        if (this.state.mediaQuery !== currentMediaQuery) {
            this.setState({
                mediaQuery: currentMediaQuery
            })
        }
    }

    componentWillMount() {
        if (window.matchMedia) {
            const mediaQueryList = window.matchMedia('screen and (min-width: 992px)');
            this.setState({
                mediaQuery: !mediaQueryList.matches
            });

            mediaQueryList.addListener((mediaQueryListEvent) => {
                this.setState({
                    mediaQuery: !mediaQueryListEvent.matches,
                });
            })

        } else {
            window.addEventListener('resize', () => { this.onMediaQuery() });
            this.onMediaQuery();
        }
    }

    render() {
        let menuMode = 'horizontal', collapseStyle = '', toggleStyle = '';
        let padding = 114
        if (this.state.mediaQuery) {
            menuMode = 'inline';
            toggleStyle = 'flex';
            padding = 44;
            if (!this.state.collapse) {
                collapseStyle = this.props.className + '-collapseShow';
            }
        }

        // console.log(`selectedKeys: ${this.selectedKeys}`);
        return (
            <div className={this.props.className}>
                <div className='flex container'>
                    <a className={`${this.props.className}-brand`} href=""></a>
                    {
                        this.state.collapse ?
                            <div className={`${this.props.className}-toggle`}
                                onClick={(...args) => {this.onMenuCollapse(false, ...args)}}>
                                <Icon type='bars' style={{fontSize: '32px', color: '#fff'}}/>
                            </div>:
                            <div className={`${this.props.className}-toggle`}
                                onClick={(...args) => {this.onMenuCollapse(true, ...args)}}>
                                <Icon type='close' style={{fontSize: '32px', color: '#fff'}} />
                            </div>
                    }
                    <div className={`${this.props.className}-collapse ${collapseStyle}`}>
                        <Menu
                            mode={menuMode}
                            onClick={(...args) => { this.onMenuItemClick(...args) }}
                            onSelect={(...args) => { this.onMenuItemSelect(...args) }}
                            selectedKeys={this.selectedKeys.length <=0 ? [] : this.selectedKeys} >
                                <Menu.SubMenu title={intl.get('UNDERSTAND')}>
                                    <Menu.Item key='knownledge-1'>{intl.get('INTRODUCTION')}</Menu.Item>
                                    <Menu.Item key='knownledge-2'>{intl.get('SHD_COMPLETENESS')}</Menu.Item>
                                    <Menu.Item key='knownledge-3'>{intl.get('EQUILIBRIUM')}</Menu.Item>
                                </Menu.SubMenu>
                                <Menu.SubMenu title={intl.get('CONSENSUS')}>
                                    <Menu.Item key='consensus-1'>{intl.get('KANTOROVICH_CONSENSUS')}</Menu.Item>
                                    <Menu.Item key='consensus-2'>{intl.get('CONCEPTUAL')}</Menu.Item>
                                </Menu.SubMenu>
                                <Menu.SubMenu title={intl.get('ECOSYSTEM')}>
                                    <Menu.Item key='ecosystem-1'>{intl.get('CENTRA-DERIVED_CHAINS')}</Menu.Item>
                                    <Menu.Item key='ecosystem-2'>{intl.get('PARALLEL_CHAIN')}</Menu.Item>
                                    <Menu.Item key='ecosystem-3'>{intl.get('CHAIN_ADAPTOR')}</Menu.Item>
                                    <Menu.Item key='ecosystem-4'>{intl.get('SAMRT_CONTRACT')}</Menu.Item>
                                    <Menu.Item key='ecosystem-5'>{intl.get('MILL_MALL')}</Menu.Item>
                                </Menu.SubMenu>
                                <Menu.Item key='moore'>{intl.get('MOORE_ECONOMICS')}</Menu.Item>
                                <Menu.Item key='documents' >{intl.get('DOCUMENTS')}</Menu.Item>
								<Menu.SubMenu title={intl.get('NEWS')}>
								    <Menu.Item key='news-1'>{intl.get('UPCOMING_EVENTS')}</Menu.Item>
								    <Menu.Item key='news-2'>{intl.get('FEATURED_ARTICLE')}</Menu.Item>
								</Menu.SubMenu>
								
                                <Menu.SubMenu className='lang-select' title={this.getViewLang()}>
                                    <Menu.Item key='lang-1'>{SUPPOER_LOCALES[0].name}</Menu.Item>
                                    <Menu.Item key='lang-2'>{SUPPOER_LOCALES[1].name}</Menu.Item>
                                    <Menu.Item key='lang-3'>{SUPPOER_LOCALES[2].name}</Menu.Item>
                                    {/* <Menu.Item key='lang-4'>{SUPPOER_LOCALES[3].name}</Menu.Item> */}
                                    <Menu.Item key='lang-5'>{SUPPOER_LOCALES[4].name}</Menu.Item>
                                    <Menu.Item key='lang-6'>{SUPPOER_LOCALES[5].name}</Menu.Item>
                                    {/* <Menu.Item key='lang-7'>{SUPPOER_LOCALES[6].name}</Menu.Item> */}
                                </Menu.SubMenu>
                        </Menu>
                    </div>
                    {/* {this.renderLocaleSelector()} */}
                </div>
            </div>
        );
    }
    getViewLang (){
        let n=0;
        for(let i=0;i<SUPPOER_LOCALES.length;i++){
            if(SUPPOER_LOCALES[i].value === global.select){
                n=i;
                break;
            }
        }
        return SUPPOER_LOCALES[n].name;
    }

    // renderLocaleSelector() {
    //     return (
    //       <select onChange={this.onSelectLocale}
    //       defaultValue={global.select}
    //       className='langchange'>
    //         {/* <option value="" disabled></option> */}
    //         {SUPPOER_LOCALES.map(locale => (
    //           <option key={locale.value} value={locale.value}>{locale.name}</option>
    //         ))}
    //       </select>
    //     );
    // }

    // onSelectLocale(e) {
    //     let lang = e.target.value;
    //     location.search = `?lang=${lang}`;
    // }

    onMenuCollapse(collapse) {
        this.setState({
            collapse: collapse,
        })
    }
    onMenuItemSelect(event) {
        // console.log('event: ', event);
        if("documents" === event.key){
            let reload = this.state.reload;
            this.setState({
                reload: !reload
            });
            return ;
        }

        this.selectedKeys = [event.key];
        // console.log('current: ', this.selectedKeys);
    }
    onMenuItemClick(event) {
        console.log(this.props)
        switch (event.key) {
            case 'knownledge-1': {
                this.props.history.pushState(null, 'knownledge/0');
                break;
            }

            case 'knownledge-2': {
                this.props.history.pushState(null, 'knownledge/1');
                break;
            }

            case 'knownledge-3': {
                this.props.history.pushState(null, 'knownledge/2');
                break;
            }

            case 'consensus-1': {
                this.props.history.pushState(null, 'consensus/0');
                break;
            }

            case 'consensus-2': {
                this.props.history.pushState(null, 'consensus/1');
                break;
            }

            case 'ecosystem-1': {
                this.props.history.pushState(null, 'ecosystem/0');
                break;
            }

            case 'ecosystem-2': {
                this.props.history.pushState(null, 'ecosystem/1');
                break;
            }

            case 'ecosystem-3': {
                this.props.history.pushState(null, 'ecosystem/2');
                break;
            }

            case 'ecosystem-4': {
                this.props.history.pushState(null, 'ecosystem/3');
                break;
            }

            case 'ecosystem-5': {
                this.props.history.pushState(null, 'ecosystem/4');
                break;
            }
            case 'moore': {
                this.props.history.pushState(null, 'moore');
                break;
            }
            case 'news-1' : {
              this.props.history.pushState(null, 'articleList');
              break;
            }
			case 'news-2' : {
			  this.props.history.pushState(null, 'articleListTwo');
			  break;
			}
            case 'timeTower' : {
              this.props.history.pushState(null, 'timeTower');
              break;
            }
            case 'documents': {
                var pdfTemp =  ((lang)=>{return '../../docs/ETM Science_'+lang+'.pdf'})(global.select);
                window.open(pdfTemp);
                document.getElementsByClassName("ant-menu-item").r
                break;
            }
            case 'lang-1': {
                let lang = SUPPOER_LOCALES[0].value;
                location.search = `?lang=${lang}`;
                break;
            }
            case 'lang-2': {
                let lang = SUPPOER_LOCALES[1].value;
                location.search = `?lang=${lang}`;
                break;
            }
            case 'lang-3': {
                let lang = SUPPOER_LOCALES[2].value;
                location.search = `?lang=${lang}`;
                break;
            }
            case 'lang-4': {
                let lang = SUPPOER_LOCALES[3].value;
                location.search = `?lang=${lang}`;
                break;
            }
            case 'lang-5': {
                let lang = SUPPOER_LOCALES[4].value;
                location.search = `?lang=${lang}`;
                break;
            }
            case 'lang-6': {
                let lang = SUPPOER_LOCALES[5].value;
                location.search = `?lang=${lang}`;
                break;
            }
            case 'lang-7': {
                let lang = SUPPOER_LOCALES[6].value;
                location.search = `?lang=${lang}`;
                break;
            }
        }
    }
}

Header.defaultProps = {
    className: 'header',
}

export default Header;
