---
title: 安装客户端
---
:::tip

首先推荐你把客户端先整个备份一遍，以避免调试更新时误删了重要的文件（尤其是第一次使用 McPatch 时）

:::

我们把客户端程序文件复制到你客户端的 `.minecraft` 目录的旁边（紧挨着）

用压缩软件打开客户端程序文件，把配置文件 `mc-patch-config.yml` 或者 `config.yml` 解压到旁边，并打开编辑

接着把在“远程访问测试”或者“本地访问测试”中提到的链接（优先使用前者提到的链接），粘贴到配置文件的 `server` 选项后面，然后保存关闭（具体使用哪一个链接取决于你的部署环境是局域网还是广域网）

:::warning

如果你发现你没有这个链接，那么你很可能是跳过了访问测试的步骤，这个步骤很重要请不要跳过去

:::

接着双击运行客户端主程序，此时会开始更新刚刚打包的第一个版本

更新完成后检查一下 `mc-patch-version.txt` 这个文件的内容，确保是 `1.0` 或者你刚创建的版本号

到此，客户端就算配置成功了。

---

最后，请请仔细阅读[注意事项](../guide/caution.md)，这里写的都是最、最、最常见的问题，看过后帮你少踩很多坑！内容包括但不限于：

1. 不小心发错版本怎么办？
2. 为什么个别文件会更新失败？
3. 不小心修改了 history 目录怎么还原？
4. 怎么加密配置文件？

:::tip

如果你确定配置文件已经调试完成，不会再改它，可以把这个文件打包回 `McPatchClient.jar` 里，然后删除外部的配置文件，程序会自动读取 Jar 内部的配置文件，以保持目录整洁

:::
