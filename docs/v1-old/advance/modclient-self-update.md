---
title: ModClient 自更新教程
---
借助 ModClient 的特殊能力，可以实现给 McPatchClient.jar 本身做自更新（即使 McPatchClient.jar 本身是不支持的）

下文中所指的 `旧版列表文件` 在不同的 ModClient 版本中，具体文件名不一样，请注意区分：

+ 在 ModClient 版本 1.1.1 和更早的版本中叫 `OldBalloonUpdateFileName.txt`
+ 在 ModClient 版本 1.1.1 以后的版本中叫 `OldClientFileName.txt`（不包括1.1.1版本本身）

自更新教程：

准备好新版本客户端程序，并放在工作空间目录下，对应的原先旧版本客户端程序的位置的旁边

比如原先旧版在 `.minecraft/旧版本.jar`，那么新版就要和旧版同目录放置：`.minecraft/新版本.jar`

然后在工作空间目录下创建一个文本文件叫 `.minecraft/旧版列表文件`（旧版列表文件这个名字在上文中有提到）

打开 `旧版列表文件`，新增一行，将旧版的客户端程序的文件名添加一进去（这样做是为了让 ModClientLoader 自动删除旧版文件）如果有多个旧版，就一行一个

最后打包新版本，等待客户端更新