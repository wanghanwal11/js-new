var wxf_button = function(){
    this.init = function(el,data){
        var json = [{
                    "type" : "button",
                    "label" : "界面操作normal",
                    "onclick" : function() {
                            lazy.setGoBack();
                            getData('map').show();
                            getData('group').hide();
                            function ceshi (){
                                
                            }
                        }
                    }
                    
                    ,{
                        "type" : "button",
                        "label" : "界面操作disabled",
                        "disabled" : true
                    },{
                        type : 'button',
                        label : '不填满',
                        fill : false
                    },{
                        type : 'button',
                        color : 'red',
                        label : '颜色color',
                        onclick : function() {
                            
                        }
                    }
                    ];
        return json;
    }
}
