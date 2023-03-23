# 自由化部署

McPatch的服务端是分离架构，打包和服务端是分开的，因此这个自带的服务端就不是必须的，你可以使用Nginx，Apache，对象存储，宝塔，等等等等的软件来替代掉这个自带服务端

自带的服务端性能不是特别好，也扛不起高并发，只能用在一些平时在线人数不多的服务器中

这里以对象存储为例，你每打一个新版本，比如10.0，就需要将public目录里面的这三个文件上传到对象存储上：

1. 二进制数据文件(.bin)：`10.0.mc-patch.json`（如果这个文件不存在就不用上传）
2. 元数据文件(.json)：`10.0.mc-patch.bin`
3. 版本列表文件(mc-patch-versions.txt)：此文件每次都需要上传更新（并刷新缓存，如果是CDN的话）

然后，客户端server选项要这样填写：

1. 首先拿到“版本列表文件(mc-patch-versions.txt)”的URL，比如`https://duixiangcunchu.com/some-folder/mc-patch-versions.txt`
2. 在浏览器打开这个URL，确认能顺利访问之后，删除URL末尾的`/mc-patch-versions.txt`部分，变成这样`https://duixiangcunchu.com/some-folder`
3. 然后粘贴进客户端配置文件的server选项后面

