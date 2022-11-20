## McPatch帮助文档

McPatch是一个Minecraft服务器客户端更新程序，管理端和客户端均支持JVM全平台。

当你服务器客户端发布了新的内容之后，你可以打一个更新包（差异包）放到宝塔，Nginx，Apacha，对象存储，网站主机这些地方让客户端程序自动下载并更新到最新版本。全程无需玩家手动点击，可以自动在游戏启动时更新，随时保持玩家客户端为最新状态。

注意：软件是一个服务端—客户端架构的独立应用程序，并非模组或者资源包或插件。

官方企鹅群：[【更新助手官方群】](https://jq.qq.com/?_wv=1027&k=PqAEtn39) 925057600

## 安装教程

安装McPatch之前，你需要先下载3个Jar文件：

1. McPatchManage.jar：管理端，用来打出新的更新包
2. MiniHttpServer.jar：服务端，用来开启一个HttpServer供客户端下载
3. McPatchClient.jar：客户端，用来更新客户端文件

如果一切妥当，请点击前往[安装教程](manual.md)

教程目录：

+ [客户端常见问题解答](faq-client.md)
+ [管理端常见问题解答](faq-manage.md)
+ [Windows平台一键启动教程](javaagent-windows.md)
+ [Android平台一键启动教程](javaagent-android.md)

如果想了解McPatch的技术细节，请点击[这里](technical-details.md)

