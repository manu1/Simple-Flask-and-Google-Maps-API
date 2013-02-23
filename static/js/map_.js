function initialize() {
    var mapOptions = {
        center: new google.maps.LatLng(9.977661,-84.160547),
        zoom: 19,
        mapTypeId: google.maps.MapTypeId.HYBRID
    };

    var map = new google.maps.Map(document.getElementById("map_canvas"),
        mapOptions);

    var marker = new google.maps.Marker({
        position: new google.maps.LatLng(9.967937,-84.15062),
        draggable: true,
        //icon: marker0000,
        icon: new google.maps.MarkerImage("/static/img/map/markers/1/sprite3.png",    
        new google.maps.Size(40, 24),
        new google.maps.Point(41, 0),
        new google.maps.Point(0, 0),
        new google.maps.Size(20, 12)),
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
    var marker14 = new google.maps.Marker({
        position: new google.maps.LatLng(9.977642,-84.157655),
        draggable: true,
        //icon: marker0000,
        icon: new google.maps.MarkerImage("/static/img/map/markers/1/001.png",
        null, null, null, new google.maps.Size(24, 12),
        new google.maps.Point(0,0),
        new google.maps.Point(10, 10)),
        map: map
    });
    var marker15 = new google.maps.Marker({
        position: new google.maps.LatLng(9.977602,-84.157988),
        draggable: true,
        //icon: marker0000,
        icon: new google.maps.MarkerImage("/static/img/map/markers/1/002.png",
        null, null, null, new google.maps.Size(24, 12),
        new google.maps.Point(0,0),
        new google.maps.Point(10, 10)),
        map: map
    });
    var marker16 = new google.maps.Marker({
        position: new google.maps.LatLng(9.977518,-84.158194),
        draggable: true,
        //icon: marker0000,
        icon: new google.maps.MarkerImage("/static/img/map/markers/1/003.png",
        null, null, null, new google.maps.Size(24, 12),
        new google.maps.Point(0,0),
        new google.maps.Point(10, 10)),
        map: map
    });
    var marker17 = new google.maps.Marker({
        position: new google.maps.LatLng(9.977518,-84.158194),
        draggable: true,
        //icon: marker0000,
        icon: new google.maps.MarkerImage("/static/img/map/markers/1/003.png",
        null, null, null, new google.maps.Size(24, 12),
        new google.maps.Point(0,0),
        new google.maps.Point(10, 10)),
        map: map
    });
    var marker18 = new google.maps.Marker({
        position: new google.maps.LatLng(9.977473,-84.158393),
        draggable: true,
        //icon: marker0000,
        icon: new google.maps.MarkerImage("/static/img/map/markers/1/004.png",
        null, null, null, new google.maps.Size(24, 12),
        new google.maps.Point(0,0),
        new google.maps.Point(10, 10)),
        map: map
    });
    var marker19 = new google.maps.Marker({
        position: new google.maps.LatLng(9.977756,-84.158602),
        draggable: true,
        //icon: marker0000,
        icon: new google.maps.MarkerImage("/static/img/map/markers/1/5.png",
        null, null, null, new google.maps.Size(8.5, 12),
        new google.maps.Point(0,0),
        new google.maps.Point(10, 10)),
        map: map
    });
    var marker20 = new google.maps.Marker({
        position: new google.maps.LatLng(9.977589,-84.158736),
        draggable: true,
        //icon: marker0000,
        icon: new google.maps.MarkerImage("/static/img/map/markers/1/6.png",
        null, null, null, new google.maps.Size(8.5, 12),
        new google.maps.Point(0,0),
        new google.maps.Point(10, 10)),
        map: map
    });
    var marker21 = new google.maps.Marker({
        position: new google.maps.LatLng(9.977679,-84.158897),
        draggable: true,
        //icon: marker0000,
        icon: new google.maps.MarkerImage("/static/img/map/markers/1/7.png",
        null, null, null, new google.maps.Size(8.5, 12),
        new google.maps.Point(0,0),
        new google.maps.Point(10, 10)),
        map: map
    });
    var marker22 = new google.maps.Marker({
        position: new google.maps.LatLng(9.977872,-84.158801),
        draggable: true,
        //icon: marker0000,
        icon: new google.maps.MarkerImage("/static/img/map/markers/1/8.png",
        null, null, null, new google.maps.Size(8.5, 12),
        new google.maps.Point(0,0),
        new google.maps.Point(10, 10)),
        map: map
    });
    var marker23 = new google.maps.Marker({
        position: new google.maps.LatLng(9.978044,-84.158626),
        draggable: true,
        //icon: marker0000,
        icon: new google.maps.MarkerImage("/static/img/map/markers/1/9.png",
        null, null, null, new google.maps.Size(8.5, 12),
        new google.maps.Point(0,0),
        new google.maps.Point(10, 10)),
        map: map
    });
    var marker24 = new google.maps.Marker({
        position: new google.maps.LatLng(9.978184,-84.159007),
        draggable: true,
        //icon: marker0000,
        icon: new google.maps.MarkerImage("/static/img/map/markers/1/001.png",
        null, null, null, new google.maps.Size(20, 12),
        new google.maps.Point(0,0),
        new google.maps.Point(10, 10)),
        map: map
    });
    var marker25 = new google.maps.Marker({
        position: new google.maps.LatLng(9.977991,-84.159106),
        draggable: true,
        //icon: marker0000,
        icon: new google.maps.MarkerImage("/static/img/map/markers/1/002.png",
        null, null, null, new google.maps.Size(20, 12),
        new google.maps.Point(0,0),
        new google.maps.Point(10, 10)),
        map: map
    });
    var marker26 = new google.maps.Marker({
        position: new google.maps.LatLng(9.977814,-84.159176),
        draggable: true,
        //icon: marker0000,
        icon: new google.maps.MarkerImage("/static/img/map/markers/1/003.png",
        null, null, null, new google.maps.Size(20, 12),
        new google.maps.Point(0,0),
        new google.maps.Point(10, 10)),
        map: map
    });
    var marker27 = new google.maps.Marker({
        position: new google.maps.LatLng(9.977663,-84.159278),
        draggable: true,
        //icon: marker0000,
        icon: new google.maps.MarkerImage("/static/img/map/markers/1/004.png",
        null, null, null, new google.maps.Size(20, 12),
        new google.maps.Point(0,0),
        new google.maps.Point(10, 10)),
        map: map
    });
    var marker28 = new google.maps.Marker({
        position: new google.maps.LatLng(9.977515,-84.159377),
        draggable: true,
        //icon: marker0000,
        icon: new google.maps.MarkerImage("/static/img/map/markers/1/5.png",
        null, null, null, new google.maps.Size(8.5, 12),
        new google.maps.Point(0,0),
        new google.maps.Point(10, 10)),
        map: map
    });
    var marker29 = new google.maps.Marker({
        position: new google.maps.LatLng(9.977367,-84.159476),
        draggable: true,
        //icon: marker0000,
        icon: new google.maps.MarkerImage("/static/img/map/markers/1/6.png",
        null, null, null, new google.maps.Size(8.5, 12),
        new google.maps.Point(0,0),
        new google.maps.Point(10, 10)),
        map: map
    });
    var marker30 = new google.maps.Marker({
        position: new google.maps.LatLng(9.977317,-84.159667),
        draggable: true,
        //icon: marker0000,
        icon: new google.maps.MarkerImage("/static/img/map/markers/1/7.png",
        null, null, null, new google.maps.Size(8.5, 12),
        new google.maps.Point(0,0),
        new google.maps.Point(10, 10)),
        map: map
    });
    var marker31 = new google.maps.Marker({
        position: new google.maps.LatLng(9.977249,-84.15982),
        draggable: true,
        //icon: marker0000,
        icon: new google.maps.MarkerImage("/static/img/map/markers/1/8.png",
        null, null, null, new google.maps.Size(8.5, 12),
        new google.maps.Point(0,0),
        new google.maps.Point(10, 10)),
        map: map
    });
    var marker32 = new google.maps.Marker({
        position: new google.maps.LatLng(9.977064,-84.160418),
        draggable: true,
        //icon: marker0000,
        icon: new google.maps.MarkerImage("/static/img/map/markers/1/9.png",
        null, null, null, new google.maps.Size(8.5, 12),
        new google.maps.Point(0,0),
        new google.maps.Point(10, 10)),
        map: map
    });
    var marker33 = new google.maps.Marker({
        position: new google.maps.LatLng(9.977164,-84.160726),
        draggable: true,
        //icon: marker0000,
        icon: new google.maps.MarkerImage("/static/img/map/markers/1/001.png",
        null, null, null, new google.maps.Size(20, 12),
        new google.maps.Point(0,0),
        new google.maps.Point(10, 10)),
        map: map
    });
    var marker34 = new google.maps.Marker({
        position: new google.maps.LatLng(9.97727,-84.160498),
        draggable: true,
        //icon: marker0000,
        icon: new google.maps.MarkerImage("/static/img/map/markers/1/002.png",
        null, null, null, new google.maps.Size(20, 12),
        new google.maps.Point(0,0),
        new google.maps.Point(10, 10)),
        map: map
    });
    var marker35 = new google.maps.Marker({
        position: new google.maps.LatLng(9.977441,-84.160139),
        draggable: true,
        //icon: marker0000,
        icon: new google.maps.MarkerImage("/static/img/map/markers/1/003.png",
        null, null, null, new google.maps.Size(20, 12),
        new google.maps.Point(0,0),
        new google.maps.Point(10, 10)),
        map: map
    });
    var marker36 = new google.maps.Marker({
        position: new google.maps.LatLng(9.977441,-84.160139),
        draggable: true,
        //icon: marker0000,
        icon: new google.maps.MarkerImage("/static/img/map/markers/1/004.png",
        null, null, null, new google.maps.Size(20, 12),
        new google.maps.Point(0,0),
        new google.maps.Point(10, 10)),
        map: map
    });
    var marker37 = new google.maps.Marker({
        position: new google.maps.LatLng(9.977441,-84.160139),
        draggable: true,
        //icon: marker0000,
        icon: new google.maps.MarkerImage("/static/img/map/markers/1/004.png",
        null, null, null, new google.maps.Size(20, 12),
        new google.maps.Point(0,0),
        new google.maps.Point(10, 10)),
        map: map
    });
    var marker38 = new google.maps.Marker({
        position: new google.maps.LatLng(9.977531,-84.159957),
        draggable: true,
        //icon: marker0000,
        icon: new google.maps.MarkerImage("/static/img/map/markers/1/5.png",
        null, null, null, new google.maps.Size(8.5, 12),
        new google.maps.Point(0,0),
        new google.maps.Point(10, 10)),
        map: map
    });
    var marker39 = new google.maps.Marker({
        position: new google.maps.LatLng(9.977629,-84.159828),
        draggable: true,
        //icon: marker0000,
        icon: new google.maps.MarkerImage("/static/img/map/markers/1/6.png",
        null, null, null, new google.maps.Size(8.5, 12),
        new google.maps.Point(0,0),
        new google.maps.Point(10, 10)),
        map: map
    });
    var marker40 = new google.maps.Marker({
        position: new google.maps.LatLng(9.977814,-84.159699),
        draggable: true,
        //icon: marker0000,
        icon: new google.maps.MarkerImage("/static/img/map/markers/1/7.png",
        null, null, null, new google.maps.Size(8.5, 12),
        new google.maps.Point(0,0),
        new google.maps.Point(10, 10)),
        map: map
    });
    var marker41 = new google.maps.Marker({
        position: new google.maps.LatLng(9.977824,-84.159589),
        draggable: true,
        //icon: marker0000,
        icon: new google.maps.MarkerImage("/static/img/map/markers/1/8.png",
        null, null, null, new google.maps.Size(8.5, 12),
        new google.maps.Point(0,0),
        new google.maps.Point(10, 10)),
        map: map
    });
    var marker42 = new google.maps.Marker({
        position: new google.maps.LatLng(9.977935,-84.159463),
        draggable: true,
        //icon: marker0000,
        icon: new google.maps.MarkerImage("/static/img/map/markers/1/9.png",
        null, null, null, new google.maps.Size(8.5, 12),
        new google.maps.Point(0,0),
        new google.maps.Point(10, 10)),
        map: map
    });
    var marker43 = new google.maps.Marker({
        position: new google.maps.LatLng(9.978123,-84.159364),
        draggable: true,
        //icon: marker0000,
        icon: new google.maps.MarkerImage("/static/img/map/markers/1/001.png",
        null, null, null, new google.maps.Size(20, 12),
        new google.maps.Point(0,0),
        new google.maps.Point(10, 10)),
        map: map
    });
    var marker44 = new google.maps.Marker({
        position: new google.maps.LatLng(9.978284,-84.159297),
        draggable: true,
        //icon: marker0000,
        icon: new google.maps.MarkerImage("/static/img/map/markers/1/002.png",
        null, null, null, new google.maps.Size(20, 12),
        new google.maps.Point(0,0),
        new google.maps.Point(10, 10)),
        map: map
    });
    var marker45 = new google.maps.Marker({
        position: new google.maps.LatLng(9.977315,-84.158988),
        draggable: true,
        //icon: marker0000,
        icon: new google.maps.MarkerImage("/static/img/map/markers/1/001.png",
        null, null, null, new google.maps.Size(20, 12),
        new google.maps.Point(0,0),
        new google.maps.Point(10, 10)),
        map: map
    });
    var marker46 = new google.maps.Marker({
        position: new google.maps.LatLng(9.977082,-84.159232),
        draggable: true,
        //icon: marker0000,
        icon: new google.maps.MarkerImage("/static/img/map/markers/1/002.png",
        null, null, null, new google.maps.Size(20, 12),
        new google.maps.Point(0,0),
        new google.maps.Point(10, 10)),
        map: map
    });
    var marker47 = new google.maps.Marker({
        position: new google.maps.LatLng(9.977016,-84.159493),
        draggable: true,
        //icon: marker0000,
        icon: new google.maps.MarkerImage("/static/img/map/markers/1/003.png",
        null, null, null, new google.maps.Size(20, 12),
        new google.maps.Point(0,0),
        new google.maps.Point(10, 10)),
        map: map
    });
    var marker48 = new google.maps.Marker({
        position: new google.maps.LatLng(9.976807,-84.159814),
        draggable: true,
        //icon: marker0000,
        icon: new google.maps.MarkerImage("/static/img/map/markers/1/004.png",
        null, null, null, new google.maps.Size(20, 12),
        new google.maps.Point(0,0),
        new google.maps.Point(10, 10)),
        map: map
    });
    var marker49 = new google.maps.Marker({
        position: new google.maps.LatLng(9.976662,-84.160303),
        draggable: true,
        //icon: marker0000,
        icon: new google.maps.MarkerImage("/static/img/map/markers/1/5.png",
        null, null, null, new google.maps.Size(8.5, 12),
        new google.maps.Point(0,0),
        new google.maps.Point(10, 10)),
        map: map
    });
    var marker50 = new google.maps.Marker({
        position: new google.maps.LatLng(9.976678,-84.160488),
        draggable: true,
        //icon: marker0000,
        icon: new google.maps.MarkerImage("/static/img/map/markers/1/6.png",
        null, null, null, new google.maps.Size(8.5, 12),
        new google.maps.Point(0,0),
        new google.maps.Point(10, 10)),
        map: map
    });
    var marker51= new google.maps.Marker({
        position: new google.maps.LatLng(9.976533,-84.161064),
        draggable: true,
        //icon: marker0000,
        icon: new google.maps.MarkerImage("/static/img/map/markers/1/7.png",
        null, null, null, new google.maps.Size(8.5, 12),
        new google.maps.Point(0,0),
        new google.maps.Point(10, 10)),
        map: map
    });
    var marker52 = new google.maps.Marker({
        position: new google.maps.LatLng(9.976699,-84.161354),
        draggable: true,
        //icon: marker0000,
        icon: new google.maps.MarkerImage("/static/img/map/markers/1/7.png",
        null, null, null, new google.maps.Size(8.5, 12),
        new google.maps.Point(0,0),
        new google.maps.Point(10, 10)),
        map: map
    });
    var marker53 = new google.maps.Marker({
        position: new google.maps.LatLng(9.976654,-84.161606),
        draggable: true,
        //icon: marker0000,
        icon: new google.maps.MarkerImage("/static/img/map/markers/1/8.png",
        null, null, null, new google.maps.Size(8.5, 12),
        new google.maps.Point(0,0),
        new google.maps.Point(10, 10)),
        map: map
    });
    var marker54 = new google.maps.Marker({
        position: new google.maps.LatLng(9.976667,-84.161869),
        draggable: true,
        //icon: marker0000,
        icon: new google.maps.MarkerImage("/static/img/map/markers/1/9.png",
        null, null, null, new google.maps.Size(8.5, 12),
        new google.maps.Point(0,0),
        new google.maps.Point(10, 10)),
        map: map
    });
    var marker55 = new google.maps.Marker({
        position: new google.maps.LatLng(9.976794,-84.162261),
        draggable: true,
        //icon: marker0000,
        icon: new google.maps.MarkerImage("/static/img/map/markers/1/001.png",
        null, null, null, new google.maps.Size(20, 12),
        new google.maps.Point(0,0),
        new google.maps.Point(10, 10)),
        map: map
    });
    var marker56 = new google.maps.Marker({
        position: new google.maps.LatLng(9.976879,-84.162411),
        draggable: true,
        //icon: marker0000,
        icon: new google.maps.MarkerImage("/static/img/map/markers/1/002.png",
        null, null, null, new google.maps.Size(20, 12),
        new google.maps.Point(0,0),
        new google.maps.Point(10, 10)),
        map: map
    });
    var marker57 = new google.maps.Marker({
        position: new google.maps.LatLng(9.976902,-84.162591),
        draggable: true,
        //icon: marker0000,
        icon: new google.maps.MarkerImage("/static/img/map/markers/1/003.png",
        null, null, null, new google.maps.Size(20, 12),
        new google.maps.Point(0,0),
        new google.maps.Point(10, 10)),
        map: map
    });
    var marker58 = new google.maps.Marker({
        position: new google.maps.LatLng(9.977016,-84.162773),
        draggable: true,
        //icon: marker0000,
        icon: new google.maps.MarkerImage("/static/img/map/markers/1/004.png",
        null, null, null, new google.maps.Size(20, 12),
        new google.maps.Point(0,0),
        new google.maps.Point(10, 10)),
        map: map
    });
    var marker59 = new google.maps.Marker({
        position: new google.maps.LatLng(9.977021,-84.162931),
        draggable: true,
        //icon: marker0000,
        icon: new google.maps.MarkerImage("/static/img/map/markers/1/5.png",
        null, null, null, new google.maps.Size(8.5, 12),
        new google.maps.Point(0,0),
        new google.maps.Point(10, 10)),
        map: map
    });
    var marker60 = new google.maps.Marker({
        position: new google.maps.LatLng(9.977042,-84.163232),
        draggable: true,
        //icon: marker0000,
        icon: new google.maps.MarkerImage("/static/img/map/markers/1/6.png",
        null, null, null, new google.maps.Size(8.5, 12),
        new google.maps.Point(0,0),
        new google.maps.Point(10, 10)),
        map: map
    });
    var marker61 = new google.maps.Marker({
        position: new google.maps.LatLng(9.976963,-84.163462),
        draggable: true,
        //icon: marker0000,
        icon: new google.maps.MarkerImage("/static/img/map/markers/1/7.png",
        null, null, null, new google.maps.Size(8.5, 12),
        new google.maps.Point(0,0),
        new google.maps.Point(10, 10)),
        map: map
    });
    var marker62 = new google.maps.Marker({
        position: new google.maps.LatLng(9.97692,-84.16355),
        draggable: true,
        //icon: marker0000,
        icon: new google.maps.MarkerImage("/static/img/map/markers/1/8.png",
        null, null, null, new google.maps.Size(8.5, 12),
        new google.maps.Point(0,0),
        new google.maps.Point(10, 10)),
        map: map
    });
    var marker63 = new google.maps.Marker({
        position: new google.maps.LatLng(9.976873,-84.163639),
        draggable: true,
        //icon: marker0000,
        icon: new google.maps.MarkerImage("/static/img/map/markers/1/9.png",
        null, null, null, new google.maps.Size(8.5, 12),
        new google.maps.Point(0,0),
        new google.maps.Point(10, 10)),
        map: map
    });
    var marker64 = new google.maps.Marker({
        position: new google.maps.LatLng(9.976845,-84.163728),
        draggable: true,
        //icon: marker0000,
        icon: new google.maps.MarkerImage("/static/img/map/markers/1/001.png",
        null, null, null, new google.maps.Size(20, 12),
        new google.maps.Point(0,0),
        new google.maps.Point(10, 10)),
        map: map
    });
    var marker65 = new google.maps.Marker({
        position: new google.maps.LatLng(9.976807,-84.163814),
        draggable: true,
        //icon: marker0000,
        icon: new google.maps.MarkerImage("/static/img/map/markers/1/002.png",
        null, null, null, new google.maps.Size(20, 12),
        new google.maps.Point(0,0),
        new google.maps.Point(10, 10)),
        map: map
    });
    var marker66 = new google.maps.Marker({
        position: new google.maps.LatLng(9.976755,-84.163902),
        draggable: true,
        //icon: marker0000,
        icon: new google.maps.MarkerImage("/static/img/map/markers/1/003.png",
        null, null, null, new google.maps.Size(20, 12),
        new google.maps.Point(0,0),
        new google.maps.Point(10, 10)),
        map: map
    });
    var marker67 = new google.maps.Marker({
        position: new google.maps.LatLng(9.976715,-84.163991),
        draggable: true,
        //icon: marker0000,
        icon: new google.maps.MarkerImage("/static/img/map/markers/1/004.png",
        null, null, null, new google.maps.Size(20, 12),
        new google.maps.Point(0,0),
        new google.maps.Point(10, 10)),
        map: map
    });
    var marker68 = new google.maps.Marker({
        position: new google.maps.LatLng(9.976688,-84.164055),
        draggable: true,
        //icon: marker0000,
        icon: new google.maps.MarkerImage("/static/img/map/markers/1/5.png",
        null, null, null, new google.maps.Size(8.5, 12),
        new google.maps.Point(0,0),
        new google.maps.Point(10, 10)),
        map: map
    });
    var marker69 = new google.maps.Marker({
        position: new google.maps.LatLng(9.976509,-84.164117),
        draggable: true,
        //icon: marker0000,
        icon: new google.maps.MarkerImage("/static/img/map/markers/1/6.png",
        null, null, null, new google.maps.Size(8.5, 12),
        new google.maps.Point(0,0),
        new google.maps.Point(10, 10)),
        map: map
    });
    var marker70 = new google.maps.Marker({
        position: new google.maps.LatLng(9.977309,-84.162427),
        draggable: true,
        //icon: marker0000,
        icon: new google.maps.MarkerImage("/static/img/map/markers/1/7.png",
        null, null, null, new google.maps.Size(8.5, 12),
        new google.maps.Point(0,0),
        new google.maps.Point(10, 10)),
        map: map
    });
    var marker71 = new google.maps.Marker({
        position: new google.maps.LatLng(9.977206,-84.16221),
        draggable: true,
        //icon: marker0000,
        icon: new google.maps.MarkerImage("/static/img/map/markers/1/8.png",
        null, null, null, new google.maps.Size(8.5, 12),
        new google.maps.Point(0,0),
        new google.maps.Point(10, 10)),
        map: map
    });
    var marker72 = new google.maps.Marker({
        position: new google.maps.LatLng(9.977061,-84.161963),
        draggable: true,
        //icon: marker0000,
        icon: new google.maps.MarkerImage("/static/img/map/markers/1/9.png",
        null, null, null, new google.maps.Size(8.5, 12),
        new google.maps.Point(0,0),
        new google.maps.Point(10, 10)),
        map: map
    });
    var marker73 = new google.maps.Marker({
        position: new google.maps.LatLng(9.977544,-84.160691),
        draggable: true,
        //icon: marker0000,
        icon: new google.maps.MarkerImage("/static/img/map/markers/1/001.png",
        null, null, null, new google.maps.Size(20, 12),
        new google.maps.Point(0,0),
        new google.maps.Point(10, 10)),
        map: map
    });
    var marker74 = new google.maps.Marker({
        position: new google.maps.LatLng(9.977661,-84.160547),
        draggable: true,
        //icon: marker0000,
        icon: new google.maps.MarkerImage("/static/img/map/markers/1/002.png",
        null, null, null, new google.maps.Size(20, 12),
        new google.maps.Point(0,0),
        new google.maps.Point(10, 10)),
        map: map
    });
    var marker73 = new google.maps.Marker({
        position: new google.maps.LatLng(9.977742,-84.160383),
        draggable: true,
        //icon: marker0000,
        icon: new google.maps.MarkerImage("/static/img/map/markers/1/003.png",
        null, null, null, new google.maps.Size(20, 12),
        new google.maps.Point(0,0),
        new google.maps.Point(10, 10)),
        map: map
    });
    var marker74 = new google.maps.Marker({
        position: new google.maps.LatLng(9.977846,-84.160064),
        draggable: true,
        //icon: marker0000,
        icon: new google.maps.MarkerImage("/static/img/map/markers/1/004.png",
        null, null, null, new google.maps.Size(20, 12),
        new google.maps.Point(0,0),
        new google.maps.Point(10, 10)),
        map: map
    });
    var marker75 = new google.maps.Marker({
        position: new google.maps.LatLng(9.978252,-84.159935),
        draggable: true,
        //icon: marker0000,
        icon: new google.maps.MarkerImage("/static/img/map/markers/1/5.png",
        null, null, null, new google.maps.Size(8.5, 12),
        new google.maps.Point(0,0),
        new google.maps.Point(10, 10)),
        map: map
    });
    var marker76 = new google.maps.Marker({
        position: new google.maps.LatLng(9.978184,-84.160104),
        draggable: true,
        //icon: marker0000,
        icon: new google.maps.MarkerImage("/static/img/map/markers/1/6.png",
        null, null, null, new google.maps.Size(8.5, 12),
        new google.maps.Point(0,0),
        new google.maps.Point(10, 10)),
        map: map
    });
    var marker77 = new google.maps.Marker({
        position: new google.maps.LatLng(9.977996,-84.160568),
        draggable: true,
        //icon: marker0000,
        icon: new google.maps.MarkerImage("/static/img/map/markers/1/7.png",
        null, null, null, new google.maps.Size(8.5, 12),
        new google.maps.Point(0,0),
        new google.maps.Point(10, 10)),
        map: map
    });
    var marker78 = new google.maps.Marker({
        position: new google.maps.LatLng(9.977853,-84.160751),
        draggable: true,
        //icon: marker0000,
        icon: new google.maps.MarkerImage("/static/img/map/markers/1/9.png",
        null, null, null, new google.maps.Size(8.5, 12),
        new google.maps.Point(0,0),
        new google.maps.Point(10, 10)),
        map: map
    });
    var marker79 = new google.maps.Marker({
        position: new google.maps.LatLng(9.977687,-84.161153),
        draggable: true,
        //icon: marker0000,
        icon: new google.maps.MarkerImage("/static/img/map/markers/1/10.png",
        null, null, null, new google.maps.Size(14, 12),
        new google.maps.Point(0,0),
        new google.maps.Point(10, 10)),
        map: map
    });
    var marker80 = new google.maps.Marker({
        position: new google.maps.LatLng(9.977436,-84.161542),
        draggable: true,
        //icon: marker0000,
        icon: new google.maps.MarkerImage("/static/img/map/markers/1/001.png",
        null, null, null, new google.maps.Size(20, 12),
        new google.maps.Point(0,0),
        new google.maps.Point(10, 10)),
        map: map
    });
    var marker81 = new google.maps.Marker({
        position: new google.maps.LatLng(9.977893,-84.161569),
        draggable: true,
        //icon: marker0000,
        icon: new google.maps.MarkerImage("/static/img/map/markers/1/002.png",
        null, null, null, new google.maps.Size(20, 12),
        new google.maps.Point(0,0),
        new google.maps.Point(10, 10)),
        map: map
    });
    var marker82 = new google.maps.Marker({
        position: new google.maps.LatLng(9.978104,-84.160992),
        draggable: true,
        //icon: marker0000,
        icon: new google.maps.MarkerImage("/static/img/map/markers/1/004.png",
        null, null, null, new google.maps.Size(20, 12),
        new google.maps.Point(0,0),
        new google.maps.Point(10, 10)),
        map: map
    });
    var marker83 = new google.maps.Marker({
        position: new google.maps.LatLng(9.978419,-84.160396),
        draggable: true,
        //icon: marker0000,
        icon: new google.maps.MarkerImage("/static/img/map/markers/1/5.png",
        null, null, null, new google.maps.Size(8.5, 12),
        new google.maps.Point(0,0),
        new google.maps.Point(10, 10)),
        map: map
    });
    var marker84 = new google.maps.Marker({
        position: new google.maps.LatLng(9.978509,-84.160303),
        draggable: true,
        //icon: marker0000,
        icon: new google.maps.MarkerImage("/static/img/map/markers/1/6.png",
        null, null, null, new google.maps.Size(8.5, 12),
        new google.maps.Point(0,0),
        new google.maps.Point(10, 10)),
        map: map
    });
    var marker85 = new google.maps.Marker({
        position: new google.maps.LatLng(9.978712,-84.159847),
        draggable: true,
        //icon: marker0000,
        icon: new google.maps.MarkerImage("/static/img/map/markers/1/7.png",
        null, null, null, new google.maps.Size(8.5, 12),
        new google.maps.Point(0,0),
        new google.maps.Point(10, 10)),
        map: map
    });
    var marker90 = new google.maps.Marker({
        position: new google.maps.LatLng(9.978622,-84.161424),
        draggable: true,
        //icon: marker0000,
        icon: new google.maps.MarkerImage("/static/img/map/markers/1/8.png",
        null, null, null, new google.maps.Size(8.5, 12),
        new google.maps.Point(0,0),
        new google.maps.Point(10, 10)),
        map: map
    });
    var marker91 = new google.maps.Marker({
        position: new google.maps.LatLng(9.97985,-84.162784),
        draggable: true,
        //icon: marker0000,
        icon: new google.maps.MarkerImage("/static/img/map/markers/1/009.png",
        new google.maps.Size(40, 24),
        new google.maps.Point(0,0),
        new google.maps.Point(10, 10)),
        map: map
    });

};
google.maps.event.addDomListener(window, 'load', initialize);