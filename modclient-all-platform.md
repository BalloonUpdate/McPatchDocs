## 模组形式一键启动

除了最为通用的JavaAgent一键启动方式以外，McPatch也支持模组形式的一键启动，优点在于对猫反作弊模组友好，和不用配置Java虚拟机参数

但也有一些缺点：

1. 仅支持部分游戏版本和模组框架
2. 能更新的文件范围大大受限，模组文件只能更新非CoreMod
   1. 因为游戏启动时大部分文件都是不能更新的，文件运行中Windows禁止读写操作

如果你并不是为解决猫反作弊模组冲突的目的，那么请使用通用的JavaAgent方式一键启动，体验会更好

### 使用教程

1. 首先确保McPatchClient.jar双击启动没问题
2. 将McPatchClient.jar文件移动到`.minecraft`目录下面。如果开启了版本隔离，就要移动到Minecraft游戏版本的核心文件旁边（核心文件通常由两个同名的jar和json文件组成）
3. 将McPatchClient.jar的文件名后面增加一串文字`-JarClient`（注意大小写敏感），比如`McPatchClient-1.0.5.jar`变成`McPatchClient-1.0.5-JarClient.jar`
4. 访问[ModClient仓库的Releases页面](https://github.com/BalloonUpdate/ModClient/releases)下载合适版本的ModClient模组文件并安装到你的游戏模组目录中
   1. 虽然ModClient是为JarClient设计，但McPatch做了兼容处理，同样能正常运行
5. 启动游戏测试效果（如果之前有配置过JavaAgent一键启动请删掉Java虚拟机参数避免重复启动）