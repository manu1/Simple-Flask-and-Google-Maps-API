var markerStates = ['new', 'try_1', 'try_1_contacted', 'try_2', 'try_2_contacted', 'try_3', 'try_3_contacted']
var spritesPath = "/static/img/map/sprites/"
function randomFromInterval(from,to) {
    return Math.floor(Math.random()*(to-from+1)+from);
}
function marker(map, latLng, markerNo, markerState) {
    // Random values here for now
    markerNo = Math.floor(Math.random() * 199);

    var markerHeight = 14;
    if (markerNo < 10) {
        spriteImage = spritesPath + "sprite_1.png";
        markerWidth = 12;
        spriteX     = (markerNo - 1) * markerWidth;
        spriteY     = markerState * markerHeight;
    } else if (markerNo < 100) {
        spriteImage = spritesPath + "sprite_2.png";
        markerWidth = 16;
        spriteX     = (markerNo - 10) * markerWidth;
        spriteY     = markerState * markerHeight;
    } else {
        spriteImage = spritesPath + "sprite_3.png";
        markerWidth = 20;
        spriteX     = (markerNo - 100) * markerWidth;
        spriteY     = markerState * markerHeight;
    }
    if (spriteY){
        spriteY += 1;  // WHY? It just looks lined up correctly. :)
    }
    // Creating a marker and putting it on the map
    var marker = new google.maps.Marker({
        position: latLng,
        map: map,

        icon: new google.maps.MarkerImage(spriteImage,
            new google.maps.Size(markerWidth, 12),
            // new google.maps.Point((markerNo - markerOffset) * markerWidth, (markerNo - markerOffset) * 12),
            new google.maps.Point(spriteX, spriteY),
            // new google.maps.Point(0, 0),
            new google.maps.Point(0, 0)),
      });
    }

function hello(item){
    console.log(item.dNam)
}
function initialize() {
    var mapOptions = {
        //center: new google.maps.LatLng(9.977661, -84.160547),
        center: new google.maps.LatLng(9.977866111988941, -84.15973889067315),
        zoom: 18,
        mapTypeId: google.maps.MapTypeId.HYBRID
    };
    $.getJSON("http://exi.orgtec.com/cnts/", function(json) {
            hello(json._items[0]);
        }
    );
    //console.log(alice.name)
    // $.ajax({url: "http://exi.orgtec.com/prss/",
    //     type: 'GET',
    //     dataType: 'json',
    //     success: function (data, textStatus, xhr) {
    //         console.log(data);
    //     },
    //     error: function (xhr, textStatus, errorThrown) {
    //         console.log(errorThrown);
    //         console.log(textStatus);
    //     }
    // });

    // $.post('link-to-my-python-script',{data},
    //     function(answer){
    //               // process your request here ..
    //     });

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
            var markerState = randomFromInterval(0, markerStates.length + 2);
            marker(map, latLng, i, markerState);
        };
    });



};
google.maps.event.addDomListener(window, 'load', initialize);