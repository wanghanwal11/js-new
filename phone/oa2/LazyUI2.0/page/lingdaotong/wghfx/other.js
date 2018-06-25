PAGE_INIT = function(parent) {
   setData([{
        type : 'grid',
        table : [
                    [{
                        icon : lazy.name + '/images/lingdaotong/grid/sjlx.png',
                        title : '事件类型',
                        onclick : function() {
                            lazy.openNewWin('#lingdaotong/wghfx/sjlx');
                        }
                    },{
                        icon : lazy.name + '/images/lingdaotong/grid/wgy.png',
                        title : '网格员',
                        onclick : function() {
                            lazy.openNewWin('#lingdaotong/wghfx/wgy');
                        }
                    },{
                        icon : lazy.name + '/images/lingdaotong/grid/sjbl.png',
                        title : '事件办理',
                        onclick : function() {
                            lazy.openNewWin('#lingdaotong/wghfx/sjbl');
                        }
                    },{
                        icon : lazy.name + '/images/lingdaotong/grid/sjyqfg.png',
                        title : '事件逾期返工',
                        onclick : function() {
                            lazy.openNewWin('#lingdaotong/wghfx/sjyqfg');
                        }
                    }]
                ]
   }]); 
    
}