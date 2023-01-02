## Android平台一键启动

教程这里以澪和HMCLPE作为示例

1. 首先确保McPatchClient在电脑上双击启动没问题
2. 将McPatchClient.jar和配置文件config.yml（如果有）一起复制到游戏目录下，所谓游戏目录就是指.minecraft目录，无论何时，McPatchClient.jar和config.yml都需要放到.minecraft里面，注意是里面不是旁边
   1. 澪的默认路径：`/sdcard/MioLauncher/.minecraft`
   2. HMCLPE的默认路径：`/sdcard/HMCLPE/.minecraft`
   3. 如果你开启了版本隔离，请将McPatchClient的文件移动到Minecraft游戏版本的核心文件旁边（核心文件通常由两个同名的jar和json文件组成，在`.minecraft/version/your-version`目录下）
3. 配置启动参数
   1. 澪：切换到`游戏配置`页面，在游戏参数（JVM参数）的最前面插入一段内容`-javaagent:xxx.jar `（`xxx`换成将McPatchClient.jar的实际的文件名，注意`.jar`的后面还跟着一个空格别漏了）接着点击保存按钮，然后重启澪
   2. HMCLPE：切换到`版本列表`，修改全局游戏设置或者特点版本设置，在Java虚拟机参数的最前面插入一段内容`-javaagent:xxx.jar `（`xxx`换成将McPatchClient.jar的实际的文件名，注意`.jar`的后面还跟着一个空格别漏了），然后点击房子按钮回到主界面
4. 启动游戏测试效果
   1. 澪：请打开日志窗口观察McPatchClient是否运行成功
   2. HMCLPE：截止到撰写教程时未能成功打开日志窗口，只能手动查看HMCLPE的日志文件`/sdcard/Android/data/com.tungsten.hmclpe/files/debug/boat_latest_log.txt`
5. 如果游戏启动后马上闪退，请翻阅日志末尾判断是否是参数配置不正确或者其它原因
6. 如果日志只有短短几行，且有出现这样的内容：`Error opening zip file or JAR manifest missing : McPatchClient-1.0.1.jar`说明启动参数配置不正确，McPatchClient.jar这个文件找不到，请检查是否放到了.minecraft目录下面（开启版本隔离后需要放到游戏核心文件旁边）。，请
7. 如果每一行日志信息的开头都有\[McPatchClient\]的字样，说明此次崩溃是由McPatchClient引起的，这种情况去翻阅常见问题解答就可以解决，如果是其它复杂的情况，请向我报告这个问题

## 优化小提示

Android平台通常使用ARM处理器和LPDDR内存，无论是处理器功耗还是内存带宽都相当有限，所以请尽量控制每次客户端体积大小。不要给游戏加载体积特别大的模组（尤指大小超过50Mb以上），不仅会导致更新过程变长，也会影响Minecraft游戏的启动速度

## 游戏闪退崩溃

虽然McPatchClient可以跑在Android平台上，但是却无法像PC端那样显示更新进度条窗口，一切的更新过程都是在后台进行的

所以当McPatchClient在运行过程中遇到网络问题，或者其它错误时，会主动崩溃掉Minecraft进程！！！这是刻意的设计，不要一看到游戏崩了就感觉天塌下来了一样

如果启动过程中发生闪退或者崩溃，请首先翻阅日志末尾，判断是否是McPatchClient主动使得Minecraft进程崩溃的，还是说是其它原因

如果是McPatchClient主动崩溃，错误信息中会有中文文字很清晰地说明具体是什么原因导致的游戏崩溃。并且每条日志前面都会有`McPatchClient`的字样标明这是一条McPatchClient的日志

如果找不到McPatchClient相关的字样说明是其它原因导致的崩溃，也就是说崩溃和McPatchClient没有直接的关系

如果你不喜欢这种直接崩溃的做法，可以在配置文件里设置`no-throwing`选项来让McPatchClient遇到错误时不打断游戏启动的过程，而不是直接把游戏给崩了
