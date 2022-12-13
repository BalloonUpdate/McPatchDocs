## Windows平台一键启动

1. 首先确保McPatchClient.jar双击启动没问题
2. 将McPatchClient.jar文件移动到`.minecraft`目录下面
3. 打开启动器，找到JVM（Java虚拟机）参数。在现有内容的最前面插入一段`-javaagent:xxx.jar`（`xxx`换成McPatchClient.jar的实际的文件名）
4. 启动游戏测试效果

如果游戏无法启动，并且提示找不到McPatchClient.jar的文件名，而你又十分确定文件名没有写错时。记得看看你是不是开启了版本隔离，如果是，请将McPatchClient的文件移动到Minecraft游戏版本的核心文件旁边（核心文件通常由两个同名的jar和json文件组成，在`.minecraft/version/your-version`目录下）

## 游戏崩溃

当McPatchClient在运行过程中遇到网络问题，或者其它错误时，会主动崩溃掉Minecraft进程！！！这是刻意的设计，不要一看到游戏崩了就感觉天塌下来了一样

如果在使用McPatchClient时遇到游戏闪退，请翻阅一下启动器报告的错误日志，看看日志的末尾，判断是否是McPatchClient主动使得Minecraft进程崩溃的，还是说是其它原因

当然，在McPatchClient主动崩溃Minecraft进程之前，会有非常显眼的错误提示框告诉你发生什么错误了，错误可能是什么原因导致的。当你点击确定或者取消按钮以后，表明你已经知晓了是McPatchClient报告的错误之后，McPatchClient才会真正崩溃掉Minecraft进程

如果你不喜欢这种直接崩溃的做法，可以在配置文件里设置`no-throwing`选项来让McPatchClient遇到错误时不打断游戏启动的过程，而不是直接把游戏给崩了