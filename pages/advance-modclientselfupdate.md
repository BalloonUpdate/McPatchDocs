## ModClient自更新教程

借助ModClient的特殊能力，可以实现给McPatchClient.jar本身做自更新（即使McPatchClient.jar本身是不支持的）

下文中所指的`txt文件`在不同的ModClient版本中，具体文件名不一样，请注意区分：

+ 在ModClient版本1.1.1和更早的版本中叫`OldBalloonUpdateFileName.txt`
+ 在ModClient版本1.1.1以后的版本中叫`OldClientFileName.txt`（不包括1.1.1版本本身）

自更新教程：

1. 在管理端的`workspace`目录里添加新版本的客户端程序文件（文件位置就放在旧版的旁边）
2. 在管理端的添加一个`txt文件`，位置就在`.minecraft`目录里
3. 打开这个`txt文件`，输入旧版本客户端的文件名，然后保存关闭
   + 后续的更新时旧版本的文件名都需要往这个`txt文件`里写一份，一行一个
4. 最后打包新版本