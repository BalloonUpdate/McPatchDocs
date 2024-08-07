---
title: 安装教程
---

## 一、下载文件

在开始安装之前，要提前下载好客户端程序（mcpatch-manager）和管理端程序（mcpatch-client）。

- mcpatch-manager 是管理端程序，用来打更新包和日常维护工作。同时也提供一个内置的开箱即用服务端。这个文件通常放在自己电脑上，或者放在服务器上都可。
- mcpatch-client 是客户端程序，用来更新Minecraft客户端的文件。通常配置好后和Mc客户端一起打包发给玩家，以实现远程更新文件的效果。

:::tip

如果提示找不到 VCRUNTIME140.dll 文件。请[安装 VC++ 2015 运行库](../faq.md#由于找不到VCRUNTIME140.dll，无法继续执行代码)。

:::

## 二、配置管理端

:::note[小知识]

管理端的作用是打包和管理更新包，服主日常维护更新文件时，都需要和它打交道。

:::

首先在桌面上（或者任何你喜欢的地方）创建一个目录，叫`guanli`。然后将刚刚下载好的管理端程序放进去。

双击即可启动管理端。启动成功后可以看到有`> `的字样，此时进入了交互式命令行模式。按回车就可以出现管理端支持的命令列表。

我们输出`check`命令按下回车键，它会提示修改的文件数量为多少多少，我们先忽视这个消息。

回到`guanli`目录下，可以看到管理端程序旁边多出了一个`workspace`文件夹，即工作空间目录。后续所有需要更新到客户端那边的文件，都是放在这个工作空间目录里的。

## 三、放入要更新的文件

把需要更新的文件全部放到工作空间目录里，暂时不更新的文件以后再放，能减少更新包的大小。

同时工作空间目录下的文件要和客户端那边保持相同的目录结构。

下面一些栗子可以参考（不存在的文件夹需要手动创建）：

+ 要更新所有模组的话
  + 复制`.minecraft/mods`目录
  + 粘到`guanli/workspace/.minecraft/mods`
  
+ 要更新.minecraft目录旁边的`新玩家进服教程.txt`话
  + 复制`新玩家进服教程.txt`文件
  + 粘到`guanli/workspace/新玩家进服教程.txt`

+ 如果你开了版本隔离，模组文件通常会放在versions目录下，那么
  + 复制`.minecraft/versions/your-version/mods`目录
  + 粘到`guanli/workspace/.minecraft/versions/your-version/mods`
  + 其它受版本隔离影响的文件也是同理，也需要复制到versions目录下才能被MC读到


:::tip

若开启版本隔离，那么要更新的实际上是versions目录下的mods文件夹。如果还傻乎乎地直接把文件丢到`.minecraft/mods`目录下敷衍了事，游戏是读取不到的。

:::

## 四、打包

切回管理端窗口。（如果你已经退出了，那么再次双击运行即可）

看到`> `的字样后。输入`pack <version>`即可开始打包，`<version>`是要打包的版本号，不能和现有的重复。

版本号只能包括大小写字母，数字，以及`!@#$()_+-=;',.`这几个符号，不要使用中文，空格，或其它字符，会出问题。

:::tip

如果要写版本更新记录，需要在打包开始之前，提前把更新记录用使用utf-8编码写在`guanli/logs.txt`文件里，管理端打包时会自动读取这个文件。

:::



看到“打包完成！”的字样即代表打包成功了，更新包会存放在public目录下，会按版本号进行命名。

如果对打包结果不放心，可以使用`test`对更新包进行校验，这会模拟客户端的解压过程，检查文件是否损坏。

:::danger[万分小心！！！]

已经打好的更新包文件不能手动删除也不能修改里面的文件，这会导致数据损坏，应该再打一个新的包来替代删除旧的包。（~~自己手欠删出问题别来找我~~）

:::

## 五、后续打包

后续的文件维护很简单！直接对工作空间目录下的文件或者目录进行增加，删除，修改，替换即可，想怎么操作怎么操作。修改到自己满意为止后，完后输入pack打包即可。

管理端会自动感知到你做的所有文件修改，并打成更新包，再将这些修改同步到客户端。整个过程操作起来方便和直观，只需要把工作空间目录当成普通目录一样修改就好了。

如果对工作空间目录下的文件进行了修改，但又发现改的不对。可以使用管理端的revert命令来丢弃刚刚的修改，将文件状态退回上一次打包的时候。

下面是一些管理端中，常被问到的问题：

1. 支持所有文件操作：包括移动，修改，覆盖，新建，删除，复制等等等等，文件夹同理
2. 支持更新加密的压缩包。只需要当普通文件一样用新版替换覆盖旧版就行
3. 新旧文件同名，但是文件内容变了也能检测到。因为打包时会检查文件校验，文件里任何字节发生变化，管理端都能感知到。
4. 避免单纯的将`Abc.jar`重命名为`abc.jar`这种仅修改大小写部分，同时没有改动文件所在目录和文件内容的行为。这种单纯原地修改大小写重命名的行为，管理端会出bug

## 六、启动服务端

:::tip[小知识]

管理端除了管理更新包以外，还自带一个内置服务端的功能。这是给小白用户准备的功能。不仅能免去额外搭建HTTP服务端的繁琐过程，还能免备案使用

:::

客户端程序支持多种更新协议，比如HTTP协议。WEBDA协议，私有协议等。

由于我们是初次上手本软件，这里使用管理端自带的服务端功能进行教程演示。待教程结束后，你可以自行更换成使用HTTP或者WEBDAV协议的其它服务端，以适应更加复杂的部署需求。

管理端自带的服务端使用私有协议，这是mcpatch自己基于tcp设计的一套文件传输协议。相较HTTP协议的优点是配置难度低和免备案即可使用。其开箱即用的特性，非常适合小服使用或者本地测试。

要启动管理端自带的服务端功能，首先需要启动管理端，然后输出`serve 6700`按回车。（注意命令是serve不是server不要打错了）

这里的`serve`表示启动自带的服务端，6700代表监听在哪个端口上，默认是6700。

想要关闭服务端可以叉掉终端的窗口，或者按Ctrl + C即可。

---

通常我们都习惯从bat启动这个自带服务端。服务端除了使用交互式命令行启动以外，也支持从普通命令行参数启动。

我们可以在`guanli`目录下，也就是管理端程序旁边新建一个`serve.bat`文件。（名字随意）

然后将下面的内容粘贴进去，然后双击启动即可。（其中`<mcpatch-manager>`需要替换成实际的文件名）

```bat
@echo off
<mcpatch-manager> serve 6700
```

一般都是同时开两个管理端进程实例，一个打包用，用完叉掉。一个跑内置服务端，一直挂在后台

如果需要在内网穿透或者端口映射环境下使用管理端自带的服务端，协议记得选择TCP协议（必须是严格TCP别的协议不行）

## 七、配置客户端

当管理端部署安装好之后，就可以开始配置客户端程序这边了。

:::tip[推荐的步骤，但不强制]

在开始配置客户端程序之前，建议先将Mc客户端整个文件夹压缩一遍备份，避免调试更新的过程中，误删了什么文件没法恢复了。

:::

将客户端程序放到Minecraft客户端的`.minecraft/gengxin`目录里面（需要手动创建），然后直接双击运行。

不出意外的话，客户端会报错无法连接之类的错误，不用管这个报错，直接关掉。

此时它会生成一个配置文件`mcpatch.yml`，我们需要打开编辑。

这里唯一需要修改的是`urls`选项，这个参数控制更新服务器的地址，默认是本机地址127.0.0.1:6700。

如果你的服务端是管理端自带的，且监听的端口也是默认的6700的话，那么这里可以不用修改端口。

如果你的服务端没有和客户端程序部署在同一台电脑上，那么记得修改这个127.0.0.1的IP地址，不然铁定连不上。只需要将这个地址修改成自己服务器的ip和端口即可。

客户端配置文件中的其它选项都有独立的注释说明，可以按需修改。

## 八、一键启动

客户端每次都要手动双击运行很是麻烦，可以借助一些方法在游戏启动时自动进行更新。

首先到[BalloonUpdate/McPatch2Loader](https://github.com/BalloonUpdate/McPatch2Loader/releases)下载最新版的加载器文件。

打开Minecraft客户端的`.minecraft/gengxin`目录。将加载器放在里面，和客户端程序放到一起。

在此处创建“启动列表”文件，叫`startlist.txt`。

将客户端程序的文件名复制，比如`mcpatch-client-0.0.0.exe`。粘贴到`startlist.txt`里，保存关闭。

打开Minecraft启动器（任意启动器均可，官方启动器除外），调整游戏版本设置，找到Java虚拟机参数（或者JVM 参数）。

在参数的开头插入这串代码`-javaagent:gengxin/《举个栗子》.jar `（注意.jar后面还有个空格也不要漏），然后回到启动器主界面。

《举个栗子》要换成loader.jar的实际文件名，这里只是举例，下文同理。

点击Minecraft启动器的“启动游戏”按钮，一切顺利的话就会自动启动更新了。

如果启动游戏提示`Error opening zip file or JAR manifest missing`，说明填写的jar文件找不到。

有时候你可能会好奇，明明这个文件在`gengxin`目录下面，怎么就会找不到呢？

这个问题其实不怪你，它通常和MC游戏的启动设置有关，其中影响最明显的就是版本隔离选项！

一般不开版本隔离功能时，使用`-javaagent:gengxin/《举个栗子》.jar `就可以顺利启动，但是开启版本隔离后就不行了。

这是因为开启版本隔离后，javaagent参数的判定路径会发生改变。没开启时，是从.minecraft目录下开始计算，这也是为什么loader明明放在`.minecraft/gengxin`下，但参数里却只需要填写`gengxin/《举个栗子》.jar`，而不需要加上`.minecraft`的原因。

当开启版本隔离后，这个判定路径多数情况下都会变成从`.minecraft/version/xxxx/`目录下开始计算。

此时将参数改成`-javaagent:../../gengxin/《举个栗子》.jar `通常就可以正常启动了。其中`../`表示返回上级目录，可以不断连用来多次返回上级目录。

从版本文件夹`.minecraft/version/xxxx/`开始，两个`../`正好抵消掉`version/xxxx/`，使其判定路径变成`.minecraft/`，那么再加上`gengxin/《举个栗子》.jar`，就正好能定位到loader的实际位置了，游戏便可以正常启动了。

## 九、经常被问到的问题

### 文件更新位置

客户端程序会自动搜索.minecraft的父目录作为更新起始位置，到处移动客户端程序不会影响文件更新位置。

如果要调整这个机制，可以修改配置文件里的`base-path`选项

### 删除管理端不存在的文件

有些时候，服主可能会想删掉一些文件，这些文件存在于玩家那边，但却不存在于管理端的工作空间目录里。这些文件你可能会发现没法删除再打包，因为它们本来就不存在于工作空间目录里。

这些文件称作“未追踪的文件”。这是因为没有任何一个更新包中包含关于这个文件的信息，想要删除这些文件或者目录，需要用一些取巧的方式。

其中最简单的方法就是将这些文件先放进工作空间目录正常打个包，这样工作空间目录里就有这个文件了，此时把它们删掉，再打个包，即可从客户端删除这些文件了。

不用担心这个操作会带来额外的流量消耗。因为客户端更新时，如果发现某个文件在前一个包里存在，但是后一个包里紧接着又被删除了，客户端会自动跳过对这个文件下载，以达到优化的目的。

文件夹也可以使用这个方法来删除。不过需要注意，如果玩家在文件夹中存放了一些自己的文件，也会被顺带删除，所以使用的时候，请注意这点即可，避免误伤正常文件。

### 版本号不是判断版本新旧的依据

版本号只是一个普通的标签，是给人类看的，程序不会解析对比版本号的文字，也不作为任何判断版本前后的依据。

版本号的判断顺序的按打包时间来计算的，后打的版本总是新版本。
