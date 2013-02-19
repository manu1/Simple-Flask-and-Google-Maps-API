<script type="text/javascript">
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
            map: map
      });

      }
       google.maps.event.addDomListener(window, 'load', initialize);
    </script>