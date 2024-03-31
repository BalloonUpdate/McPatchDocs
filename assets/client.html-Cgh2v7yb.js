import{_ as o,r as n,o as a,c as l,a as e,b as c,d as s,e as i}from"./app-DE99FDxf.js";const r={},d=i('<h1 id="安装客户端" tabindex="-1"><a class="header-anchor" href="#安装客户端" aria-hidden="true">#</a> 安装客户端</h1><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>首先推荐你把客户端先整个备份一遍，以避免调试更新时误删了重要的文件（尤其是第一次使用McPatch时）</p></div><p>我们把客户端程序文件复制到你客户端的<code>.minecraft</code>目录的旁边（紧挨着）</p><p>用压缩软件打开客户端程序文件，把配置文件<code>mc-patch-config.yml</code>或者<code>config.yml</code>解压到旁边，并打开编辑</p><p>接着把在“远程访问测试”或者“本地访问测试”中提到的链接（优先使用前者提到的链接），粘贴到配置文件的<code>server</code>选项后面，然后保存关闭（具体使用哪一个链接取决于你的部署环境是局域网还是广域网）</p><div class="custom-container warning"><p class="custom-container-title">WARNING</p><p>如果你发现你没有这个链接，那么你很可能是跳过了访问测试的步骤，这个步骤很重要请不要跳过去</p></div><p>接着双击运行客户端主程序，此时会开始更新刚刚打包的第一个版本</p><p>更新完成后检查一下<code>mc-patch-version.txt</code>这个文件的内容，确保是<code>1.0</code>或者你刚创建的版本号</p><p>到此，客户端就算配置成功了。</p><hr>',10),p={href:"/guide/caution",target:"_blank",rel:"noopener noreferrer"},_=e("ol",null,[e("li",null,"不小心发错版本怎么办？"),e("li",null,"为什么个别文件会更新失败？"),e("li",null,"不小心修改了history目录怎么还原？"),e("li",null,"怎么加密配置文件？")],-1),u=e("div",{class:"custom-container tip"},[e("p",{class:"custom-container-title"},"TIP"),e("p",null,[c("如果你确定配置文件已经调试完成，不会再改它，可以把这个文件打包回"),e("code",null,"McPatchClient.jar"),c("里，然后删除外部的配置文件，程序会自动读取Jar内部的配置文件，以保持目录整洁")])],-1);function h(m,f){const t=n("ExternalLinkIcon");return a(),l("div",null,[d,e("p",null,[c("最后，请请仔细阅读"),e("a",p,[c("注意事项"),s(t)]),c("，这里写的都是最、最、最常见的问题，看过后帮你少踩很多坑！内容包括但不限于：")]),_,u])}const x=o(r,[["render",h],["__file","client.html.vue"]]);export{x as default};
