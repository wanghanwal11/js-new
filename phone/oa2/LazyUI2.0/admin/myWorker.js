//这里是计算器线程
onmessage = function(event) {
    var obj = event.data;
    if ( typeof obj == 'object') {
        switch(obj.type) {
        //关键字
        case 'string' :
            log(obj.message);
            break;

        //下面自定义
        case 'demo' :
            demo(obj.message);
            break;
        case 'map' :
            map(obj.message);
            break;
        }
    } else {
        log('myworker只能是object类型');
    }
}
//自定义函数-----------------------------------
function demo(obj) {
    console.log(obj);

    //结束后一定要调用发生方法
    send('求和');
}

function map(obj) {
    var chartdatalist = [],
        xlist = [],
        namelist = [],
        valuelist = [],
        k = obj.k;
        
    for (var i = 0; i < obj.data.length; i++) {
        xlist.push(obj.data[i].xaxis);
        for (var j = 0; j < obj.data[i].dataArr.length; j++) {
            if (i == 0)
                namelist.push(obj.data[i].dataArr[j].name);
            if (!valuelist[j])
                valuelist[j] = [];
                
            if(obj.two){
                valuelist[j][i] =obj.data[i].dataArr[j].value*((j==0||j==1)?-1:1)
            }else{
                valuelist[j][i] = obj.data[i].dataArr[j].value;
            }
            
            
        }
    };
    /*
    lazy.for(data.data||[],function(mobj,i) {
    xlist.push(mobj.xaxis);
    lazy.for(mobj.dataArr||[],function(obj,j) {
    if(i==0)namelist.push(obj.name);
    if(!valuelist[j])valuelist[j]=[];
    valuelist[j][i] = obj.value;
    })
    });
    */
    //结束后一定要调用发生方法
    send({xlist : xlist, namelist : namelist, valuelist : valuelist,k:k});
}

//关键字--------------------------------------
function log(obj) {
    postMessage({
        type : 'log',
        message : obj
    });
}

function send(obj) {
    postMessage({
        type : 'calculator',
        message : obj
    });
}