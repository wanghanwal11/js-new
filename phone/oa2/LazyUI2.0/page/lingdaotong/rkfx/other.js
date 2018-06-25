PAGE_INIT = function(parent) {
   setData([{
        type : 'grid',
        table : [
                    [{
                        icon : lazy.name + '/images/lingdaotong/grid/csd.png',
                        title : '出生地',
                        onclick : function() {
                            lazy.openNewWin('#lingdaotong/rkfx/csd');
                        }
                    },{
                        icon : lazy.name + '/images/lingdaotong/grid/rkjg.png',
                        title : '人口结构',
                        onclick : function() {
                            lazy.openNewWin('#lingdaotong/rkfx/rkjg');
                        }
                    },{
                        icon : lazy.name + '/images/lingdaotong/grid/ssmz.png',
                        title : '少数民族',
                        onclick : function() {
                            lazy.openNewWin('#lingdaotong/rkfx/ssmz');
                        }
                    },{
                        icon : lazy.name + '/images/lingdaotong/grid/etrk.png',
                        title : '儿童人口',
                        onclick : function() {
                            lazy.openNewWin('#lingdaotong/rkfx/etrk');
                        }
                    }],[{
                        icon : lazy.name + '/images/lingdaotong/grid/lnrk.png',
                        title : '老年人口',
                        onclick : function() {
                            lazy.openNewWin('#lingdaotong/rkfx/lnrk');
                        }
                    },{
                        icon : lazy.name + '/images/lingdaotong/grid/ylfn.png',
                        title : '育龄妇女',
                        onclick : function() {
                            lazy.openNewWin('#lingdaotong/rkfx/ylfn');
                        }
                    },{
                        icon : lazy.name + '/images/lingdaotong/grid/ldrk.png',
                        title : '流动人口',
                        onclick : function() {
                            lazy.openNewWin('#lingdaotong/rkfx/ldrk');
                        }
                    },{
                        icon : lazy.name + '/images/lingdaotong/grid/czw.png',
                        title : '出租屋',
                        onclick : function() {
                            lazy.openNewWin('#lingdaotong/rkfx/czw');
                        }
                    }]
                    /*,[{
                        icon : lazy.name + '/images/lingdaotong/grid/rwgx.png',
                        title : '人物关系',
                        onclick : function() {
                            lazy.openWin('#lingdaotong/rkfx/rwgx');
                        }
                    }]
                    */
                ]
   }]); 
    
}