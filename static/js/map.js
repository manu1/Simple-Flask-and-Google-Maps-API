function initialize() {
    var mapOptions = {
        center: new google.maps.LatLng(9.96785, -84.15073),
        zoom: 17,
        mapTypeId: google.maps.MapTypeId.HYBRID
    };

    var map = new google.maps.Map(document.getElementById("map_canvas"),
        mapOptions);

    var marker = new google.maps.Marker({
        position: new google.maps.LatLng(9.967937,-84.15062),
        draggable: true,
        //icon: marker0000,
        icon: new google.maps.MarkerImage("/static/img/map/markers/1/sprite2.png",
        new google.maps.Size(40, 24),
        new google.maps.Point(41,0),
        new google.maps.Point(0, 0)),
        map: map
    });
    var marker2 = new google.maps.Marker({
        position: new google.maps.LatLng(9.96794,-84.1505),
        draggable: true,
        //icon: marker0000,
        icon: new google.maps.MarkerImage(
            "http://chart.googleapis.com/chart?chst=d_bubble_text_small&chld=bb|123|FF8080|000000",
            null, null, new google.maps.Point(0, 0)),
        map: map
    });
    var marker3 = new google.maps.Marker({
        position: new google.maps.LatLng(9.967868, -84.151304),
        draggable: true,
        //icon: marker0000,
        icon: new google.maps.MarkerImage("/static/img/map/markers/1/3.png",
            null, null, null, new google.maps.Size(10, 10),
        new google.maps.Point(0,0),
        new google.maps.Point(0, 0)),
        map: map
    });
    var marker4 = new google.maps.Marker({
        position: new google.maps.LatLng(9.967551, -84.151298),
        draggable: true,
        //icon: marker0000,
        icon: new google.maps.MarkerImage("/static/img/map/markers/1/2.png",
        new google.maps.Size(10, 10),
        new google.maps.Point(0,0),
        new google.maps.Point(0, 0)),
        map: map
    });
    var marker5 = new google.maps.Marker({
        position: new google.maps.LatLng(9.968029, -84.15121),
        draggable: true,
        //icon: marker0000,
        icon: new google.maps.MarkerImage("/static/img/map/markers/1/4.png",
        new google.maps.Size(15, 15),
        new google.maps.Point(0,0),
        new google.maps.Point(0, 0)),
        map: map
    });
    var marker6 = new google.maps.Marker({
        position: new google.maps.LatLng(9.968954,-84.152489),
        draggable: true,
        //icon: marker0000,
        icon: new google.maps.MarkerImage("/static/img/map/markers/1/91.png",
        null, null, null, new google.maps.Size(12, 12),
        new google.maps.Point(0,0),
        new google.maps.Point(0, 0)),
        map: map
    });
    var marker7 = new google.maps.Marker({
        position: new google.maps.LatLng(9.969022,-84.152567),
        draggable: true,
        //icon: marker0000,
        icon: new google.maps.MarkerImage("/static/img/map/markers/1/000.png",
        null, null, null, new google.maps.Size(20, 12),
        new google.maps.Point(0,0),
        new google.maps.Point(10, 10)),
        map: map
    });
    var marker8 = new google.maps.Marker({
        position: new google.maps.LatLng(9.967197,-84.151277),
        draggable: true,
        //icon: marker0000,
        icon: new google.maps.MarkerImage("/static/img/map/markers/1/1.png",
        null, null, null, new google.maps.Size(10, 10),
        new google.maps.Point(0,0),
        new google.maps.Point(10, 10)),
        map: map
    });
    var marker9 = new google.maps.Marker({
        position: new google.maps.LatLng(9.969067,-84.15264),
        draggable: true,
        //icon: marker0000,
        icon: new google.maps.MarkerImage("/static/img/map/markers/1/3digits.png",
        null, null, null, new google.maps.Size(20, 12),
        new google.maps.Point(0,0),
        new google.maps.Point(10, 10)),
        map: map
    });
    var marker10 = new google.maps.Marker({
        position: new google.maps.LatLng(9.969112,-84.152707),
        draggable: true,
        //icon: marker0000,
        icon: new google.maps.MarkerImage("/static/img/map/markers/1/2digits.png",
        null, null, null, new google.maps.Size(20, 12),
        new google.maps.Point(0,0),
        new google.maps.Point(10, 10)),
        map: map
    });
    var marker11 = new google.maps.Marker({
        position: new google.maps.LatLng(9.969207,-84.152827),
        draggable: true,
        //icon: marker0000,
        icon: new google.maps.MarkerImage("/static/img/map/markers/1/1digits.png",
        null, null, null, new google.maps.Size(9, 12),
        new google.maps.Point(0,0),
        new google.maps.Point(10, 10)),
        map: map
    });
    var marker12 = new google.maps.Marker({
        position: new google.maps.LatLng(9.973273,-84.147787),
        draggable: true,
        //icon: marker0000,
        icon: new google.maps.MarkerImage("/static/img/map/markers/1/g3.png",
        null, null, null, new google.maps.Size(24, 12),
        new google.maps.Point(0,0),
        new google.maps.Point(10, 10)),
        map: map
    });
    var marker13 = new google.maps.Marker({
        position: new google.maps.LatLng(9.96739,-84.150958),
        draggable: true,
        //icon: marker0000,
        icon: new google.maps.MarkerImage("/static/img/map/markers/1/225.png",
        null, null, null, new google.maps.Size(24, 12),
        new google.maps.Point(0,0),
        new google.maps.Point(10, 10)),
        map: map
    });
};
google.maps.event.addDomListener(window, 'load', initialize);
