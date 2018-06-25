lazy.plugins.bounce = {
    
    init : function(el,data,parent) {
        //url page rows
        var page = data.page || 1;
        var rows = data.rows || 15;
        var urlarr = data.url.split('?'), url = '';
        if(urlarr[1]) {
            url = data.url + '&';
        }else {
            url = urlarr[0] + '?';
        }
        
        var ajaxBol = true;
        var _html = '<div class="box_f1"></div>';
        var bounce_loading =  lazy.create('div','bounce_loading box box_i_center');
        _html += '<div class="bounce_icon"></div>';
        _html += '<div class="bounce_title">加载中...</div>';
        _html += '<div class="box_f1"></div>';
        bounce_loading.innerHTML = _html;
        el.appendChild(bounce_loading);
        
        if(page == 1)loading();
            
        lazy.bounce({
            up : function() {
                loading();
            }
        });
        
        function loading() {
            if(ajaxBol) {
                ajaxBol = false;
                el.style.display = 'block';
                lazy.ajax({
                    url : url + 'page=' + page + "&rows=" + rows,
                    type : 'GET',
                    success : function(str) {
                        page++;
                        ajaxBol = true;
                        el.style.display = 'none';
                        data.success && data.success(str, page-1,rows);
                    },
                    error : function(e) {
                        ajaxBol = true;
                        data.error && data.error(e, page,rows);
                    }
                });
            } 
        }
    },
    clear : function() {
        
    }
    
}
