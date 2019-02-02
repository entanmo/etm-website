# 重要 | 你们翘首以盼的ETM主链内测来了(附节点安装指南)

标签 ETM 区块链科学

![](./md_image/news-pic10.jpg)


2018年是区块链技术应用的落地之年，也是整个市场去伪存真、重整行业规范的一年。在当前复杂的大环境之下，只有踏实可靠、坚守初心的团队才能逆风而行、向阳而生。

从今年5月白皮书发布到主链内测，ETM团队仅用短短5个月时间就完成了区块链基础设施的初步建设工作。在过去几个月时间里，ETM的项目开发进度一直备受瞩目。9月中旬，在美国斯坦福大学召开的“中美经济学家金融科技创新论坛”，ETM区块链新技术成为焦点。9月底，ETM“黄金矿工”招募计划一经发布，反响热烈，不到一周即完成矿工招募。

终于，在你们的翘首以盼中，ETM全球内测来了！

北京时间2018年10月12日中午12点
ETM将正式启动主链内测

![](./md_image/news-pic10-main.jpg)

## 关于ETM

En-Tan-Mo， 灵感来源于 Entente（联盟）、Transaction（交易）和 Mobius（莫比乌斯），是基于纳什均衡和价值传递理论的新一代区块链项目。诺贝尔经济学奖得主、理性预期学派领袖托马斯·萨金特教授，诺贝尔物理学奖得主、大一统理论奠基人谢尔顿·格拉肖教授以及来自于美国加州理工大学、美国马里兰大学、法国庞加莱研究所的各领域学者们，将博弈论的研究成果革命性融入区块链中，共同创造了具有 SHD 完备性的 En-TanMo。

在 En-Tan-Mo 世界中，SCV 矿工和 Pareto 矿池，在 Kantorovich 共识机制下相互支撑、相互激励，包容各种区块链与非区块链的应用和社区，帮助所有渴望公平、民主、自由的人们，在区块链带来的去中心化思潮中，均衡的获得属于每个个体的最高权益。

En-Tan-Mo，不仅仅是一个纳什均衡的区块链底层平台，还包含了最丰富的应用和最广泛的社区，甚至包含了严谨的数学论证和丰富的经济学内涵，从而形成了完整的哲学思想和系统。因此，“技术白皮书”的形式难以体现出 En-Tan-Mo 的真正优势，研发团队以资料汇编的形式从世界、哲学、数学、经济、计算、生态等多维度向每一个关注 En-Tan-Mo 的人进行阐述。


## 节点安装指南

### 硬件要求

CPU：奔腾双核及以上
内存：最低4G
磁盘：最低50G
操作系统：Linux，推荐 Ubuntu18.04 桌面版
网络：20M 光纤及以上
显卡要求：POW 算力在 160MHash/s 或者与 6*RX570 相当算力或以上


### 在 Ubuntu 上安装 En-Tan-Mo Mainnet 节点

- 1.下载安装包
  下载并解压安装包，进入相应目录。
   | 注意：路径里不要有中文、特殊符号或者空格。
```bash
   wget http://www.entanmo.com/download/entanmo-ubuntu.tar.gz
    tar zxvf entanmo-ubuntu.tar.gz
    cd entanmo
```
- 2.启动节点
  执行命令 ./entanmod [command]

  命令介绍
  configure: 初始化配置 SQLite3
  start: 在前台启动节点系统，此时控制台(终端)会被节点系统进程独占
  start_daemon: 在后台启动节点系统，此时控制台(终端)不会被节点系统独占
  stop: 停止后台运行的节点系统
  restart: 前台重启节点系统
  restart_daemon: 后台重启节点系统
  status: 查看节点系统是否启动

  首次运行请执行 ./entanmod configure，而后执行./entanmod start

- 3.在 Windows 上安装 En-Tan-Mo Mainnet 节点

  下载安装包: http://www.entanmo.com/download/entanmo-windows.zip

  解压安装包并进入相应目录。
    | 注意：路径里不要有中文、特殊符号或者空格。

  命令介绍
  start: 在前台启动节点系统，此时控制台(终端)会被节点系统进程独占
  start_daemon: 在后台启动节点系统，此时控制台(终端)不会被节点系统独占
  stop: 停止后台运行的节点系统
  restart: 前台重启节点系统
  restart_daemon: 后台重启节点系统
  status: 查看节点系统是否启动

  - 4. 进一步配置

  自定义矿机
  部署好系统后，需要修改相关配置，以保证系统正常运行。在 entanmoconfig 目录下找到 config.json 文件，将 secret 字段，修改为我们提供的内测专用 secret。

  对于多台矿机使用同一个公网 IP 的情况，可以通过端口映射实现，修改 config.json 第一行 port 即可。


```bash
  {
 "port": 4096, //端口号
 "address": "0.0.0.0",
 "publicIp": "",
 "logLevel": "debug",
 "magic": "e81b8a0c",
 "api": {
   "access": {
     "whiteList": []
   }
 },
 "peers": {
   "list": [
     {
       "ip": "52.187.232.98",
       "port":4096
     }
   ],
   "blackList": [],
   "options": {
     "timeout": 4000,
     "pingTimeout":500
   }
 },
 "forging": {
   "secret": [ ""//  双引号内填入个人  secret
   ],
   "access": {
     "whiteList": [
       "127.0.0.1"
     ]
   }
 },
 "loading": {
   "verifyOnLoading": false,
   "loadPerIteration": 5000
 },
 "ssl": {
   "enabled": false,
   "options": {
     "port": 443,
     "address": "0.0.0.0",
     "key": "./ssl/server.key",
     "cert": "./ssl/server.crt"
   }
 },
 "dapp": {
   "masterpassword": "ytfACAMegjrK",
   "params": {}
 }
}
指定工作显卡
对于有集显，或者有多种显卡的设备，需要修改 entanmoconfigminer-cfg.json，将 platformId 的值修改为 1，以指定独立显卡作为工作显卡，以免设备使用低性能显卡工作造成损失。
{
   "enableGPU": true,
   "platformId": 1,
   "localWorkSize": 128,
   "globalWorkSizeMultiplier": 8192,
   "numOfInstances": 10
}
```


查看矿机收益
你可以使用在线钱包查看个人收益：进入 http://wallet.entanmo.com ，使用先前的内测 secret 登录钱包，即可以查看矿机收益。


## 重要预告
- 1.内测结束后，我们将公布内测结果形成内测报告
- 2.我们将定期公布进度报告，一直持续到内测结束


请继续关注ETM团队的更多动态，ETM愿与大家共同打造一个高效、均衡、互通、开放、安全，经过科学论证的区块链3.0平台，携手开创新一代的均衡价值互联体系。诚邀您与我们一同见证这一精彩而令人振奋的旅程！
