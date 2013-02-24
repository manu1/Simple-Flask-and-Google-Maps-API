
function initialize() {
    var mapOptions = {
        //center: new google.maps.LatLng(9.977661, -84.160547),
        center: new google.maps.LatLng(9.977866111988941, -84.15973889067315),
        zoom: 18,
        mapTypeId: google.maps.MapTypeId.HYBRID
    };

    var map = new google.maps.Map(document.getElementById("map_canvas"), mapOptions);

    $.getJSON("static/json/map.json", function(json) {
        var paths = [];
        var pts = json.pls[0].pts;
        for (var i = 0, length = pts.length; i < length; i++) {
            paths.push(new google.maps.LatLng(pts[i][0], pts[i][1]));
        };

        var pl = new google.maps.Polygon({
            paths: paths,
            strokeColor: "#FF0000",
            strokeOpacity: 0.8,
            strokeWeight: 2,
            fillColor: "#FF0000",
            fillOpacity: 0.15
        });
        pl.setMap(map);
    });

    $.getJSON("static/json/map.json", function(json) {
        var markers = json.markers;
        for (var i = 1, length = markers.length + 1; i < length; i++) {
            var data = markers[i-1],
                latLng = new google.maps.LatLng(data.lat, data.lng); 

        var spriteImage = "";
        var markerHeight = 12;
        if (i < 10) {
            spriteImage = "/static/img/map/sprites/sprite_1.png";
            markerWidth = 12;
            spriteX     = (i - 1) * markerWidth;
            spriteY     = 0 * markerWidth;
        } else if (i < 100) {
            spriteImage = "/static/img/map/sprites/sprite_2.png";
            markerWidth = 16;
            spriteX     = (i - 10) * markerWidth;
            spriteY     = 0 * markerWidth;
        } else {
            spriteImage = "/static/img/map/sprites/sprite_3.png";
            markerWidth = 20;
            spriteX     = (i - 100) * markerWidth;
            spriteY     = 0 * markerWidth;
        }
        console.log(i);
        console.log(spriteImage);

        // Creating a marker and putting it on the map
        var marker = new google.maps.Marker({
            position: latLng,
            map: map,

            icon: new google.maps.MarkerImage(spriteImage,
                new google.maps.Size(markerWidth, 12),
                // new google.maps.Point((i - markerOffset) * markerWidth, (i - markerOffset) * 12),
                new google.maps.Point(spriteX, spriteY),
                // new google.maps.Point(0, 0),
                new google.maps.Point(0, 0)),
          });
        }
    });



};
google.maps.event.addDomListener(window, 'load', initialize);