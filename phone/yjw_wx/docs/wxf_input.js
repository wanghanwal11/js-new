var wxf_input = function(){
    this.init = function(el,data){
        var json = [{
                        
                       type : 'label',
                       text : '标签'
                      
                    },{
                        
                            type : 'input',
                            placeholder : '请输入文本',
                            inputtype : 'text'
                       
                    },{
                       
                          type : 'input',
                          placeholder : '存储文本',
                          inputtype : 'textarea'
                       
                    }];
        return json;
    }
}
