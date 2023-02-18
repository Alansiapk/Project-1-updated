const FOURSQUARE_API_KEY = "fsq331OlQJLkuEtpOYZ/Wc3NNCUSfvlqMjdOpXhmXzYtnsg="
const START_POINT = [1.3521, 103.8198]

async function loadMrtData(lat, lng) {

    let response = await axios.get("https://api.foursquare.com/v3/places/search", {
        "headers": {
            "Accept": "application/json",
            "Authorization": FOURSQUARE_API_KEY
        },
        "params": {
            "ll": lat + "," + lng,
            "categories": 19046,
            "radius": 30000,
            "limit": 50,
        },
    });
    return response.data;
}

async function loadData(lat, lng, query) {

    let response = await axios.get("https://api.foursquare.com/v3/places/search", {
        "headers": {
            "Accept": "application/json",
            "Authorization": FOURSQUARE_API_KEY
        },
        "params": {
            "ll": lat + "," + lng,
            "query": query,
            "radius": 30000,
            "limit": 5,
        },
    });

    return response.data;
}
//loadData();
document.querySelector("#btnSearch").addEventListener("click", async function () {
    let searchValue = document.querySelector('#searchValue').value;


    let searchResults = await loadData(START_POINT[0], START_POINT[1], searchValue);
    searchResultLayer.clearLayers();
    console.log(searchResults)

    // for (let result of searchResults.results) {
    //     let coordinate = [result.geocodes.main.latitude, result.geocodes.main.longitude]
    //     let marker = L.marker(coordinate).addTo(searchResultLayer);
    //     marker.bindPopup(`<h1>${result.name}<h1>
    //             <h2>${result.location.formatted_address}</h2>
    //             `);
    // }
    let searchPoint = [searchResults.results[0].geocodes.main.latitude, searchResults.results[0].geocodes.main.longitude]
    map.flyTo(searchPoint, 15)

    // MRT
    let searchResults2 = await loadMrtData(searchPoint[0], searchPoint[1], searchValue);
    // searchResultLayer.clearLayers();
    console.log(searchResults2)

    for (let result of searchResults2.results) {
        let coordinate = [result.geocodes.main.latitude, result.geocodes.main.longitude]
        let marker = L.marker(coordinate).addTo(searchResultLayer);
        marker.bindPopup(`<h1>${result.name}<h1>
                <h2>${result.location.formatted_address}</h2>
                `);
    }


});

let map = L.map("map").setView(START_POINT, 12);
let searchResultLayer = L.layerGroup();
searchResultLayer.addTo(map)

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

//part 2 = 3 random marker
//group 1


function getRandomLatLng(map) {
    const bounds = map.getBounds();
    const southWest = bounds.getSouthWest();
    const northEast = bounds.getNorthEast();

    const latSpan = northEast.lat - southWest.lat;
    const lngSpan = northEast.lng - southWest.lng;

    const randomLat = Math.random() * latSpan + southWest.lat;
    const randomLng = Math.random() * lngSpan + southWest.lng;

    return [randomLat, randomLng];
}

getRandomLatLng(map)
let group1 = L.layerGroup();

for (let i = 0; i < 5; i++) {
    let coordinate = getRandomLatLng(map);
    L.marker(coordinate).addTo(group1);
}
group1.addTo(map);

//layer control
let circleGroup = L.layerGroup();
for (let i = 0; i < 5; i++) {
    let coordinate = getRandomLatLng(map);
    let circle = L.circle(coordinate, {
        'color': 'green',
        'fillColor': 'green',
        'fillOpacity': 0.5,
        'radius': 250
    });
    circle.addTo(circleGroup);
}

circleGroup.addTo(map);

let redCircleGroup = L.layerGroup();
for (let i = 0; i < 5; i++) {
    let coordinate = getRandomLatLng(map);
    let circle = L.circle(coordinate, {
        'color': 'red',
        'fillColor': 'red',
        'fillOpacity': 0.5,
        'radius': 250
    });
    circle.addTo(redCircleGroup);
}

redCircleGroup.addTo(map);

//toggle layer
let baseLayers = {
    'Markers': group1,

};

let overlays = {
    'MRT': redCircleGroup,
    'Green Circle': circleGroup
}

L.control.layers(baseLayers, overlays).addTo(map);

