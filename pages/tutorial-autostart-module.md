## 模组方式启动

模组方式启动优点在于对猫反作弊模组友好，不用配置易出错的Java虚拟机参数

但是不足是仅支持部分游戏版本和模组框架，还有能更新的文件范围大大受限，模组文件只能更新除CoreMod、Minecraft核心文件、Minecraft资源文件以外的其它文件

### 使用教程

1. 首先确保McPatchClient.jar双击启动没问题
2. 将McPatchClient.jar文件移动到`.minecraft`目录里面。如果开启了版本隔离，就要移动到Minecraft游戏版本的核心文件旁边（核心文件通常由两个同名的jar和json文件组成）
3. 将McPatchClient.jar的文件名后面增加一串文字`-JarClient`（注意大小写奥），比如`McPatchClient-1.0.5.jar`变成`McPatchClient-1.0.5-JarClient.jar`
4. 访问[ModClient仓库的Releases页面](https://github.com/BalloonUpdate/ModClient/releases)下载合适版本的ModClient模组文件并安装到你的游戏模组目录中
   1. 目前模组形式一键启动支持的游戏版本有限，如果没有你需要的版本，可以尝试使用别的方式启动
   2. 虽然ModClient是为JarClient设计，但McPatch做了兼容处理，同样能正常运行
5. 启动游戏测试效果（如果之前有配置过javaagent一键启动请删掉Java虚拟机参数避免重复启动）