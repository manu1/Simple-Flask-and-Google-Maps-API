function initialize() {
    var mapOptions = {
        center: new google.maps.LatLng(9.96785, -84.15073),
        zoom: 17,
        mapTypeId: google.maps.MapTypeId.HYBRID
    };

    var map = new google.maps.Map(document.getElementById("map_canvas"),
        mapOptions);

    var marker = new google.maps.Marker({
        position: new google.maps.LatLng(9.96785, -84.15073),
        draggable: true,
        //icon: marker0000,
        icon: new google.maps.MarkerImage("/static/img/map/markers/1/00000.png",
        new google.maps.Size(20, 20),
        new google.maps.Point(0,0),
        new google.maps.Point(10, 20)),
        map: map
    });
    var marker2 = new google.maps.Marker({
        position: new google.maps.LatLng(9.967, -84.150),
        draggable: true,
        //icon: marker0000,
        icon: new google.maps.MarkerImage(
            "http://chart.googleapis.com/chart?chst=d_bubble_text_small&chld=bb|123|FF8080|000000",
            null, null, new google.maps.Point(0, 42)),
        map: map
    });
};
google.maps.event.addDomListener(window, 'load', initialize);