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

## ModClient的自更新教程

借助ModClient的特殊能力，可以实现给McPatchClient.jar本身做自更新（即使McPatchClient.jar本身是不支持的）

1. 在管理端的`workspace`目录里添加新版本的客户端程序文件（文件位置就放在旧版的旁边）
2. 在管理端的添加一个名为`BalloonUpdateFileName.txt`的文件，位置就在`.minecraft`目录里
3. 打开`BalloonUpdateFileName.txt`文件，输入旧版本客户端的文件名，然后保存关闭
   + 后续的更新时旧版本的文件名都需要往`BalloonUpdateFileName.txt`文件里写一份，一行一个
4. 最后打包新版本