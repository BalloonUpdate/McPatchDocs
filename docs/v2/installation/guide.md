---
title: 安装教程
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## 一、下载文件

安装需要客户端和管理端，可以从这些地方下载：

+ Github Releases（[管理端](https://github.com/BalloonUpdate/McPatch2/releases)、[jar客户端](https://github.com/BalloonUpdate/Mcpatch2JavaClient/releases)、[exe客户端](https://github.com/BalloonUpdate/Mcpatch2RustClient/releases)）
+ [hoshiroko.com](https://mcpatch.hoshiroko.com)（感谢[@薄荷の尾巴提供](https://hoshiroko.com)）

管理端程序的文件名通常叫`mcpatch-manager`或者直接简写为`m`。是用来打更新包和进行日常维护工作的。同时也提供一个内置的开箱即用服务端方便上手。管理端通常上放在自己电脑上，或者服务器上运行。

客户端会有一些区别，v2版本目前有两个客户端可供选择，一个是exe格式的客户端，另一个是jar格式的客户端。可以使用下面的选项卡来切换不同的使用教程。

两个版本的区别：

1. exe客户端使用Rust编写，在基于x86的Windows和Linux平台上拥有最好的性能和稳定性，但不支持win7或者其它的操作系统
2. jar客户端使用Java编写，支持在多平台上运行，比如LinuxArm，Windows7等（macos和手机端部分支持）

选择建议：

优先选择exe客户端，如果不能满足需求，使用jar客户端作为备选。

<Tabs groupId="client-edition">
    <TabItem value="new" label="jar客户端" default>
    客户端程序的文件名通常叫`Mcpatch-xxx.jar`。是用来更新Minecraft客户端的文件的。通常配置好后和Minecraft客户端一起打包发给玩家，以实现远程更新文件的效果。

    </TabItem>
    <TabItem value="old" label="exe客户端" default>
    客户端程序的文件名通常叫`mcpatch-client`或者直接简写为`c`。是用来更新Minecraft客户端的文件的。通常配置好后和Minecraft客户端一起打包发给玩家，以实现远程更新文件的效果。

:::tip

    如果提示找不到 VCRUNTIME140.dll 文件，说明需要 [安装 VC++ 2015 运行库](../faq.md#由于找不到VCRUNTIME140.dll，无法继续执行代码)。

:::
    </TabItem>
</Tabs>





## 二、配置管理端

:::note[小知识]

管理端的作用是打包和管理更新包，服主日常维护更新文件时，都需要和它打交道。

:::

首先在桌面上（或者任何你喜欢的地方）创建一个目录，叫`guanli`。然后将刚刚下载好的管理端程序放进去。

不同版本的管理端支持不同的运行模式，具体请参考下表：

+ 管理端 0.0.x：仅支持命令行模式
+ 管理端 0.1.x - 2.0.2：仅支持WebUI模式
+ 管理端 2.0.3 - 未来版本：支持命令行和WebUI模式

注：从`0.0.x`升级到更高版本需要删除一下config.toml文件重新生成，否则程序无法启动

<Tabs groupId="manager-edition">
    <TabItem value="cmd" label="命令行模式" default>
    双击即可启动管理端。启动成功后可以看到有`> `的字样，此时进入了交互式命令行模式。按回车就可以出现管理端支持的命令列表。

    我们输出`check`命令按下回车键，它会提示修改的文件数量为多少多少，我们先忽视这个消息。
    </TabItem>
    
    <TabItem value="webui" label="WebUI模式">
    双击即可启动管理端。如果启动成功后你看到有`> `的字样，说明进入了命令行模式，只需要输入`webui`再按Enter键就能进入webui模式。（或者直接使用启动参数`m.exe webui`来直接进入webui模式，管理端是支持指令预填写的）
    
    启动成功之后，会自动创建配置文件和生成一组默认的账号密码。我们需要复制密码到安全的地方妥善保存，因为密码只会显示一次。
    
    管理端默认会同时启动webui服务(port: 6710)和私有协议服务(port: 6700)。我们打开浏览器，输入`http://127.0.0.1:6710`即可打开webui界面。
    
    如果你忘记了用户名或者是密码，可以删除user.toml文件后，重启管理端，就可以重新生成账号密码。
    </TabItem>
</Tabs>

接着回到`guanli`目录下，你会注意到管理端程序旁边新增了一个名为`workspace`的文件夹，这就是工作空间目录。

此时，`guanli`目录大概长这样：

<Tabs groupId="manager-edition">
    <TabItem value="cmd" label="命令行模式" default>
    ```
    guanli/
    ├─ workspace/                           # 工作空间目录
    ├─ public/                              # 公共目录
    └─ m-0.0.11-x86_64-pc-windows-msvc.exe  # 管理端程序
    ```
    </TabItem>
    <TabItem value="webui" label="WebUI模式" default>
    ```
    guanli/
    ├─ workspace/       # 工作空间目录
    ├─ public/          # 公共目录
    ├─ config.toml      # 管理端配置文件
    ├─ user.toml        # 管理端的认证相关配置文件，账号密码等数据
    └─ m.exe            # 管理端程序
    ```
    </TabItem>
</Tabs>

无论是要向客户端添加新文件、修改现有文件、删除文件、移动文件，你只需要在`workspace`目录中对相应的文件进行操作。每当管理端进行打包操作时，管理端会对比`workspace`目录中文件的变化，来生成更新包。

## 三、放入要更新的文件

:::note[小知识]

一般来说，服务器整合包的首包是服主制作好后，通过链接或者QQ群文件分享给玩家的，而后续的文件更新，则是使用 McPatch 进行远程推送。

:::

现在把目前需要更新的文件全部放到工作空间目录里，暂时不更新的文件以后再放，这能减少更新包的大小。

如果你在使用WebUI版本，可以使用左侧菜单中的在线文件管理功能直接上传，也可以将文件手动添加到工作空间目录里。

那么，下面是一些常见的栗子可以参考。（不存在的文件夹需要手动创建）

<Tabs>
    <TabItem value="a" label="更新模组" default>
        要更新模组文件的话：
        
        + 复制`.minecraft/mods`目录下你想要更新的文件
        + 粘贴到`guanli/workspace/.minecraft/mods`下
        
        ```
        客户端整合包目录结构：
        
        Minecraft客户端/ 
        └─ .minecraft/
          └─ mods/
            ├─ 模组a.jar （复制）
            ├─ 模组b.jar （复制）
            └─ 模组c.jar （复制）
    
        管理端目录结构：
    
        guanli/ 
        └─ workspace/
          └─ .minecraft/
            └─ mods/
              ├─ 模组a.jar （粘贴过来）
              ├─ 模组b.jar （粘贴过来）
              └─ 模组c.jar （粘贴过来）
        ```
    </TabItem>
    
    <TabItem value="b" label="新玩家进服教程.txt">
        要更新启动器文件旁边的`新玩家进服教程.txt`的话
        
        + 复制：`新玩家进服教程.txt`文件
        + 粘贴到：`guanli/workspace/新玩家进服教程.txt`
    
        如果客户端没有该文件，客户端会下载新的 `新玩家进服教程.txt`放到这里。
    
        如果客户端有该文件，客户端会下载新的 `新玩家进服教程.txt` 并覆盖老的 `新玩家进服教程.txt`。（如果有更新的话）
    
        ```
        客户端整合包目录结构：
        
        Minecraft客户端/
        ├─ .minecraft/
        │   └─ 各种文件
        ├─ 新玩家进服教程.txt （复制）
        └─ PCL启动器.exe
    
        管理端目录结构：
        
        guanli/
        ├─ workspace/
        │  └─ 新玩家进服教程.txt （粘贴过来）
        └─ m-0.0.11-x86_64-pc-windows-msvc.exe
        ```
    </TabItem>
    
    <TabItem value="c" label="更新JEI模组的配置文件">
        + 要更新JEI模组的配置文件（开启版本隔离）
          + 复制`.minecraft/versions/<版本名称>/config/jei/jei.cfg`文件
          + 粘贴到`guanli/workspace/.minecraft/versions/<版本名称>/config/jei/jei.cfg`
        
        ```
        客户端整合包目录结构：
        
        Minecraft客户端/
        ├─ .minecraft/
        │  ├─ versions/
        │  │  └─ <版本名称>/
        │  │     ├─ config/
        │  │     │  ├─ jei/
        │  │     │  │  └─ jei.cfg # 要更新这个配置文件
        │  │     │  └─ 其他模组配置
        │  │     └─ 其他游戏文件
        │  └─ 其他文件
        └─ PCL启动器.exe
    
        管理端目录结构：
        
        guanli/
        ├─ workspace/
        │  └─ .minecraft/
        │     └─ versions/
        │        └─ <版本名称>/
        │           └─ config/
        │              └─ jei/
        │                 └─ jei.cfg
        └─ m-0.0.11-x86_64-pc-windows-msvc.exe
        ```
    </TabItem>
</Tabs>

---

如果你开了版本隔离，模组文件通常是在 versions 目录下的。那么你要更新的模组就不是在`.minecraft/mods`下的文件了。而是在`.minecraft/versions/<版本名称>/mods`目录下。如果你还把文件直接丢到`.minecraft/mods`目录下，虽然也能更新，但游戏读取不到。

其它受版本隔离影响的文件也是同理，也需要复制到 versions 目录下才能被 Minecraft 正常读取。

## 四、打包

<Tabs groupId="manager-edition">
    <TabItem value="cmd" label="命令行模式" default>
    切回管理端窗口。（如果你已经退出了，那么再次双击运行即可）

    看到`> `的字样后。输入`pack <version>`即可开始打包，`<version>`是要打包的版本号，不能和现有的重复。
    
    版本号只能包括大小写字母，数字，以及`!@#$()_+-=;',.`这几个符号，不要使用中文，空格，或其它字符，会出问题。

:::tip

    如果要写版本更新记录，需要在打包开始之前，提前把更新记录用使用utf-8编码写在`guanli/logs.txt`文件里，管理端打包时会自动读取这个文件。

:::

    看到“打包完成！”的字样即代表打包成功了，更新包会存放在public目录下，会按版本号进行命名。
    </TabItem>
    <TabItem value="webui" label="WebUI模式" default>
    点击左侧菜单切换到终端界面。
    
    点击“打包新版本”按钮，输入版本号和更新记录即可。
    
    版本号只能包括大小写字母，数字，以及`!@#$()_+-=;',.`这几个符号，不要使用中文，空格，或其它字符，会出问题。
    </TabItem>
</Tabs>



此时，`guanli`目录大概长这样：
```
guanli/
├─ public/                              # 存放更新包
│  ├─ v1.tar
│  └─ index.json
├─ workspace/                           # 工作空间
│  └─ 各种文件
└─ m-0.0.11-x86_64-pc-windows-msvc.exe  # 管理端程序
```

<Tabs groupId="manager-edition">
    <TabItem value="cmd" label="命令行模式" default>
    如果对打包结果不放心，可以使用`test`对更新包进行校验，这会模拟客户端的解压过程，检查文件是否损坏。
    </TabItem>
    <TabItem value="webui" label="WebUI模式" default>
    如果对打包结果不放心，可以点击“测试更新包”按钮对更新包进行校验，这会模拟客户端的解压过程，检查文件是否损坏。
    </TabItem>
</Tabs>



:::danger[万分小心！！！]

已经打好的更新包文件（也就是`public`目录里面的文件）不能手动删除，不能修改里面的文件，也不能重新打包，这会导致数据损坏，应该再打一个新的包来替代删除旧的包。

:::

## 五、后续打包

后续的文件维护很简单！直接对工作空间目录下的文件或者目录进行增加，删除，修改替换，移动，重命名都可。想怎么操作怎么操作。

<Tabs groupId="manager-edition">
    <TabItem value="cmd" label="命令行模式" default>
    修改到自己满意为止后，完后输入`pack <version>`打包即可。
    </TabItem>
    <TabItem value="webui" label="WebUI模式" default>
    修改到自己满意为止后，点击“打包新版本”按钮即可。
    </TabItem>
</Tabs>


管理端会自动感知到你做的所有文件修改，并打成更新包，再将这些修改同步到客户端。整个过程操作起来方便和直观，只需要把工作空间目录当成普通目录一样修改就好了。


<Tabs groupId="manager-edition">
    <TabItem value="cmd" label="命令行模式" default>
    如果对工作空间目录下的文件进行了修改，但又发现改的不对。可以使用管理端的`revert`命令来丢弃刚刚的修改，将文件状态退回上一次打包的时候。
    </TabItem>
    <TabItem value="webui" label="WebUI模式" default>
    如果对工作空间目录下的文件进行了修改，但又发现改的不对。可以点击“回退工作空间”按钮来丢弃刚刚的修改，将文件状态退回上一次打包的时候。
    </TabItem>
</Tabs>

下面是一些管理端中，常被问到的问题：

1. 支持所有文件操作：包括移动，修改，覆盖，新建，删除，复制等等等等，文件夹同理
2. 支持更新加密的压缩包。只需要当普通文件一样用新版替换覆盖旧版就行
3. 新旧文件同名，但是文件内容变了也能检测到。因为打包时会检查文件校验，文件里任何字节发生变化，管理端都能感知到。
4. 避免单纯的将`Abc.jar`重命名为`abc.jar`这种仅修改大小写部分，同时没有改动文件所在目录和文件内容的行为。这种单纯原地修改大小写重命名的行为，管理端会出bug

---

### 删除不存在的文件

有些时候，你可能会想删掉一些文件，这些文件存在于玩家那边，但却不存在于管理端的工作空间目录里。你会发现这些文件没法删除，因为它们本来就不存在于工作空间目录里。

删除这些文件或者目录，需要用一些取巧的方式。其中最简单的方法就是将这些文件先放进工作空间目录正常打个包，这样工作空间目录里就有这个文件了，此时把它们删掉，再打个包，即可从客户端删除这些文件了。

不用担心这个操作会有副作用。客户端会自动针对这种情况进行下载优化，以节省流量。

文件夹也可以使用这个方法来删除。不过需要注意，如果玩家在文件夹中存放了一些自己的文件，也会被顺带删除，所以使用时请小心一些。

## 六、启动服务端

:::tip[小知识]

管理端除了管理更新包以外，还自带一个内置服务端的功能。这是给小白用户准备的功能。不仅能免去额外搭建HTTP服务端的繁琐过程，还能免备案使用

:::

客户端程序支持多种更新协议，比如HTTP协议。WEBDAV协议，私有协议等。

由于我们是初次上手本软件，这里使用管理端自带的服务端功能进行教程演示。待教程结束后，你可以在[最佳实践](/docs/v2/practices)中找到其它的部署方式，以适应更加复杂的部署需求。

管理端自带的服务端使用私有协议，这是mcpatch自己基于tcp设计的一套文件传输协议。相较HTTP协议的优点是配置难度低和免备案即可使用。其开箱即用的特性，非常适合小服使用或者本地测试。

<Tabs groupId="manager-edition">
    <TabItem value="cmd" label="命令行模式" default>
    要启动管理端自带的服务端功能，首先需要启动管理端，然后输入`serve`按回车即可启动。（注意命令是`serve`不是`server`不要打错）

    默认的端口是6700，如果需要调整，可用修改管理端的配置文件`config.toml`中的`[builtin-server].listen-port`或者`serve-listen-port`字段。

    想要关闭服务端可以叉掉终端的窗口，或者按Ctrl + C即可。
    
    管理端一般都是同时开两个管理端进程实例，一个打包用，用完叉掉。一个跑内置服务端，一直挂在后台
    
    ---
    
    通常我们都习惯从bat启动这个自带服务端。但服务端除了使用交互式命令行启动以外，也支持从普通命令行参数启动。
    
    我们可以在`guanli`目录下，也就是管理端程序旁边新建一个`serve.bat`文件。（名字随意）
    
    然后将下面的内容粘贴进去，然后双击启动即可。（其中`<mcpatch-manager>`需要替换成实际的文件名）
    
    ```bat
    @echo off
    <mcpatch-manager> serve
    ```
    </TabItem>
    <TabItem value="webui" label="WebUI模式" default>
    WebUI版本默认会自动启动私有协议服务端，监听端口为6700，默认情况下无需手动开启，可以直接使用。
    </TabItem>
</Tabs>

:::warning

注意配置文件中的所有`listen-addr`参数请勿随意调整，应该始终保持`0.0.0.0`，否则会导致所有连接都连不上（除非你很清楚监听地址的功能是什么）

:::

如果需要在内网穿透环境下使用管理端自带的服务端功能，协议记得选择TCP协议。

## 七、配置客户端

当管理端部署安装好之后，就可以开始配置客户端程序这边了。

:::tip[推荐的步骤，但不强制]

在开始配置客户端程序之前，建议先将Mc客户端整个文件夹压缩一遍备份，避免调试更新的过程中，误删了什么文件没法恢复了。

:::

将客户端程序放到Minecraft客户端的`.minecraft/mcpatch`目录里面（需要手动创建），然后直接双击运行exe。

不出意外的话，客户端会报错无法连接之类的错误，不用管这个报错，直接关掉。

此时它会生成一个配置文件`mcpatch.yml`，我们需要打开编辑。

这里唯一需要修改的是`urls`选项，这个参数控制更新服务器的地址，默认是本机地址`mcpatch://127.0.0.1:6700`。

如果你的服务端是管理端自带的，且监听的端口也是默认的6700的话，那么这里可以不用修改端口。

如果你的服务端没有和客户端程序部署在同一台电脑上，那么记得修改这个127.0.0.1的IP地址，不然铁定连不上。只需要将这个地址修改成自己服务器的ip和端口即可。

`urls`支持`base64`编码。（例如`mcpatch://127.0.0.1:80`的`base64`编码为`bWNwYXRjaDovLzEyNy4wLjAuMTo4MA==`）

客户端配置文件中的其它选项都有对应的注释说明，可以按需修改。

## 八、一键启动

客户端每次都要手动双击运行很是麻烦，可以借助一些方法在游戏启动时自动进行更新。

<Tabs groupId="client-edition">
    <TabItem value="new" label="jar客户端" default>

    打开Minecraft客户端的`.minecraft/mcpatch`目录。将客户端jar文件移动到里面去。（记得把配置文件和版本号文件也一起移动）

    打开Minecraft启动器（任意启动器均可，官方启动器除外），调整游戏版本设置，找到Java虚拟机参数（或者叫JVM 参数）。

    在参数的开头插入这串代码`-javaagent:mcpatch/《举个栗子》.jar `（注意.jar的后面还有个空格也不要漏），然后回到启动器主界面。

    `《举个栗子》`要换成客户端程序的实际文件名，这里只是举例，下文同理。

    </TabItem>
    <TabItem value="old" label="exe客户端" default>

    首先到[BalloonUpdate/McPatch2Loader](https://github.com/BalloonUpdate/McPatch2Loader/releases)下载最新版的加载器文件。

    打开Minecraft客户端的`.minecraft/mcpatch`目录。将加载器放在里面，和客户端程序放到一起。

    在此处创建“启动列表”文件，叫`startlist.txt`。

    将客户端程序的文件名复制，比如`mcpatch-client-0.0.0.exe`。粘贴到`startlist.txt`里，保存关闭。

    此时，目录结构大概长这样。
    ```
    客户端整合包/
    ├─ .minecraft/
    │  ├─ mcpatch/
    │  │  ├─ mcpatch-client-0.0.0.exe
    │  │  ├─ startlist.txt
    │  │  ├─ loader-2.jar
    │  │  ├─ mcpatch.yml
    │  │  └─ mcpatch.log
    │  └─ versions/
    └─ PCL启动器.exe
    ```

    打开Minecraft启动器（任意启动器均可，官方启动器除外），调整游戏版本设置，找到Java虚拟机参数（或者JVM 参数）。

    在参数的开头插入这串代码`-javaagent:mcpatch/《举个栗子》.jar `（注意.jar的后面还有个空格也不要漏），然后回到启动器主界面。

    `《举个栗子》`要换成loader.jar的实际文件名，这里只是举例，下文同理。

    </TabItem>
</Tabs>

:::info

如果你发现启动器有`JVM参数头`或者`JVM参数尾`这两个选项，则需要填到`JVM参数头`的最前面，最前面！

:::

点击Minecraft启动器的“启动游戏”按钮，一切顺利的话，在启动Minecraft主窗口之前，就会启动更新了。

如果启动游戏失败，且日志里有`Error opening zip file or JAR manifest missing`的字样，说明填写的jar文件找不到。

你可能会好奇，明明这个文件在`mcpatch`目录下面，怎么就会找不到呢？

这个问题其实不怪你，它通常和MC游戏的启动设置有关，其中影响最明显的就是版本隔离选项！

一般不开版本隔离功能时，使用`-javaagent:mcpatch/《举个栗子》.jar `就可以顺利启动，但是开启版本隔离后就不行了。

这是因为开启版本隔离后，javaagent参数的判定路径（也就是工作目录）会发生改变。没开启时，是从.minecraft目录下开始计算，这也是为什么明明放在`.minecraft/mcpatch`下，但参数里却只需要填写`mcpatch/《举个栗子》.jar`，而不需要加上`.minecraft`的原因。

当开启版本隔离后，这个判定路径多数情况下都会变成从`.minecraft/version/xxxx/`目录下开始计算。

此时将参数改成`-javaagent:../../mcpatch/《举个栗子》.jar `通常就可以正常启动了。其中`../`表示返回上级目录，可以不断连用来多次返回上级目录。

从版本文件夹`.minecraft/version/xxxx/`开始，两个`../`正好抵消掉`version/xxxx/`，使其判定路径变成`.minecraft/`，那么再加上`mcpatch/《举个栗子》.jar`，就正好能定位到loader的实际位置了，游戏便可以正常启动了。

## 九、经常被问到的问题

### 文件更新位置

客户端程序会自动搜索`.minecraft`的父目录作为更新起始位置，到处移动客户端程序（不管套几层文件夹）都不会影响更新起始位置。

如果要调整这个机制，可以修改配置文件里的`base-path`选项。

### 版本号不是判断版本新旧的依据

版本号只是一个普通的标签，是给人类看的，程序不会解析对比版本号的文字，也不作为任何判断版本前后的依据。

版本号的判断顺序的按打包时间来计算的，后打的版本总是新版本。
