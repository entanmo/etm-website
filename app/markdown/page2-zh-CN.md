# ETM TestNet 2.0 开启公测

ETM 区块链科学

从今年3月技术白皮书发布到 TestNet 1.0 启动，ETM 团队仅用了 6 个月的时间就完成了区块链基础设施的初步建设工作。在过去几个月时间里，ETM 的项目开发进度一直备受瞩目。

经过团队的不懈努力，ETM 主链首轮测试后的调试和优化工作已全部完成，具体优化内容如下：
* 全新的锁仓、投票与权益计算机制
* 新增 TestNet 日志系统，提高开发者效率
* 优化网络节点通信，加入 Socket.io 以降低延迟
* 优化数据库底层，采用性能更高的 better-sqlite3
* 增加缓存优化存储读取速度
* 优化 transactions 处理流程和出块流程

为进一步完善主网，ETM 团队决定启动 TestNet 2.0 公测，为期 7 天，测试时间为 12 月 10 日中午 12:00 至 12 月 17 日中午 12:00 。

![](./md_image/news-pic2.jpg)

目前，ETM 团队已完成招募参与公测的所有矿工，共 228 名，并准备了 60 万枚Token 作为奖励，对于在测试中提出 BUG、建设性意见或者撰写整体技术意见评估报告的矿工都将予以奖励。

此次公测最令人瞩目的就是关于投票机制的测试。众所周知，诸如 ETH、EOS，已成为了少数人的游戏，去中心化荡然无存。矿场、矿池、超级节点才是其中的玩家，大众已无法从中获得设定的收益，这无疑是一种畸形的生态。

为了解决这个问题，促进公链生态的健康发展，ETM一直在探索更好的解决方法，并取得了具有里程碑意义的重要成果。

## 全新的投票机制
### 0到1的质变
一成不变的榜单是社区失去活力的罪魁祸首，ETM 将矿机入选的形式由按排名选取固定的前 101 名，变为由得票占总票数的比例概率抽选，让排名 101 名以后的矿工也有机会入选。

P1 = 0
P2 = X/∑Xn

![](./md_image/news-pic201.jpg)

## 降低寡头权重
寡头在聚集大量财富后形成垄断地位，失衡的权重严重打击了大众的积极性。ETM 用上凸函数代替线性增长，甚至指数级增长的权益，让整个生态更为均衡。。

X = F(T·M)
X：最终权益（票数）
T：初始时间增益系数
M：初始权益（票数）

![](./md_image/news-pic202.jpg)

## 增加散户机会
散户或者投资新人，在一个稳定的系统中很难获得突出的收益。ETM 为小额投票人设定了时间系数的概念，小额权益随时间的变化线性增长，尾部用户也能够突出重围，获得成功。成功的概率随着时间而增加，而在受托人成功出块后减半，不影响大的生态平衡。

时间增益系数每日加 1
T=T+1
1≤T≤32

![](./md_image/news-pic203.jpg)

![](./md_image/news-pic204.jpg)

##UPoS 流程优化

它的工作原理如下：首先，通过上凸函数映射将所有投票人的权益转化为相应的票数；第二步，在每个出块周期选举出 101 个节点出块；第三步，被选中的矿工参与改进后的挖矿博弈（ETM挖矿比比特币挖矿更经济、去中心化程度更高）；最后一步，混沌排序算法随机选中下一位出块矿工，让安全性进一步提升。

![](./md_image/news-pic205.jpg)


## 注意事项

1.  ETM TestNet 2.0公测将于 2018 年 12 月 10 日中午 12:00 正式启动，2018 年 12 月 17 日 12:00 截止；
2.  最新的部署文档地址：[https://github.com/entanmo/etm/blob/testNet/README.zh-CN.md](https://github.com/entanmo/etm/blob/testNet/README.zh-CN.md)   EnTanMo 官方电报群：[https://t.me/entanmo](https://t.me/entanmo)
3.  设备运行正常，连接正常时，能够直接看到 EnTanMo 系统的出块日志；
4.  请确认个人 secret 已写入 config 文件，否则无法出块并获得相应收益；
5.  若机器使用不同的端口，须将本机使用的端口号写进 config，修改第一行的 port，以确保每台矿机的联通;
6.  测试钱包（[wallet.entanmo.com](wallet.entanmo.com)）已随测试网络同时上线，使用 secret 登录，在 “区块生产” 版块，可查看个人相应的收益；
7.  上述操作如有不明确的可参考最新的部署文档。

测试期间，除常规的交易测试、网络测试外，我们也会进行故障测试。由于区块链的冗余特性，这并不会影响到矿工的收益。测试结束后，我们将统计每名矿工的收益，并予以公示。

最后非常感谢所有参与此次测试的矿工对ETM的热情支持！

未来，ETM 团队将会持续专注于区块链底层技术的创新与开发，打造一个高效、均衡、互通、开放、安全，经过科学论证的区块链 3.0 平台。




