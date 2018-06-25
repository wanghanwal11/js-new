var Button = function(){
    this.url = '';
    this.init = function(el,data){
        var json = [{
            type : 'button',
            label : '这是按钮'
        }];
        console.log(data)
        return json;
    }
    this.add = function(data){
        setData(data)
    }
}
