GoogleMaps.init(
    {
        'sensor': true, //optional
        'key': 'MY-GOOGLEMAPS-API-KEY', //optional
        'language': 'de' //optional
    }, 
    function(){
        var mapOptions = {
            zoom: 13,
            mapTypeId: google.maps.MapTypeId.SATELLITE,
            styles: [ 
            {   featureType:'water',    stylers:[{color:'#03C9A9'},{visibility:'on'}] },
            {   featureType:'landscape',    stylers:[{color:'#f2f2f2'}] },
            {   featureType:'road',   stylers:[{saturation:-100},{lightness:45}]  },
            {   featureType:'road.highway',   stylers:[{visibility:'simplified'}] },
            {   featureType:'road.arterial',    elementType:'labels.icon',    stylers:[{visibility:'off'}]  },
            {   featureType:'administrative',   elementType:'labels.text.fill',   stylers:[{color:'#444444'}] },
            {   featureType:'transit',    stylers:[{visibility:'off'}]  },
            {   featureType:'poi',    stylers:[{visibility:'off'}]  }
            ]
        };
        map = new google.maps.Map(document.getElementById("map-canvas"), mapOptions); 
        map.setCenter(new google.maps.LatLng( 35.363556, 138.730438 ));
    }
);