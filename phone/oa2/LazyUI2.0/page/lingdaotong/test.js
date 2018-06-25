PAGE_INIT = function(parent) {
    var dateObj = {
        year : 0,
        month : 0,
        day : 0
    };
    setData([{
        id : 'topNav_0',
        type : 'topNav_0',
        titles : ['年']
    }, {
        id : 'picker2',
        type : 'picker',
        // list : [[{name:'fasdf'},{name:'gafga'}]],
        list : [],
        split : [],
        contact : false,
        onclick : function(obj) {
           
            obj = obj[0];
            console.log(obj.value)
            dateObj[obj.type] = obj.name;
            if(obj.type == 'year') {
                getData('topNav_0').setTitles([dateObj.year,'月']);
            }else if(obj.type == 'month') {
                getData('topNav_0').setTitles([dateObj.year,dateObj.month,'日']);
            }else if(obj.type == 'day') {
                getData('topNav_0').setTitles([dateObj.year,dateObj.month,dateObj.day]);
            }
        }    
            
    }])
    
    getData('topNav_0').onclick = function(i) {
        if(i==0) {
            getData('picker2').list = [lazy.getYMD()];
            getData('picker2').renderer();
            getData('picker2').show();
        }else if(i==1) {
            getData('picker2').list = [lazy.getYMD(dateObj.year)];
            getData('picker2').renderer();
            getData('picker2').show();
        }else if(i==2) {
            getData('picker2').list = [lazy.getYMD(dateObj.year, dateObj.month)];
            getData('picker2').renderer();
            getData('picker2').show();
        }
    }
};
