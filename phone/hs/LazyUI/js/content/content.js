lazy.plugins.content = {
     "init" : function(el, data){
         
        setData(data.content, function (el1){
             el.appendChild(el1);
        })
       
        function one(arr){
            
            setData(arr, function (el1){
                el.appendChild(el1);
                
            })
            
        }
        data.add = one;
        
        data.clean = function() {
            el.innerHTML = '';
        }
    },
    "edit" : function(parentEl, el, data){
       
    }
}