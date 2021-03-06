lazy.plugins.map = {
    "init" : function(el,data) {
        lazy.setParameter('dw',1)
        var center = data.center || { lng : 116.397428, lat : 39.90923};
        el.innerHTML = '<div id="map_amap"></div><div class="map_amap"></div>';
        var list = lazy.create('div','.list');
        el.appendChild(list);
        var h = lazy.ip().indexOf('https') == -1? 'http' : 'https';
        lazy.loadJsCss(h+"://webapi.amap.com/maps?v=1.3&key=a0efffe14f35b048afbd62d95e342d28&plugin=AMap.Geocoder", function() {
            //1
            var map = new AMap.Map('map_amap', {
                resizeEnable: true,
                zoom:16,
                center: [center.lng, center.lat]
            });
            /*lazy.gpsToAmap(center, function(point) {
                    map.panTo([point.lng, point.lat]);
                    icon(point);
                });*/
            /*lazy.getGpsWX(function(_point){
               lazy.gpsToAmap(_point, function(point) {
                    map.panTo([point.lng, point.lat]);
                    icon(point);
                });
            })*/
            lazy.getGps(function(_point) {
                if(!_point.lat){
                    lazy.getGpsWX(function(_point1){
                       lazy.gpsToAmap(_point1, function(point) {
                            map.panTo([point.lng, point.lat]);
                            icon(point);
                        });
                    })
                }else{
                	//alert(_point.lat)
                    lazy.gpsToAmap(_point, function(point) {
                    	//alert(3)
                            map.panTo([point.lng, point.lat]);
                            icon(point);
                        });
                }
                
             })
            /*
            lazy.getGps(function(_point) {
                lazy.gpsToAmap(_point, function(point) {
                    map.panTo([point.lng, point.lat]);
                    icon(point);
                });
            });*/
            var marker = null;
            var clickEventListener = map.on('click', function(e) {
                
                if(marker) {
                    marker.setMap(null);
                    marker = null;
                }
                var point = {
                                lat : e.lnglat.getLat(),
                                lng : e.lnglat.getLng()         
                };
                icon(point);
            });
            function icon(point) {
            	
                list.innerHTML = '<div>数据加载中...</div>';
                marker = new AMap.Marker({
                    map: map,
                    position: [point.lng, point.lat],
                    icon: new AMap.Icon({            
                        size: new AMap.Size(23, 23),
                        image: lazy.url+"LazyUI/js/map/icon/click.png",
                        imageSize : new AMap.Size(23, 23)
                    }),
                    offset: new AMap.Pixel(-5, -22)      
                });
               
                lazy.getGpsName(point, function(obj) {
                	//alert(obj.regeocode.formattedAddress)
                    lazy.setParameter('dw',0)
                    var addressComponent = obj.regeocode.addressComponent;
                    var detailaddress = addressComponent.province+addressComponent.district+addressComponent.township+addressComponent.street+addressComponent.streetNumber;
                    lazy.setParameter('dwdata',{
                        address : obj.regeocode.formattedAddress,
                        detailaddress : detailaddress,
                        gps : point
                    })
                    list.innerHTML = '';
                    var tr = lazy.create('div','.tr slh');
                    tr.innerHTML = obj.regeocode.formattedAddress;
                    tr.onclick = function() {
                        data.onclick && data.onclick({
                                    address : obj.regeocode.formattedAddress,
                                    gps : point
                                });
                    };
                    list.appendChild(tr);
                    
                    lazy.for(obj.regeocode.pois, function(pois) {
                        trc(pois);
                    });
                    function trc(pois) {
                        var tr = lazy.create('div','.tr');
                        tr.innerHTML = '<div class="h1 slh">'+pois.name+'</div><div class="h2 slh"><span>'+pois.address+'</span></div>';
                        tr.onclick = function() {
                            data.onclick && data.onclick({
                                    address : pois.address,
                                    gps : pois.location
                                });
                        };
                        list.appendChild(tr);
                    }
                    
                });
            }
            //1
        },'js');
    }
}