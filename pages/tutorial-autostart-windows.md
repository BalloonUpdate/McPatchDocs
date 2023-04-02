# Windows平台一键启动

1. 首先确保McPatchClient.jar双击启动没问题
2. 将McPatchClient.jar文件移动到`.minecraft`目录里面（注意是里面不是旁边）
3. 打开启动器，找到JVM（Java虚拟机）参数。在现有内容的最前面插入一段`-javaagent:xxx.jar `（`xxx`换成McPatchClient.jar的实际的文件名，注意`.jar`的后面还跟着一个空格别漏了）
4. 启动游戏测试效果

如果游戏无法启动，并且提示找不到McPatchClient.jar的文件名，而你又十分确定文件名没有写错时。记得看看你是不是开启了版本隔离，如果是，请将McPatchClient的文件移动到Minecraft游戏版本的核心文件旁边（核心文件通常由两个同名的jar和json文件组成，在`.minecraft/version/your-version`目录下）

如果配置之后McPatchClient并没有随Minecraft启动（游戏正常启动也没有闪退啥的），请检查是否是开启了启动器的`版本特定设置`导致配置实际并未生效

---

McPatch客户端支持通过hmcl的下载整合包功能在线安装，点击[这里](advance-spellstart.md)来阅读详细教程

## 游戏崩溃

当McPatchClient在运行过程中遇到网络问题，或者其它错误时，***会主动崩溃掉Minecraft进程！*** 这是刻意的设计

如果启动过程中发生闪退或者崩溃，请首先***翻阅日志末尾***，判断是否是McPatchClient主动使得Minecraft进程崩溃的，或者其他原因所导致

如果排查日志后发现确实是McPatchClient主动崩溃所致，错误信息中会有中文文字很清晰地说明具体是什么原因导致的游戏崩溃。并且每条日志前面都会有`McPatchClient`的字样标明这是一条McPatchClient的日志

当然，在McPatchClient主动崩溃Minecraft进程之前，会有非常显眼的错误提示框告诉你发生什么错误，错误可能是什么原因导致的。当你点击确定或者取消按钮以后，表明你已经知晓了是McPatchClient报告的错误之后，McPatchClient才会真正崩溃掉Minecraft进程。

如果你不喜欢这种直接崩溃的做法，可以在配置文件里设置`no-throwing`选项来让McPatchClient遇到错误时不打断游戏启动的过程，而不是弹出崩溃Minecraft询问框。但这样做可能会导致一些莫名其妙的问题（比如有模组未更新就强行进入游戏会导致无法进服）
