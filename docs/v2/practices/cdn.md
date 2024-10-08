---
title: 使用 CDN
---

OSS（对象存储服务，COS等）是提供者（也就是你）用来上传和存储文件的地方，而CDN（内容分发网络）则是为了加速用户（玩家）下载这些文件的服务。

## 为什么使用 CDN

1. mcpatch 自有协议受限于你自己的服务器带宽和延迟，还会挤占你的服务器资源
2. 依靠服务商提供的全国节点服务器，稳定且高速下载，不再挤牙膏限速
3. 整合包本地也可以丢 CDN 里，再也不用 QQ 群文件龟速下载了
3. **不要钱，能白嫖**

缺点：
1. 需要实名认证
2. 需要手动上传更新包（欢迎投稿“上传脚本模板”）

## 白嫖介绍

- [七牛云](https://s.qiniu.com/MNf6fe)

免费 10GB 存储 + 每月 10GB 下载 + 后续 0.24 元/GB

- [多吉云](https://www.dogecloud.com/product/oss)

免费 10GB 存储 + 每月 20GB 下载 + 后续 0.11 元/GB

## 如何使用

上传`public`内的所有文件即可。

```
对象存储根目录/
├─ download/
│  └─ mcpatch/
│     ├─ v1.tar
│     ├─ v2.tar
│     └─ index.json
└─ 其他文件
```
如上述目录结构的话，`urls`就是:
```yaml
urls:
- 你的CDN域名.com/download/mcpatch
```

## 注意事项

1. 一个中型整合包就可能接近 1GB，10GB/月 的流量其实并不多，请合理安排
1. 可以利用`urls`的优先级来串联多个 CDN 白嫖流量
2. CDN 存在缓存机制，上传更新包后通常需要刷新`index.json`这个文件的缓存