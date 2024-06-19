---
sidebar_position: 1
---

# 自定义部署

McPatch的后台是服务端+管理端的分离架构，以方便你将打包过程和文件分发过程分离

分离后有许多好处，比如更换性能更强的HTTP服务端程序，比如Nginx，Apache，对象存储。同时也方便大佬们进行魔改（自带服务端性能没有经过特别优化，只能用在一些平时在线人数不多的服务器或者本地调试场景中）

自由化部署的大致原理就是将整个public目录下的所有文件（不包括public目录本身）上传到对象存储或者自己的服务器上去

这里以对象存储为例，你每打一个新版本更新包，比如1.1，就需要将public目录里面的这些文件上传到对象存储或者你的服务器上公开提供HTTP服务：

如果是1.0版本的管理端，需要上传这些文件：

1. 二进制数据文件(.bin)：`1.2.mc-patch.json`（如果这个文件不存在就不用上传）
2. 元数据文件(.json)：`1.2.mc-patch.bin`
3. 版本列表文件(mc-patch-versions.txt)：此文件每次都需要上传更新（并刷新缓存，如果是CDN的话）

如果是1.1版本的管理端，需要上传这些文件：

1. 更新包文件(.zip)：`1.2.mcpatch.zip`
2. 版本列表文件(versions.txt)：此文件每次都需要上传更新（并刷新缓存，如果是CDN的话）

然后，客户端server选项要这样填写：

1. 首先拿到“版本列表文件(mc-patch-versions.txt)”的URL，比如`https://duixiangcunchu.com/some-folder/mc-patch-versions.txt`（或者`versions.txt`）
2. 在浏览器打开这个URL，确认能顺利访问之后，删除URL末尾的`/mc-patch-versions.txt`（或者`versions.txt`）部分，变成这样`https://duixiangcunchu.com/some-folder`
3. 然后粘贴进客户端配置文件的server选项后面

