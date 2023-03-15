## Windows平台一键启动

1. 首先确保McPatchClient.jar双击启动没问题
2. 将McPatchClient.jar文件移动到`.minecraft`目录里面（注意是里面不是旁边）
3. 打开启动器，找到JVM（Java虚拟机）参数。在现有内容的最前面插入一段`-javaagent:xxx.jar `（`xxx`换成McPatchClient.jar的实际的文件名，注意`.jar`的后面还跟着一个空格别漏了）
4. 启动游戏测试效果

如果游戏无法启动，并且提示找不到McPatchClient.jar的文件名，而你又十分确定文件名没有写错时。记得看看你是不是开启了版本隔离，如果是，请将McPatchClient的文件移动到Minecraft游戏版本的核心文件旁边（核心文件通常由两个同名的jar和json文件组成，在`.minecraft/version/your-version`目录下）

如果配置之后McPatchClient并没有随Minecraft启动（游戏正常启动也没有闪退啥的），请检查是否是开启了启动器的`版本特定设置`导致配置实际并未生效。

## 配置URL咒语启动，云端配置下发以及配置自更新（可选）
前置动作：
1. 将`config.yml、McPatchClient.jar、hmclversion.cfg`放在 `workspace/`内，一定要按照您想要的配置修改config.yml。
2. 打包一个新版本，并按照普通更新流程更新。
3. 发布更新。

---

前提条件：

您对客户端打开了版本隔离。
您使用 https、http 任意一个协议共享文件。
您明白且知道如何教会玩家使用在线导入整合包功能。
您很确定您的玩家会使用hmcl。

---

概念解释：

- 目录=文件夹=📁
- 根目录：某目录结构的起点。
- 路径：告诉计算机如何找到某目录或文件的一串字符。

### hmcl

1. 首先准备好已正确安装 McPatchClient 的客户端，**需要开启版本隔离**。
2. 打开客户端游戏版本单独设置，填写JVM虚拟机选项，如图：
![照抄是学不会的，请您认真思考。](https://www.hualigs.cn/image/6411f6297cc3f.jpg)
3. 如您没有将config.yml放置在客户端文件夹，请补上它。
4. 导出整合包，信息可按照您的喜好填写，但您**必须勾选**下列文件，这是咒语能否起效的关键！tips:打开包含启动器后，可以让玩家直接下载整合包并解压，但也失去了在线导入的能力，您可以选择另外导出一份不含启动器的整合包，并一起上传。

这是需要的文件列表：
![想要生效，必须勾选！](https://www.hualigs.cn/image/6411fd659499b.jpg)
5. 在存放更新文件的根目录，新建一个目录，上传刚刚导出的整合包。
6. 组装您的在线整合包url，格式为`http或https://您存放整合包的网站服务器地址:端口/您的更新地址`，例如`https://download.example.com/somefile/your-package.zip`
7. 在您编写客户端安装教程时告诉玩家使用此url,hmcl会完全接管安装。
## 游戏崩溃

当McPatchClient在运行过程中遇到网络问题，或者其它错误时，***会主动崩溃掉Minecraft进程！*** 这是刻意的设计，不要慌张，请仔细检查您的配置是否正确，云端文件是否完整。

如果在使用McPatchClient时遇到游戏闪退，请翻阅一下启动器报告的错误日志，**仔细阅读**日志的末尾，判断是否是McPatchClient主动使得Minecraft进程崩溃的，或者其他原因？

如果您**很确定**发现崩溃原因就是因为McPatchClient程序本身，而不是网络问题，也不是我们**不保证兼容的反作弊系统**导致，请您将崩溃日志上传到[这里](https://paste.opensuse.org)，并向McPatchClient的仓库提出issue,附上贴好的崩溃日志，详细描述您遇到的问题，并说明是否可重复触发，我们将会着手分析。

当然，在McPatchClient主动崩溃Minecraft进程之前，会有非常显眼的错误提示框告诉你发生什么错误，错误可能是什么原因导致的。当你点击确定或者取消按钮以后，表明你已经知晓了是McPatchClient报告的错误之后，McPatchClient才会真正崩溃掉Minecraft进程。

如果你不喜欢这种直接崩溃的做法，可以在配置文件里设置`no-throwing`选项来让McPatchClient遇到错误时不打断游戏启动的过程，而不是弹出崩溃Minecraft询问框，但可能会导致非预期的情况。
