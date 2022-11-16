## Android平台一键启动

教程这里以澪作为示例，其它启动器大同小异

1. 首先确保McPatchClient在电脑上双击启动没问题
2. 将McPatchClient.jar和配置文件（如果有）一起复制到`/sdcard/MioLauncher/xxx.jar`目录下（`xxx`是McPatchClient.jar的实际文件名）
3. 打开澪，切换到`游戏配置`页面，在游戏参数的最前面插入一段JVM参数`-javaagent:/sdcard/MioLauncher/xxx.jar`（`xxx`换成将McPatchClient的实际的文件名）
4. 点击保存按钮，然后重启澪
5. 启动游戏测试效果。如果你要看McPatchClient的工作过程，可以打开澪的日志窗口

## 优化小提示

Android平台通常使用ARM处理器和LPDDR内存，无论是处理器功耗还是内存带宽都相当有限，所以请尽量控制每次客户端体积大小。不要给游戏加载体积特别大的模组（尤指大小超过100Mb以上），不仅会导致更新过程变长，也会影响Minecraft游戏的启动速度

## 游戏闪退崩溃

虽然McPatchClient可以跑在Android平台上，但是却无法像PC端那样显示更新进度条窗口，一切的更新过程都是在后台进行的

所以当McPatchClient在运行过程中遇到网络问题，或者其它错误时，会主动崩溃掉Minecraft进程！！！这是刻意的设计，不要一看到游戏崩了就感觉天塌下来了一样

如果启动过程中发生闪退或者崩溃，请首先翻阅日志末尾，判断是否是McPatchClient主动使得Minecraft进程崩溃的，还是说是其它原因

如果是McPatchClient主动崩溃，错误信息中会有中文文字很清晰地说明具体是什么原因导致的游戏崩溃。并且每条日志前面都会有`McPatchClient`的字样标明这是一条McPatchClient的日志

如果找不到McPatchClient相关的字样说明是其它原因导致的崩溃，也就是说崩溃和McPatchClient没有直接的关系

如果你不喜欢这种直接崩溃的做法，可以在配置文件里设置`no-throwing`选项来让McPatchClient遇到错误时不打断游戏启动的过程，而不是直接把游戏给崩了
