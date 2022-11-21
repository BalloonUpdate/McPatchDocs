// 在页脚显示版权文字和贡献者信息
(function(){
    var plugin = function(hook) {
        hook.beforeEach(function(html) {
            return '<span>为了避免阅读过程中因直接复制文字引起的疏漏，现已经关闭文章内容复制功能，请谅解！</span>\n' + html
        });
    }

    window.DocsifyFirstText = {
        create: function() {
            return plugin
        }
    }
})();