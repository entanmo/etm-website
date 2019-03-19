import React from 'react';

import Header from '../../components/header';
import Footer from '../../components/footer';
import Clock from '../../components/clock';
import Section1 from '../../components/time-item';
import Section2 from '../../components/time-api';
import Section3 from '../../components/time-qr';


import './style/index.less';

import icon1 from './image/1.png';
import title1 from './image/title1.png';
import icon2 from './image/2.png';
import title2 from './image/title2.png';
import icon3 from './image/3.png';
import title3 from './image/title3.png';
import icon4 from './image/4.png';
import title4 from './image/title4.png';
import icon5 from './image/5.png';
import title5 from './image/title5.png';

const list =[
  {
    'icon':icon1,
    'text':'时间塔',
    'title':title1,
    'bgc':'#151524',
    'info':'「时间塔」利用 En-Tan-Mo 区块链的链上信息作为随机种子，通过串行计算、混沌映射、哈希碰撞、延时叠加等一系列设计，使得最终随机序列不能被单个输入参数改变，从而得到一个均匀分布、不可篡改、大众可以参与验证的量子随机数发生器。',
    'info1':'「时间塔」用广播塔的形式为全球所有的大学及科研机构提供免费的、随时可用的、永不消亡的、量子级的真随机源，而这也是正是「时间塔」名字的由来。'
  },{
    'icon':icon2,
    'text':'量子通信中的随机数',
    'title':title2,
    'bgc':'#041620',
    'info':'在量子通信中，量子密钥分发是量子密码学的核心，其无条件安全性是由量子力学的防窃听信道和一次一密系统两方面保证的，一次一密系统要求永不重复使用密码本，即要求真随机码序列。在实际量子密钥分发系统中，量子密钥在本质上是从随机码序列中提取出来的，收发双方需要使用这个随机码来制备和随机检测单光子的量子态，为了使探测结果不相关，这个随机码必须是真随机的，并且不能重复，即在量子密钥分发中只有使用真随机数才能保证密钥的无条件安全性。',
    'info1':'因此，研发超高速的高性能随机数发生器已经成为世界各国科研工作者关注的课题之一。'
  },{
    'icon':icon3,
    'text':'量子随机数发生器',
    'title':title3,
    'info':'量子随机数发生器利用了微观世界中大量量子活动的不确定来产生随机数，具有真正的不确定性，而且量子数量巨大，能够产生吉比特级别的随机数，可以为量子密钥分发提供可靠的随机数来源，是当前随机数产生器研究的热点方向。但是，微观量子过于微小，对其进行观测需要高精密的仪器，代价巨大，而且在测量过程中引入的噪声也会干扰量子的行为，导致结果不是真正的随机。',
    'info1':'在宏观世界中，如果从宇宙的视角来看，人类也只是一个个量子而已，人类的行为由个体的自由意志控制，不受物理定律的控制。因此，人类的行为也是具有真随机性的，大量人类行为的结果，可以作为真随机源使用。区块链作为一种以用户共识为基础的应用，是大量用户自由交易的结晶，天然就具有随机性，而且区块链数据具有不可篡改的特性，所有数据都记录在链上，可供用户来检验。区块数据是以大量用户交易来产生的，个人行为尚不可完全预测，大量用户的交易行为就更不可预测了，因此区块链数据可以看作是宏观世界的量子随机源。'
  },{
    'icon':icon4,
    'text':'为什么是En-Tan-Mo',
    'title':title4,
    'bgc':'#041620',
    'info':'En-Tan-Mo 区块链实现 3 秒出块，能够每隔 3 秒就输出一个随机种子，那么 En-Tan-Mo 「时间塔」的随机数将满足绝大多数随机数应用的需求，而比特币和以太坊由于其出块速度慢，产生随机数的速率过低，作为量子随机源是不合格的。更为重要的，随着 En-Tan-Mo 区块链侧链应用的开展，En-Tan-Mo 区块链随机种子数据将以指数级别增长，从而达到吉比特级别的随机数产生速度，从而为量子通信中的密钥系统提供丰富的随机数来源。因此，基于 En-Tan-Mo 区块链技术随机数发生器将具有广泛的科学研究及实际应用前景。',
    'info1':''
  },{
    'icon':icon5,
    'text':'免费提供给大学及科研机构使用',
    'title':title5,
    'bgc':'#111111',
    'info':'科学研究需要广泛传播和有效利用，致力于推进区块链技术发展的 En-Tan-Mo 科学家团队在创立之初，就秉承着「源与大众、归于大众」的理念。由于区块链量子随机数发生器在科学研究中有着重大的意义与广泛的实际应用场景，作为相关领域的研究与实践者，En-Tan-Mo 决定将「时间塔」这一区块链量子随机数发生器免费提供给大学及科研机构使用。',
    'info1':'任何大学及科研机构，通过简单的申请，就能够直接使用这一随机源，而无需进行复杂而昂贵的基础建设。'
  },{
    'icon':icon5,
    'title':title5,
    'bgc':'#111111',
    'info':'为了让科研人员可以很方便的调用「时间塔」提供的能力，我们提供了很多 API 供科研人员使用。参考 API 文档，通过简单参数修改，科研人员能够定制随机数的输出规格与频率。同时「时间塔」作为 En-Tan-Mo 的一个独立侧链应用，生成的所有随机数在链上均有记录，保障所有数据可信、可靠、可查。',
    'info1':'*API 相关功能仅供科研使用，且暂未开放，将与 En-Tan-Mo 主网同步上线。'
  }
]

class TimeTower extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state ={
          list:list
        }
    }

    componentWillMount() {
        window.scrollTo(0, 0);
    }

    render() {
        return (
            <div className={this.props.className}>
                <Header history={this.props.history} />
                <Clock />
                <Section1 list={list[0]} history={this.props.history}/>
                <Section1 list={list[1]} history={this.props.history}/>
                <Section3 list={list[2]} history={this.props.history}/>
                <Section1 list={list[3]} history={this.props.history}/>
                <Section1 list={list[4]} history={this.props.history}/>
                <Section2 list={list[5]} history={this.props.history}/>
                <Footer />
            </div>
        );
    }
}

TimeTower.defaultProps = {
    className: 'home-tower',
}

export default TimeTower;
