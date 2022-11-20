## 安装教程

### 创建第一个版本

1. 在桌面新建一个目录叫mp，将McPatchManage.jar和MiniHttpServer.jar复制进去
2. 在mp目录下新建一个文本文件manage.bat，粘贴`java -jar xxx.jar`进去（xxx换成McPatchManage.jar实际文件名）
3. 创建workspace目录，将你的客户端文件夹里面要加入更新的目录们都复制过来，以下是一些例子
   1. 要更新模组，复制.minecraft/mods目录到mp/workspace/.minecraft/mods
   2. 要更新资源包，复制.minecraft/resourcepacks目录到mp/workspace/.minecraft/resourcepacks
   3. 要更新.minecraft目录旁边的“新玩家进服教程.txt”，复制“新玩家进服教程.txt”到mp/workspace/新玩家进服教程.txt
   4. 如果你开了版本隔离，就需要复制.minecraft/versions/your-version/mods到mp/workspace/.minecraft/versions/your-version/mods。其它文件以此类推，照葫芦画瓢即可
   5. 如果你想只给初始客户端zip包里打包一个启动器和McPatchClient，然后通过更新的方式热下载整个.minecraft这个目录，以此来缩减首包大小，那么就需要直接把整个.minecraft目录复制进mp/workspace/.minecraft里
4. 复制好之后，双击运行刚创建的manage.bat文件，输入`1`来开始创建第一个更新包
5. 提示要输入版本号之后，你就可以随便输入第一个版本号了，比如1.0，然后按Enter
   1. 版本号只能包括大小写字母数字，以及`!@#$%^&()_+-=[]{};',.`不要出现中文或者空格
6. 然后程序会列出你对哪些文件做了更改。因为我们是第一次打更新包，文件数量可能较多，粗略看一下就好
7. 如果你需要写一些更新记录以在玩家更新此版本时弹出提示框的话，可以在此时打开changelogs.txt文件粘贴进去并保存
8. 一切妥当之后，输入`y`开始打包。首次打包内容较大，可能会花费相当多的时间，请耐心等待
9. 待到出现“创建版本完成”的字样后，就说明打包成功了（更新包文件会保存在public目录下）

### 开启自带的HttpServer

1. 在mp目录下新建一个文本文件httpserver.bat，粘贴`java -jar xxx.jar`进去（xxx换成MiniHttpServer.jar实际文件名）
2. 双击运行httpserver.bat，启动成功后复制API地址，粘贴到浏览器打开，如果一切顺利浏览器会显`FORBIDDEN: Directory is unable to show`
3. 如果你需要从外网进行访问，把这个地址换成外网IP或者域名再访问一次，确保可以顺利访问

### 安装客户端

1. 复制一份你的服务器客户端文件夹到桌面上，并打开这个目录
2. 把McPatchClient.jar复制到.minecraft目录的旁边
3. 用压缩软件打开McPatchClient.jar，把config.yml文件解压出来，打开config.yml文件进行编辑
4. 将服务端的API地址粘贴到config.yml中的server选项后面，然后保存关闭
5. 双击运行McPatchClient.jar开始更新刚刚打包的第一个版本，这个过程可能会花费相当长的时间，请耐心等待
6. 更新完成后检查一下mc-patch-version.txt这个文件的内容，如果是1.0或者你刚创建的版本号，就说明第一个版本更新完毕
   1. 如果你要移动McPatchClient.jar的位置，请带着mc-patch-version.txt一起移动
7. 到此客户端配置完毕，如果希望在游戏启动时自动弹出更新，而不是每次都手点，可以参考一键启动的页面
8. 目前一键启动仅支持：[Windows平台](javaagent-windows.md)和[Android平台](javaagent-android.md)
9. 如果你确定config.yml已经调试完成，可以将config.yml打包回McPatchClient.jar里，然后删除外部的config.yml，程序会自动读取Jar内部的配置文件，以保持目录整洁

### 后续发布新版

1. 后续发布新版本很简单，只需要对workspace目录下的文件做修改，然后打出更新包就行，非常简单
2. 比如我想要删除客户端的一个模组a.jar再添加一个新的模组b.jar，那么只需要在workspace目录下删掉a.jar然后复制进去b.jar，接着打包新版本就好
3. 如果新旧文件同名，但文件内容被修改了也只一样的做法：直接覆盖旧文件就好，程序也能自动检测到
4. 对目录的新建和删除也是一样，该怎么新建怎么新建，该什么删除怎么删除，就和对“本地文件”进行这些操作一样
5. 如果你在workspace目录改了一些文件，但又觉得不妥，想要丢弃这些修改，可以启动管理端McPatchManage.jar，输入`4`来还原

## 一些使用小提示

### 目录用途说明

1. history目录：用来作为对比，以计算你对workspace目录做了哪些修改的目录
   1. 这个目录正常情况下和workspace目录里的文件一致，当你修改了workspace目录下的文件通过history目录进行对比就能算出你改了哪些文件目录
   2. history目录下的内容由程序自动维护，千万不要手动修改history目录下的文件，否则程序计算出来的二进制文件差异内容会出现差错，导致客户端无法更新到新版本
   3. 若不小心修改了history目录的文件，可以参考[这里](#不小心修改了history目录)来修复
2. public目录：用来存放打好的更新包，每个更新包有2个文件：二进制数据文件(.bin)和元数据文件(.json)，还有一个版本列表文件mc-patch-versions.txt
   1. 如果在一个版本中你仅做了删除文件，删除目录，新建目录的操作，同时又没有进行任何修改文件和新增文件的时候，最终打出来的更新包就只会包含一个json文件，而没有bin文件，这是正常现象
3. worksapce目录：用来日常维护客户端文件内容的目录，要对客户端做更新可以直接对整个文件做修改，然后打出更新包，客户端就会自动更新到新版本了

### 自由化部署

若你不想使用MiniHttpServer.jar，而是有更好的方式提供HTTP文件服务，比如Nginx，Apache，网站主机，对象存储等，那么只需要参考本章节就能轻松实现自由化部署，之后MiniHttpServer.jar就可以安全删除了

以对象存储为例，你每打一个新版本，比如10.0，就需要将public目录里面的这三个文件上传到对象存储上：

1. 二进制数据文件(.bin)：`10.0.mc-patch.json`
2. 元数据文件(.json)：`10.0.mc-patch.bin`（如果有）
3. 版本列表文件(mc-patch-versions.txt)：此文件每次都需要更新，至于为什么，亲自打开这个文件看看就会有答案

然后，客户端server选项要这样填写：

1. 首先拿到“版本列表文件(mc-patch-versions.txt)”的URL，比如`https://duixiangcunchu.com/some-folder/mc-patch-versions.txt`
2. 在浏览器打开这个URL，确认能顺利访问之后，删除URL末尾的`/mc-patch-versions.txt`部分，变成这样`https://duixiangcunchu.com/some-folder`
3. 然后粘贴进客户端配置文件的server选项后面

### 版本号并非判断新旧的依据

版本号并没有规定一定要往高走，也可以往低走。就是说你可以从1.5版本更新到1.4版本。这算更新，并不算回退

因为版本的前后关系并不是直接判断版本号文字计算出来的，而是按照你打每个版本的时间顺序，后打的版本总是比先打的版本要新。版本号只是个标签罢了，不作为任何判断版本前后的依据

至于哪个版本更新，哪个版本更旧？可以亲自打开“版本列表文件(mc-patch-versions.txt)”一看便知（注意只能看不能改）

### 版本发错了怎么办

版本号一旦发布就不能撤回，撤回可能会导致客户端某些文件更新永久更新失败，而且这种问题很难发现和调试。你应该额外再发布一个版本来替代撤回

如果你100%确定刚发布的错误版本没有任何人下载的话，可以使用以下方法来撤回：

1. 打开public/mc-patch-versions.txt文件，将错误的版本那一行删除掉（其它行千万别改动）
2. 注意撤回不要只撤回中间的版本，应该连带撤回后续所有的新版本，比如现在有“甲乙丙丁戊”五个版本，如果“丙”版本需要撤回，应该连带“丙丁戊”一起撤回
3. 删除public目录下，错误的版本号的json文件和bin文件（同样连带后续所有版本）
4. 运行管理端，在主菜单输入`bv`进入隐藏的回溯菜单，回溯workspace目录和history目录的内容
5. 这样就回退到了你发布错误版本号之前的状态了
6. 如果你不能100%保证没有任何人下载过这个错误的版本，就不要撤回版本，否则那个人会出现各种各样的奇奇怪怪的问题

### 不小心修改了history目录

如果你不小心修改了history目录下的内容，可以在主菜单输入`bv`进入隐藏的回溯菜单来同时还原workspace目录和history目录，注意使用此命令前请三思，如使用不当可能会误删重要文件
