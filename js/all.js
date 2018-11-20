/* service page - service list */
$('#facial').click(function() {
    $(this).addClass('highlight');
    $("#extra_border_1").addClass('highlight');
    $(this).siblings().removeClass('highlight');
    $("#extra_border_2").removeClass('highlight');
    $("#extra_border_3").removeClass('highlight');
    $('#content_facial').slideDown();
    $('#content_facial').siblings().slideUp();
});

$('#massage').click(function() {
    $(this).addClass('highlight');
    $("#extra_border_2").addClass('highlight');
    $(this).siblings().removeClass('highlight');
    $("#extra_border_1").removeClass('highlight');
    $("#extra_border_3").removeClass('highlight');
    $('#content_massage').slideDown();
    $('#content_massage').siblings().slideUp();
});

$('#hotstone').click(function() {
    $(this).addClass('highlight');
    $("#extra_border_3").addClass('highlight');
    $(this).siblings().removeClass('highlight');
    $("#extra_border_1").removeClass('highlight');
    $("#extra_border_2").removeClass('highlight');
    $('#content_hotstone').slideDown();
    $('#content_hotstone').siblings().slideUp();
});

$("#facial").click();    

/* contact page - snazzy map */
google.maps.event.addDomListener(window, 'load', init);   
function init() {          
  var mapOptions = {             
    zoom: 15,
    center: new google.maps.LatLng(43.8538975,-79.3358079),
    disableDefaultUI: true,
    styles: [
    {
        "featureType": "all",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "saturation": 36
            },
            {
                "color": "#000000"
            },
            {
                "lightness": 40
            }
        ]
    },
    {
        "featureType": "all",
        "elementType": "labels.text.stroke",
        "stylers": [
            {
                "visibility": "on"
            },
            {
                "color": "#000000"
            },
            {
                "lightness": 16
            }
        ]
    },
    {
        "featureType": "all",
        "elementType": "labels.icon",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "administrative",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#000000"
            },
            {
                "lightness": 20
            }
        ]
    },
    {
        "featureType": "administrative",
        "elementType": "geometry.stroke",
        "stylers": [
            {
                "color": "#000000"
            },
            {
                "lightness": 17
            },
            {
                "weight": 1
            }
        ]
    },
    {
        "featureType": "landscape",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#000000"
            },
            {
                "lightness": 20
            }
        ]
    },
    {
        "featureType": "poi",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#000000"
            },
            {
                "lightness": 21
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#000000"
            },
            {
                "lightness": 17
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "geometry.stroke",
        "stylers": [
            {
                "color": "#000000"
            },
            {
                "lightness": 29
            },
            {
                "weight": 0.2
            }
        ]
    },
    {
        "featureType": "road.arterial",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#000000"
            },
            {
                "lightness": 18
            }
        ]
    },
    {
        "featureType": "road.local",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#000000"
            },
            {
                "lightness": 16
            }
        ]
    },
    {
        "featureType": "transit",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#000000"
            },
            {
                "lightness": 19
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#000000"
            },
            {
                "lightness": 17
            }
        ]
    }
]
};

var mapElement = document.getElementById('map');
var map = new google.maps.Map(mapElement, mapOptions);
var icon = {
url: "https://raw.githubusercontent.com/yingyingszeto/forLinks/master/maker.png", // url
scaledSize: new google.maps.Size(35, 55), // scaled size
origin: new google.maps.Point(0,0), // origin
anchor: new google.maps.Point(0, 0) // anchor
};

var marker = new google.maps.Marker({
                position: new google.maps.LatLng(43.8538975,-79.3358079),
                icon: icon,
                map: map,
                title: 'Snazzy!'
            });
}

