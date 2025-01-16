---
title: 配置文件参考
---
## 客户端 mcpatch.yml
```yaml
# 更新服务器地址，可以填写多个备用地址，当一个不可用时会切换到备用地址上
# 目前支持的协议：http(s)、webdav(s)、私有协议
#
# http协议的例子：（填写索引文件index.json所在的目录就好，不需要填写index.json本身）
#   1. http://127.0.0.1:6700 （走http协议）
#   2. https://127.0.0.1:6700/subfolder （走https协议）
#
# webdav协议的例子：（webdav代表走http协议，webdavs代表走https协议，要这样写只是为了和http源做区分）
#   1. webdav://user:pass:127.0.0.1:80   （webdav走http协议）
#   2. webdavs://user:pass:127.0.0.1:443 （webdav走https协议）
#   注：需要把user和pass这两个地方换成自己的账号密码，127.0.0.1换成主机地址，端口号不能省略
# 
# 私有协议的例子：（私有协议是mcpatch自己的协议，无需备案，如果做内网穿透请走普通tcp隧道而非http隧道）
#   1. mcpatch://127.0.0.1:6700 （私有协议以mcpatch开头，只需要主机和端口号即可，无需输入子目录）
# 
urls: 
  - mcpatch://127.0.0.1:6700 # 若在公网部署记得换成自己的公网ip或者域名

# 记录客户端版本号文件的路径
# 客户端的版本号会被存储在这个文件里，并以此为依据判断是否更新到了最新版本
version-file-path: version-label.txt

# 当程序发生错误而更新失败时，是否可以继续进入游戏
# 如果为true，发生错误时会忽略错误，正常启动游戏，但是可能会因为某些新模组未下载无法进服
# 如果为false，发生错误时会直接崩溃掉Minecraft进程，停止游戏启动过程
# 此选项仅当程序以非图形模式启动时有效，因为在图形模式下，会主动弹框并将选择权交给用户
allow-error: false

# 在没有更新时，是否显示“资源文件暂无更新!”提示框
# 在有更新时，此选项不生效
show-finish-message: true

# 安静模式，是否只在下载文件时才显示窗口
# 如果为true，程序启动后在后台静默检查文件更新，而不显示窗口，若没有更新会直接启动Minecraft，
#            有更新的话再显示下载进度条窗口，此选项可以尽可能将程序的存在感降低（适合线上环境）
# 如果为false，每次都正常显示窗口（适合调试环境）
# 此选项仅当程序以图形模式启动时有效
silent-mode: false

# 窗口标题，可以自定义更新时的窗口标题
# 只有在桌面环境上时才有效，因为非桌面环境没法弹出窗口
window-title: Mcpatch

# 更新的起始目录，也就是要把文件都更新到哪个目录下
# 默认情况下程序会智能搜索，并将所有文件更新到.minecraft父目录下（也是启动主程序所在目录），
# 这样文件更新的位置就不会随主程序文件的工作目录变化而改变了，每次都会更新在相同目录下。
# 如果你不喜欢这个智能搜索的机制，可以修改此选项来把文件更新到别的地方（十分建议保持默认不要修改）
# 1. 当此选项的值是空字符串''时，会智能搜索.minecraft父目录作为更新起始目录（这也是默认值）
# 2. 当此选项的值是'.'时，会把当前工作目录作为更新起始目录
# 3. 当此选项的值是'..'时，会把当前工作目录的上级目录作为更新起始目录
# 4. 当此选项的值是别的时，比如'ab/cd'时，会把当前工作目录下的ab目录里面的cd目录作为更新起始目录
base-path: ''

# 私有协议的超时判定时间，单位毫秒，值越小判定越严格
# 网络环境较差时可能会频繁出现连接超时，那么此时可以考虑增加此值（建议30s以下）
private-timeout: 7000

# 为http/webdav设置协议头
http-headers: 
#  User-Agent: This filled by youself # 这是一个自定义UserAgent的配置示例

# http/webdav协议的连接超时判定时间，单位毫秒，值越小判定越严格
# 网络环境较差时可能会频繁出现连接超时，那么此时可以考虑增加此值（建议30s以下）
http-timeout: 5000

# http/webdav协议的重试次数，最大值为254
# 当超过http_timeout服务器还是没有响应数据时，会消耗1次重试次数，然后进行重新连接
# 当所有的重试次数消耗完后，程序才会真正判定为超时，并弹出网络错误对话框
# 建议 http_timeout * http_retries 在20秒以内，避免玩家等的太久
http-retries: 3

# http/webdav协议是否忽略SSL证书验证
http-ignore-certificate: false
```

## 管理端 config.yml

```toml
[core]
# 要排除的文件规则，格式为正则表达式，暂时不支持Glob表达式
# 匹配任意一条规则时，文件就会被忽略（忽略，指管理端会当这个文件不存在一般）
exclude-rules = []

[web]
# webui的监听地址，通常情况下请保持0.0.0.0不要修改
listen-addr = "0.0.0.0"

# webui的监听端口，可以调整为其它的端口
listen-port = 6710

# https的证书文件路径
tls-cert-file = ""

# https的私钥文件路径
tls-key-file = ""

# 控制`Access-Control-Allow-Credentials`的值
cors-allow-credentials = false

# 控制`Access-Control-Allow-Headers`的值
cors-allow-headers = ["*"]

# 控制`Access-Control-Allow-Methods`的值
cors-allow-methods = ["*"]

# 控制`Access-Control-Allow-Origin`的值
cors-allow-origin = ["*"]

# 控制`Access-Control-Allow-Private-Network`的值
cors-allow-private-network = false

# 控制`Access-Control-Expose-Headers`的值
cors-expose-headers = ["*"]

# 首页的文件名。用来在访问根目录时展示给用户的页面。一般情况下无需修改
index_filename = "index.html"

# 遇到文件404时，重定向到哪个文件。主要用于支持前端的SinglePageApplication特性。一般情况下无需修改
redirect_404 = "index.html"

[builtin-server]
# 是否启动私有协议服务器功能
enabled = true

# 私有协议服务器的监听地址，通常情况下请保持0.0.0.0不要修改
listen-addr = "0.0.0.0"

# 私有协议服务器的监听端口，可以按需调整
listen-port = 6700

# 内置服务端之限速功能的突发容量，单位为字节，默认为0不开启限速。
# 如果需要开启可以填写建议值1048576（背后的限速算法为令牌桶）
capacity = 0

# 内置服务端之限速功能的每秒回复的令牌数，单位为字节，默认为0不开启限速。
# 如果需要开启，这里填写需要限制的最大速度即可，比如1048576代表单链接限速1mb/s（背后的限速算法为令牌桶）
regain = 0

[s3]
# 启用webdav的上传功能
enabled = true

# 端点地址
endpoint = "https://test-123456789.cos.ap-nanjing.myqcloud.com"

# 桶名
bucket = "test-123456789"

# 地域
region = "ap-nanjing"

# 认证id
access-id = ""

# 认证key
secret-key = ""

[webdav]
# 启用webdav的上传功能
enabled = true

# 主机部分
host = ""

# 用户名
username = ""

# 密码
password = ""
```