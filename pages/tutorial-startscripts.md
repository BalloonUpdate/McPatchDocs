# 编写启动脚本

在使用McPatch之前，我们先要为它编写两个启动脚本，过程很简单

1. 打开刚创建的`mp`目录
2. 新建`manage.bat`，粘贴`java -jar xxx.jar & pause`进去，然后保存关闭
   + 把`xxx`换成`McPatchManage`实际文件名
3. 新建`httpserver.bat`，粘贴`java -jar xxx.jar & pause`进去，然后保存关闭
   + 把`xxx`换成`MiniHttpServer`实际文件名
5. 在`mp`目录下创建一个新的目录叫`workspace`

每个文件的用途是这样的：

+ `manage.bat`脚本用来启动管理端，打新的更新包，用完后可以关掉管理端
+ `httpserver.bat`脚本用来启动服务端，给客户端下载用，需要一直开着不能关闭
+ `workspace`目录用来存放你要更新的文件