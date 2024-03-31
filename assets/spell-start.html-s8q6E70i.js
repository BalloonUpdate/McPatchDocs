import{_ as l,o as t,c,e}from"./app-DE99FDxf.js";const i="/McPatchDocs/assets/6411f6297cc3f-DzLgj2ro.jpg",o="/McPatchDocs/assets/6411fd659499b-CSgqfHWV.jpg",s={},a=e('<h1 id="url咒语启动" tabindex="-1"><a class="header-anchor" href="#url咒语启动" aria-hidden="true">#</a> URL咒语启动</h1><p>配置URL咒语启动，云端配置下发以及配置自更新（可选）</p><p>前置动作：</p><ol><li>将配置文件、<code>McPatchClient.jar</code>、<code>hmclversion.cfg</code>放在 <code>workspace/</code>内，一定要按照您想要的配置修改配置文件。</li><li>打包一个新版本，并按照普通更新流程更新。</li><li>发布更新。</li></ol><hr><p>前提条件：</p><p>您对客户端打开了版本隔离。 您使用 https、http 任意一个协议共享文件。 您明白且知道如何教会玩家使用在线导入整合包功能。 您很确定您的玩家会使用hmcl。</p><hr><p>概念解释：</p><ul><li>目录=文件夹=📁</li><li>根目录：某目录结构的起点。</li><li>路径：告诉计算机如何找到某目录或文件的一串字符。</li></ul><h3 id="hmcl" tabindex="-1"><a class="header-anchor" href="#hmcl" aria-hidden="true">#</a> hmcl</h3><ol><li>首先准备好已正确安装 McPatchClient 的客户端，<strong>需要开启版本隔离</strong>。</li><li>打开客户端游戏版本单独设置，填写JVM虚拟机选项，如图： <img src="'+i+'" alt="照抄是学不会的，请您认真思考。"></li><li>如您没有将config.yml放置在客户端文件夹，请补上它。</li><li>导出整合包，信息可按照您的喜好填写，但您<strong>必须勾选</strong>下列文件，这是咒语能否起效的关键！tips:打开包含启动器后，可以让玩家直接下载整合包并解压，但也失去了在线导入的能力，您可以选择另外导出一份不含启动器的整合包，并一起上传。</li></ol><p>这是需要的文件列表： <img src="'+o+'" alt="想要生效，必须勾选！"></p><ol start="5"><li>在存放更新文件的根目录，新建一个目录，上传刚刚导出的整合包。</li><li>组装您的在线整合包url，格式为<code>http或https://您存放整合包的网站服务器地址:端口/您的更新地址</code>，例如<code>https://download.example.com/somefile/your-package.zip</code></li><li>在您编写客户端安装教程时告诉玩家使用此url,hmcl会完全接管安装。</li></ol>',14),r=[a];function h(p,d){return t(),c("div",null,r)}const m=l(s,[["render",h],["__file","spell-start.html.vue"]]);export{m as default};
