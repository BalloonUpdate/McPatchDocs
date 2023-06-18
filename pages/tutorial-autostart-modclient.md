## 模组方式启动

模组方式启动优点在于对猫反作弊模组友好，不用配置易出错的Java虚拟机参数

但是不足是仅支持部分游戏版本和模组框架，还有能更新的文件范围大大受限，模组文件只能更新除CoreMod、Minecraft核心文件、Minecraft资源文件以外的其它文件

使用教程如下：

首先访问ModClient仓库的[Releases页面](https://github.com/BalloonUpdate/ModClient/releases)，下载合适版本的ModClient模组文件并安装到你的游戏模组目录中，同时请详细阅读Releases页面里的下载说明！

> 目前模组形式一键启动支持的游戏版本有限，如果没有你需要的版本，可以尝试使用别的方式启动

接着将McPatchClient.jar文件移动到`.minecraft`目录里面。如果开启了版本隔离，就要移动到Minecraft游戏版本的核心文件旁边（核心文件通常由两个同名的jar和json文件组成），比如`.minecraft/versions/your-version/`这里

将McPatchClient.jar的文件名后面增加一串文字`-JarClient`（注意大小写），比如`McPatchClient-1.0.5.jar`变成`McPatchClient-1.0.5-JarClient.jar`

> 虽然ModClient是为JarClient设计，但只要在文件名里加上`-JarClient`，McPatch也能正常运行

接下来就是启动游戏测试效果（如果之前有配置过javaagent一键启动请删掉Java虚拟机参数避免重复启动）

---

如果你某些模组文件更新失败，删除失败，但客户端程序日志里又没有明显报错消息，那么你多半是遇到了模组启动优先级的问题。也就是这些更新失败的模组先于BalloonUpdateModLoader模组启动了

遇到这个问题尝试在BalloonUpdateModLoader模组的文件名最前面加一个英文感叹号`!`来提升BalloonUpdateModLoader模组的启动优先级，确保BalloonUpdateModLoader先于要被更新的模组启动

---

ModClient支持给McPatchClient.jar本身做自更新，可以点击[这里](advance-modclientselfupdate.md)阅读详细的教程