import{_ as a,o as c,c as e,e as i}from"./app-DE99FDxf.js";const t={},l=i('<h1 id="热升级" tabindex="-1"><a class="header-anchor" href="#热升级" aria-hidden="true">#</a> 热升级</h1><p>McPatch客户端会不定期发布新的版本。但升级客户端不像升级管理端那样方便，因为客户端在玩家电脑上，升级需要重新发包，比较麻烦</p><p>热升级就是用来解决这个问题的，通过使用动态加载器启动McPatch客户端后，McPatch客户端就可以间接地自己更新自己的版本了</p><p>说明：热升级新版本之后，需要第二次启动的时候新版本才会生效，这是一个很小的细节，但是必须要提一下</p><h3 id="兼容性" tabindex="-1"><a class="header-anchor" href="#兼容性" aria-hidden="true">#</a> 兼容性</h3><p>动态加载器目前支持全平台的所有Minecraft版本，但最低需要Java 8才能运行</p><p>动态加载器目前支持McPatch客户端全版本</p><p>注意McPatch客户端跨大版本升级（1.0升级到1.1）是不支持的，会出现<code>version.txt</code>文件一直404的情况！原因是新版修改了版本号文件的文件名</p><h3 id="_1-客户端首次配置" tabindex="-1"><a class="header-anchor" href="#_1-客户端首次配置" aria-hidden="true">#</a> 1.客户端首次配置</h3><p>动态加载器需要提前配置在客户端，并且这个文件是永远不需要更新的（除非遇到严重bug），只更新客户端本体就好</p><ol><li>下载动态加载器DynamicLoader（版本选择最新版即可）</li><li>把动态加载器文件复制到目前正在使用的McPatch客户端旁边（一定要挨着放，不然会报错）</li><li>双击运行动态加载器，然后会提示什么什么文件为空，无法启动之类的，先不管它，直接叉掉</li><li>打开<code>mc-patch-dynamic-loader.txt</code>文件（这个文件就是动态加载器的配置文件）</li><li>将目前正在使用McPatch客户端的实际文件名（包括后缀名）写入进去，然后保存关闭</li><li>再次运行动态加载器，发现可以启动McPatch客户端了</li><li>打开Minecraft启动器，修改原先的Java虚拟机参数。将原先McPatch客户端的文件名换成动态加载器的文件名（仅替换文件名，其它不动）</li><li>比如原来是<code>-javaagent:McPatchClient-11.45.14.jar </code>，改过之后就是<code>-javaagent:DynamicLoader-1.0.0.jar </code>（最后面的空格不要漏掉，此段代码请勿复制，如果复制必定启动失败）</li><li>回到启动器主页，启动Minecraft，如果McPatch客户端运行起来了，说明配置无误，可以继续进行后面的步骤</li></ol><h3 id="_2-管理端这边的操作" tabindex="-1"><a class="header-anchor" href="#_2-管理端这边的操作" aria-hidden="true">#</a> 2.管理端这边的操作</h3><ol><li>第一步是手工下载好新版本的McPatch客户端文件</li><li>将动态加载器的配置文件<code>mc-patch-dynamic-loader.txt</code>文件从客户端那边复制到工作空间目录里，以加入更新</li><li>动态加载器的配置文件位置需要放到：能通过更新去覆盖掉客户端对应的文件的位置上就可以，因为每个人位置都不一样，所以没有一个固定的文件位置</li><li>如果你之前做过第2，3步骤，那么后续的更新就可以跳这两个步骤</li><li>将新版的McPatch客户端本体文件也放入工作空间目录，位置在动态加载器的配置文件的旁边紧挨着</li><li>打开动态加载器的配置文件，先清空原有内容，然后将新版的McPatch客户端文件名粘贴进去保存关闭。这样动态加载器就会加载新版本的客户端文件了</li><li>创建一个新的版本，包含这两个文件，然后分发给玩家即可</li></ol><h3 id="一些小提示" tabindex="-1"><a class="header-anchor" href="#一些小提示" aria-hidden="true">#</a> 一些小提示</h3><p>做远程热升级的时候，务必保证动态加载器的配置文件的内容填写正确，因为填写错误会导致客户端启动失败，游戏也无法启动。解决办法是只能手动给玩家发一份【动态加载器的配置文件】和【客户端本体】替换掉游戏才可以恢复正常</p>',15),d=[l];function h(r,o){return c(),e("div",null,d)}const s=a(t,[["render",h],["__file","dynamic-loader.html.vue"]]);export{s as default};
