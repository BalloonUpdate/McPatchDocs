---
title: 常见问题
---

## 由于找不到VCRUNTIME140.dll，无法继续执行代码

问题原因：没有安装 vc++ 2015 运行库（从Windows 10开始都是自带的）

解决方法：前往[微软官网](https://www.microsoft.com/zh-cn/download/details.aspx?id=48145&751be11f-ede8-5a0c-058c-2ee190a24fa6=True&44F86079-8679-400C-BFF2-9CA5F2BCBDFC=1)下载（vc_redist.x64.exe和vc_redist.x86.exe两个文件都要安装）

## 私有协议状态码不正确

这里记录了一些常见的mcpatch内置服务端私有协议的状态码：

+ 状态码-2：客户端请求的文件range无效。出现此错误后，请向mcpatch作者报告寻求解决办法
+ 状态码-1：客户端请求的文件不存在。通常是index.json文件不存在，这是因为管理端那边还没有任何一个更新包，打包一个后错误就会消失
+ 其它状态码：通常是客户端填写了错误的地址或者端口，连接到其它的软件服务上去了