var b1 = function(){
    this.add = function(data){
        
        lazy.for(data,function(obj){
            var json=[];
            json.push(obj)
             console.log(json)
            setData(json)
        })
    }
}
