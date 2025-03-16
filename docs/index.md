---
title: 文档首页
---

McPatch 是一个给 Minecraft 客户端做文件更新的独立应用程序，目前分为 V1 版本和 V2 版本

各版本的支持情况如下：

| 版本分支 | 维护状态 | 客户端最新版本 | 服务端最新版本 | 最近更新 | Windows | Mac OS | Linux | Android |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| [V1](/docs/v1-old/start.md) | 稳定版 | 1.1.13 | 1.1.15 | 24年5月 | ✅ | ✅ | ✅ | ✅ |
| [V2](/docs/v2/start.md) | 测试版 | 2.0.0 | 2.0.3 | 25年2月 | ✅ | ✅ | ✅ | ✅ |

- [V1 版本文档](/docs/v1-old/start.md)
- [V2 版本文档](/docs/v2/start.md)

注：V2版本需要使用Jar版客户端才可以实现全版本覆盖，使用Exe版客户端只能支持windows系统

注：V2 版本与 V1 版本无法共存或互通，如需升级到 V2 版本，请依照 V2 版本文档重新部署

:::warning

本软件完全开源免费下载和使用，如果你是花钱购买到的，请立即退款。

:::

---

## 发行说明

我们一共发布了2个系列的软件作品。分别是“原版更新助手”系列和“Mcpatch”系列。

相关旧版下载链接在对应版本介绍的下面，如果你发现某些文件找不到，可以到这里来找找，这里应该会比较全 https://pan.baidu.com/s/1d3TtyY

## “Mcpatch”系列

### McPatch v2

发布于2024年，是对v1版本的重写，修复了网络限速和窗口无响应问题，同时大幅提升性能和简化使用流程，使用难度最低，是目前主推的版本

链接：[教程文档](https://balloonupdate.github.io/McPatchDocs/docs/v2)、[加载器](https://github.com/BalloonUpdate/McPatch2Loader/releases)、[管理端](https://github.com/BalloonUpdate/McPatch2/releases)、[新客户端](https://github.com/BalloonUpdate/Mcpatch2JavaClient/releases)、[旧客户端](https://github.com/BalloonUpdate/Mcpatch2RustClient/releases)

### McPatch v1

发布于2022年，采用差异式更新，所以无需编写更新规则，这降低了使用门槛，也方便做静态分发，是综合体验最好的版本

归档链接：[教程文档](https://balloonupdate.github.io/McPatchDocs/docs/v1-old/start)、[动态加载器](https://github.com/BalloonUpdate/DynamicLoader/releases)、[MiniHttpServer服务端](https://github.com/BalloonUpdate/MiniHttpServer/releases)、[管理端](https://github.com/BalloonUpdate/McPatchManage/releases)、[客户端](https://github.com/BalloonUpdate/McPatchClient/releases)

## “原版更新助手”系列

### 3.0版本和4.0版本

发布于2021年，也叫JarClient或者ExeClient，支持Jar和Electron双版本客户端和支持正则和glob编写更新规则，同时还有一大堆周边配套工具，是我维护起来的最累的版本

归档链接：[教程文档 v3.x](https://github.com/BalloonUpdate/Docs/tree/v3.2)、[教程文档 v4.x(建议看离线版)](https://github.com/BalloonUpdate/Docs/tree/main)、[离线版教程文档 v4.x(推荐)](https://github.com/BalloonUpdate/Docs/releases)、[PHP服务端](https://github.com/BalloonUpdate/PhpServer/releases/download/archive/php.server-4.2.zip)、[单文件服务端](https://github.com/BalloonUpdate/LittleServer/releases)、[服务端单文件图形化增强](https://github.com/BalloonUpdate/BalloonServer/releases)、[静态服务端整合包](https://github.com/BalloonUpdate/StaticServerForPages/releases)、[规则编辑器](https://github.com/BalloonUpdate/RuleEditorServer/releases)、[Exe客户端](https://github.com/BalloonUpdate/ExeClient/releases)、[Forge模组版(加载器)](https://github.com/BalloonUpdate/ModClient/releases)、[Jar客户端](https://github.com/BalloonUpdate/JarClient/releases)（已过时不推荐使用）

### 2.0版本

发布于2020年，改为使用Python编程语言加qt/webview的方式制作界面，开始支持http协议和对象存储，后因误报率高停止维护

归档链接：[教程文档](https://github.com/BalloonUpdate/Docs/tree/v2.8.4)、[PHP服务端](https://github.com/BalloonUpdate/PhpServer/releases/download/archive/php.server-2.8.zip)、[客户端](https://github.com/BalloonUpdate/Launcher/releases)、[热更新包](https://github.com/BalloonUpdate/Hotupdate/releases)、[小工具](https://github.com/BalloonUpdate/Tool/releases)（已过时不推荐使用）

### 1.0版本

发布于2016年，当时叫做ClientUpdater和FileSA。服务端基于Bukkit插件制作，有专门的规则编辑器，使用私有更新协议，后从ClientUpdater改名为FileSA

归档链接：[食用方法](https://github.com/BalloonUpdate/updater/blob/master/%E7%89%88%E6%9C%AC%E5%8F%91%E5%B8%83%E5%BD%92%E6%A1%A3/2020%E5%B9%B41%E6%9C%8828%E6%97%A5%E6%9B%B4%E6%96%B0/updater%E8%AF%A6%E7%BB%86%E7%9A%84%E9%A3%9F%E7%94%A8%E6%96%B9%E6%B3%951.2.2.docx)、[全部文件](https://github.com/BalloonUpdate/updater/tree/master/%E7%89%88%E6%9C%AC%E5%8F%91%E5%B8%83%E5%BD%92%E6%A1%A3)（已过时不推荐使用）

