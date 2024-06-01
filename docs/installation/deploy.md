---
sidebar_position: 13
id: deploy
title: 创建更新包
---
## 创建文件夹
创建一个文件夹并命名为你喜欢的名称

## 放入管理端
将下载的 `McPatchManage-x.x.x.jar` 导入你创建的文件夹

## 编写启动指令
创建 `manage.bat` 并写入以下内容：

```bat title="manage.bat"
java -jar McPatchManage-x.x.x.jar & pause
```

## 生成相关文件
双击 `manage.bat`，然后关闭窗口

此时程序会自动生成 `history`、`public`、`workspace` 三个文件夹，如下图

<img src="/img/installation-path.png" class="gameicon"/>

+ 如果缺少文件夹，可自行补齐
+ 如果缺少文件，请重走一遍文档，并检查自己是否遗漏了相关步骤

## 放入需要发布的文件
在 `workspace` 内放入你需要发布的文件

<details>
<summary><b>文件路径示例（新手必看）</b></summary>

我们假设创建的文件夹叫 `mcpatch`

+ 要更新所有模组，复制 `.minecraft/mods` 目录
  + 到 `mcpatch/workspace/.minecraft/mods`

+ 要更新资源包，复制`.minecraft/resourcepacks` 目录
  + 到 `mcpatch/workspace/.minecraft/resourcepacks`

+ 要更新.minecraft目录旁边的 `新玩家进服教程.txt`，复制 `新玩家进服教程.txt` 文件
  + 到 `mcpatch/workspace/新玩家进服教程.txt`

本质上，`workspace` 目录相当于本地的 `.minecraft` 的父目录。只有 `workspace` 目录和客户端保持相同文件结构，文件才能更新到正确的地方

</details>

<details>
<summary><b>关于版本隔离的说明</b></summary>

客户端程序严格按照管理端摆放的文件结构更新，因此，若开启了版本隔离，实际需要更新的文件将位于 `versions` 目录下的以你创建 Minecraft 游戏版本时设定的名字为名称的文件夹

我们假设你一开始创建的文件夹叫 `mcpatch`，你创建的 Minecraft 游戏名称为 `your-version`

+ 如果你开了版本隔离，就需要复制 `.minecraft/versions/your-version/mods` 目录
  + 到 `mcpatch/workspace/.minecraft/versions/your-version/mods`
  + 其它文件同理，只有在 `versions` 目录下才能在更新的时候保持文件处于正确的位置

如果后续的更新决定弃用版本隔离，则将 `your-version` 的文件悉数挪至 `mcpatch/workspace/.minecraft`，反之同理

</details>

:::danger[特别注意]

不要把整个 `.minecraft` 目录全部放入 `workspace`，Minecraft 核心文件和 Minecraft 资源文件大部分情况下不能也不应该加入更新，会导致更新错误，更可能导致 Minecraft 无法启动

:::

## 创建更新包
双击 `manage.bat`，会出现如下界面
<img src="/img/installation-cmd.png" class="gameicon"/>

:::note

关于其他选项的相关内容请参阅 [进阶内容#管理端](/docs/installation/advanced)

:::

根据提示输入 `C`，出现如下界面
<img src="/img/installation-cmd-c.png" class="gameicon"/>

我们假定更新的版本号为 `1.0`，根据提示输入 `1.0`
<img src="/img/installation-cmd-c-1.0.png" class="gameicon"/>
此时出现版本号确认指示，根据提示输入 `y`

此时出现强制覆盖的相关设定，由于我们是第一次打包，输入 `n` 即可
<img src="/img/installation-cmd-c-1.0-y.png" class="gameicon"/>

:::note

关于强制覆盖的相关内容请参阅 [进阶内容#强制覆盖](/docs/installation/advanced)

:::

出现 `创建版本 1.0 完成`，则更新包创建成功
<img src="/img/installation-cmd-c-1.0-y-n.png" class="gameicon"/>
