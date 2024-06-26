---
title: 合并更新包
---
:::warning

最新消息：合并更新包功能有缺陷，请不要再使用此功能，会导致太久不更新的玩家漏更新！

此问题受限于更新架构没法修复，但会在未来的 2.0 版本中解决

:::

#### 已知问题1：

如果某个文件在之前的版本中存在，但在参与合并的末尾版本中不存在。合并后会导致此文件无法在客户端被正常删除！

问题表现：大多数情况表现为客户端同时存在一个 mod 的新版本和旧版本两个文件导致冲突

解决办法：若已经出问题：参考[注意事项](../guide/caution.md)页面里面的“怎么删除管理端不存在的文件”。若未出问题：不要使用合并功能

问题原因：在之前版本中存在，但后来被删除的文件在合并时会被认为是没有加入过更新的文件，也就导致这些文件没有被正确的删除

#### 已知问题2：

请勿使用管理端 1.1.12 和更旧的版本进行合并操作，因为严重 bug 会导致合并数据损坏，请升级到管理端 1.1.13 及以上版本再进行合并

### 合并教程

当管理端用的时间长了以后，会积累非常多的版本，不仅占空间，还会增加更新流量。这时就需要更新包合并功能

合并功能有限制，并非可以随意合并，这些限制如下：

1. 仅支持管理端 1.1 或者更高版本
2. 只能从头合并，比如有 `1234567` 这七个版本，只能从最早的1开始往后合并，不能从中间开始
3. 合并后无法再拆分，操作是不可逆的。但合并后的更新包内容完全等价于合并前的更新包

合并方法如下：

1. 启动管理端，输入 `combine` 指令
2. 然后输入要合并多少个版本，比如有 `4567` 这四个版本，输入 3 可以合并 `456` 三个版本
3. 检查无误后输入 `y` 开始正式合并，这个过程需要时间较长，需要耐心等待
4. 然后会提示要你编辑 `changelogs.txt` 文件，来手动合并一下更新记录
5. 编辑好之后按任意键继续，开始输入合并后的新的版本号
   + 注意不能和已有版本号重复，但可以和参与合并的版本号们重复
6. 最后会进行打包操作，打包完成后会提示版本已经合并完成了
