import 'https://api.mapbox.com/mapbox-gl-js/v2.3.1/mapbox-gl.js';

const coordinates = [
    [
        86.1446394,
        22.79988
    ],
    [
        86.1446394,
        22.79988
    ]
]
mapboxgl.accessToken = 'pk.eyJ1IjoiY2hhcmFuOTc3IiwiYSI6ImNrdjZrc3duNjEwd2YydXBnbzdmZDcyOGIifQ.5N6XlzFAsJQxT0qQic91Uw';
const map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v11',
    center: [86.1446394, 22.79988],
    zoom: 15
});
map.on('load', () => {
    map.addSource('route', {
        'type': 'geojson',
        'data': {
            'type': 'Feature',
            'properties': {},
            'geometry': {
                'type': 'LineString',
                'coordinates': coordinates
            }
        }
    });
    map.addLayer({
        'id': 'route',
        'type': 'line',
        'source': 'route',
        'layout': {
            'line-join': 'round',
            'line-cap': 'round'
        },
        'paint': {
            'line-color': '#888',
            'line-width': 8
        }
    });
});