# 基本教程

一些使用小提示：

1. 熟悉一些计算机相关的知识会让你在使用过程中遇到的坑更少
2. 遇到问题先来常见问题解答找答案，这里收录了大部分常见的报错信息
3. 有过开服经验或者Java开发经验会让你上手的更快

在开始安装McPatch之前，你需要先下载好这3个Jar文件：

1. `McPatchManage.jar`（管理端）：用来打更新包
2. `MiniHttpServer.jar`（服务端）：小白友好的HTTP服务器，用来让客户端下载更新
3. `McPatchClient.jar`（客户端）：用来更新客户端文件

管理端和服务端是装在你的服务器上用来做管理的，客户端是装在整合包里的用来发给玩家的

下载好上面的文件之后，在桌面新建一个目录叫`mp`用来存放McPatch服务端的文件。然后把`McPatchManage.jar`和`MiniHttpServer.jar`复制进去

创建好目录以后就可以前往下一个页面了，将正式开始McPatch的使用教程

小提示：目录不一定非要叫`mp`，你可以随意修改，可以包含中文，也可以到处移动它

---

下面是一些常用的知识导航：

+ Nginx，Apache，网站主机，SFTP，对象存储部署：参考[自由化部署](advance-freedeploy.html)章节
+ 不小心修改了history目录怎么办：参考[不小心修改了history目录](tutorial-notices.md#不小心修改了history目录)章节
+ 如何加密配置文件和版本号文件：参考[加密配置文件和版本号文件](tutorial-notices.md#加密配置文件和版本号文件)