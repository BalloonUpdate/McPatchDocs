---
title: 上传对象存储
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

管理端打包后，可能要把更新包上传到自己的服务器，或者对象存储上供大家下载。

<Tabs groupId="manager-edition">
    <TabItem value="cmd" label="命令行版本" default>
        管理端本身没有直接上传文件的能力，但可以通过“上传脚本模板”这个特性间接将更新包上传到服务器上。

    配置好后，每次打包完成自动生成一个上传脚本，双击运行后也可以自动把更新包上传到自定义的服务器上。

    在使用这个功能之前，需要提前准备好对应的cli上传工具，比如要上传到对象存储，就要准备对象存储的命令行工具。

    打开管理端的文件夹，编辑管理端的配置文件`config.toml`，将`upload-script-output`后面的`.txt`替换成`.bat`好方便在Windows系统上运行。

    再在管理端exe文件旁边创建一个空文件`upload-template.txt`。

    这个文件就是模板文件了，打包后会按这个模板文件的内容，自动生成一个新的上传脚本。

    这里以windows平台上传到腾讯对象存储为例，其它平台和上传方式也是同理。

    首先要从[腾讯云的官网](https://cloud.tencent.com/document/product/436/63144)下载COSCLI工具，这里要下载自己操作系统对应的版本。

    将下载好的`coscli-windows.exe`移动到管理端文件夹里来，再创建一个新文件`tencent-cos.yml`作为coscli的配置文件。

    打开`tencent-cos.yml`进行编辑，将下面内容粘贴进去：

    ```yaml
    cos:
      base:
        secretid: aaaaa
        secretkey: bbbbb
        sessiontoken: ""
        protocol: https
      buckets:
      - name: ccccc
        alias: my-default-bucket
        region: ""
        endpoint: ddddd
    ```

    这里有4个内容需要手动替换成自己的：

    1. aaaaa：替换成自己的Secret Id
    2. bbbbb：替换成自己的Secret Key
    3. ccccc：替换成自己的桶名
    4. ddddd：替换成自己的地域

    完成后保存关闭，coscli就配置完毕了。现在来配置从脚本调用coscli的命令。

    打开编辑模板文件`upload-template.txt`，将下面的内容粘贴进去，然后保存关闭：

    ```batch
    @echo off

    {{ for f in upload_files }}
    coscli-windows.exe -c tencent-cos.yml sync "{f}" "cos://my-default-bucket/backgrounds/{f}" --force {{ endfor }}

    {{ for f in delete_files }}
    coscli-windows.exe -c tencent-cos.yml rm "cos://my-default-bucket/backgrounds/{f}" --force {{ endfor }}

    pause
    del %0
    ```

    脚本最后一行代表删除自己，当上传完成后，可以按任意键继续，然后脚本会删除自己。如果上传失败了，可以手动叉掉窗口，然后重新运行一次上传。

    上面是以windows平台为例子，如果是linux平台，可以用模板生成sh文件，只需要在配置文件config.toml中将生成的脚本文件后缀名修改成`.sh`。
    </TabItem>
    <TabItem value="webui" label="WebUI版本（s3）">
    WebUI版本支持s3和webdav协议的上传。s3协议支持上传到亚马逊，阿里云，腾讯云，华为云，百度云，七牛，雨云等服务商的对象存储服务。
    
    首先打开管理端的配置文件config.toml。
    
    将s3下的enabled改为true，打开s3的上传功能。
    
    s3的配置有5项，端点，桶名，地域，id和key。
    
    后续教程全部使用virtual-hosted方式进行访问s3，path-like方式已经不受支持。
    
    首先需要配置端点：
    
    + 腾讯云：`https://cos.<region>.myqcloud.com`
      + 将`<region>`替换成对应的地域，比如`ap-guangzhou`
    + 阿里云：`https://oss-<resion>.aliyuncs.com`
      + 将`<region>`替换成对应的地域，比如`cn-hangzhou`

    然后需要配置桶名。
    
    + 腾讯云：通常格式为`<BucketName-APPID>`，既桶名+APPID
    + 阿里云：格式没有限制

    然后需要配置地域，虽然端点中已经包含了地域，但这里仍然需要再填一次。
    
    + 腾讯云：通常格式以ap打头，比如`ap-guangzhou`
    + 阿里云：通常格式以cn打头，`cn-hangzhou`
    
    最后是id和key，配置好后重新启动管理端即可生效。
    
    </TabItem>
    <TabItem value="webui-webdav" label="WebUI版本（webdav）">
    WebUI版本支持s3和webdav协议的上传。
    
    首先打开管理端的配置文件config.toml。
    
    将webdav下的enabled改为true，打开webdav的上传功能。
    
    host部分填写webdav的访问地址，username和password分别填写账号和密码。
    
    配置好后重新启动管理端即可生效。
    
    </TabItem>
</Tabs>

