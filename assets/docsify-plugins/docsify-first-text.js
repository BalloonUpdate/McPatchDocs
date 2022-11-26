// 在页脚显示版权文字和贡献者信息
(function(){
    var plugin = function(hook) {
        hook.beforeEach(function(html) {
            return '<span>为避免因误使用复制功能引起的疏漏，现已经关闭复制功能</span>\n' + html
        });
    }

    window.DocsifyFirstText = {
        create: function() {
            return plugin
        }
    }
})();