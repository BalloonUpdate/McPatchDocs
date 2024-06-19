---
sidebar_position: 9
---

# 以双击启动客户端

在某些场景中需要让McPatch客户端能够在玩家的电脑上被双击启动。但玩家电脑上jar文件普遍都是以压缩软件打开的，或者PATH变量里找不到java.exe，因此无法通过双击启动。此时可以借助bat文件来实现双击启动客户端的目的。此功能也可以利用在PCL的自定义界面上来实现点击更新按钮后，调用命令行启动McPatch客户端

首先我们需要下载`Jar启动助手`，然后将`java-locator.exe`，`run.bat`，`start.bat`这三个文件复制到McPatch客户端或者动态加载器旁边

然后编辑`run.bat`，将里面的`DynamicLoader-1.1.jar`改成你的客户端文件名，或者动态加载器的文件名，这样就指定好了要启动的Jar文件，保存关闭

双击启动`run.bat`即可看到效果
