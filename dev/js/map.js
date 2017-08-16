 google.maps.event.addDomListener(window, 'load', init);

 function init() {
     var mapOptions = {
         zoom: 14
         , center: new google.maps.LatLng(55.750702, 37.609532)
         , disableDefaultUI: true
         , styles: [{
             "featureType": "water"
             , "elementType": "geometry"
             , "stylers": [{
                 "color": "#e9e9e9"
             }, {
                 "lightness": 17
             }]
         }, {
             "featureType": "landscape"
             , "elementType": "geometry"
             , "stylers": [{
                 "color": "#f5f5f5"
             }, {
                 "lightness": 20
             }]
         }, {
             "featureType": "road.highway"
             , "elementType": "geometry.fill"
             , "stylers": [{
                 "color": "#ffffff"
             }, {
                 "lightness": 17
             }]
         }, {
             "featureType": "road.highway"
             , "elementType": "geometry.stroke"
             , "stylers": [{
                 "color": "#ffffff"
             }, {
                 "lightness": 29
             }, {
                 "weight": 0.2
             }]
         }, {
             "featureType": "road.arterial"
             , "elementType": "geometry"
             , "stylers": [{
                 "color": "#ffffff"
             }, {
                 "lightness": 18
             }]
         }, {
             "featureType": "road.local"
             , "elementType": "geometry"
             , "stylers": [{
                 "color": "#ffffff"
             }, {
                 "lightness": 16
             }]
         }, {
             "featureType": "poi"
             , "elementType": "geometry"
             , "stylers": [{
                 "color": "#f5f5f5"
             }, {
                 "lightness": 21
             }]
         }, {
             "featureType": "poi.park"
             , "elementType": "geometry"
             , "stylers": [{
                 "color": "#dedede"
             }, {
                 "lightness": 21
             }]
         }, {
             "elementType": "labels.text.stroke"
             , "stylers": [{
                 "visibility": "on"
             }, {
                 "color": "#ffffff"
             }, {
                 "lightness": 16
             }]
         }, {
             "elementType": "labels.text.fill"
             , "stylers": [{
                 "saturation": 36
             }, {
                 "color": "#333333"
             }, {
                 "lightness": 40
             }]
         }, {
             "elementType": "labels.icon"
             , "stylers": [{
                 "visibility": "off"
             }]
         }, {
             "featureType": "transit"
             , "elementType": "geometry"
             , "stylers": [{
                 "color": "#f2f2f2"
             }, {
                 "lightness": 19
             }]
         }, {
             "featureType": "administrative"
             , "elementType": "geometry.fill"
             , "stylers": [{
                 "color": "#fefefe"
             }, {
                 "lightness": 20
             }]
         }, {
             "featureType": "administrative"
             , "elementType": "geometry.stroke"
             , "stylers": [{
                 "color": "#fefefe"
             }, {
                 "lightness": 17
             }, {
                 "weight": 1.2
             }]
         }]
     };
     var mapElement = document.getElementById('map');
     var map = new google.maps.Map(mapElement, mapOptions);
     var marker = new google.maps.Marker({
         position: {
             lat: 55.750762
             , lng: 37.609532
         }
         , map: map
         , title: ''
         , icon: 'img/marker.png'
     });
     var contentString = '<div id="content">' + '<div id="siteNotice">' + '</div>' + '<div id="bodyContent">' + '<div class="map-info-text"> г. Москва, ул. Московская, <br> д. 44, оф. 556 </div>' + '</div>' + '</div>';
     var infowindow = new google.maps.InfoWindow({
         content: contentString
         , maxWidth: 275
         , pixelOffset: new google.maps.Size(135, 140)
     });
     
     window.addEventListener('resize', function() {
          
            map.setCenter( marker.getPosition() );
        });
     
     infowindow.open(map, marker);
     
     google.maps.event.addListener(infowindow, 'domready', function () {
         var iwOuter = $('.gm-style-iw');
         var iwBackground = iwOuter.prev();
         iwBackground.children(':nth-child(1)').attr('style', function (i, s) {
             return s + 'display: none !important;'
         });
         iwBackground.children(':nth-child(3)').attr('style', function (i, s) {
             return s + 'display: none !important;'
         });
     })
     $('.gmnoprint').attr('style', function (i, s) {
         return s + 'display: none !important;'
     });
    
     
     marker.addListener('click', function () {
         infowindow.open(map, marker);
     });
     map.addListener('click', function () {
         infowindow.close();
     });
 }