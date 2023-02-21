let singapore = [1.3521, 103.8198] //start point change to singapore
let map = L.map('map');
map.setView(singapore, 12);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

function getRandomLatLng(map) {
    // get the boundaries of the map
    let bounds = map.getBounds();
    let southWest = bounds.getSouthWest();
    let northEast = bounds.getNorthEast();

    let lngSpan = northEast.lng - southWest.lng;
    let latSpan = northEast.lat - southWest.lat;

    let randomLng = Math.random() * lngSpan + southWest.lng;
    let randomLat = Math.random() * latSpan + southWest.lat;

    return [randomLat, randomLng];
}

const foursquare = {
    API_KEY: "fsq331OlQJLkuEtpOYZ/Wc3NNCUSfvlqMjdOpXhmXzYtnsg=",
    URL: "https://api.foursquare.com/v3/places/search",
    categories: {
        mrt: 19046,
        gym: 18021,
        restaurant: 13065,
        bar: 13003
    },
    centerpoint: singapore,

}

// create layers for each category
let MRTLayer = L.layerGroup();
let restaurantLayer = L.layerGroup();
let gymLayer = L.layerGroup();
let barLayer = L.layerGroup();

// add the layers to the map
// map.addLayer(MRTLayer);
MRTLayer.addTo(map);
restaurantLayer.addTo(map);
gymLayer.addTo(map);
barLayer.addTo(map);

// create the base layers and the overlay
let overlays = {
    'MRT': MRTLayer,
    'Restaurant': restaurantLayer,
    'Gym': gymLayer,
    'Bar': barLayer
}

// add overlay to map
L.control.layers({}, overlays).addTo(map);

async function main() {

    MRTLayer.clearLayers();
    restaurantLayer.clearLayers();
    gymLayer.clearLayers();
    barLayer.clearLayers();

    console.log('search point=============');
    console.log(foursquare.centerpoint);

    //MRT
    let mrtResponse = await axios.get(foursquare.URL, {
        "headers": {
            "Accept": "application/json",
            "Authorization": foursquare.API_KEY
        },
        "params": {
            "ll": foursquare.centerpoint[0] + ',' + foursquare.centerpoint[1],
            "categories": foursquare.categories.mrt,
            "radius": 30000,
            "limit": 5,
            "sort": "distance"
        },
    });
    console.log("this is data ", mrtResponse)

    for (let MRT of mrtResponse.data.results) {
        let marker = L.marker([MRT.geocodes.main.latitude, MRT.geocodes.main.longitude]);
        marker.bindPopup(`<h1>${MRT.name}</h1>`);
        //maps.
        marker.addTo(MRTLayer);
    }

    //restaurant
    let restaurantResponse = await axios.get(foursquare.URL, {
        "headers": {
            "Accept": "application/json",
            "Authorization": foursquare.API_KEY
        },
        "params": {
            "ll": foursquare.centerpoint[0] + ',' + foursquare.centerpoint[1],
            "catagories": foursquare.categories.restaurant,
            "radius": 30000,
            "limit": 5,
            "sort": "distance"
        }
    });

    for (let restaurant of restaurantResponse.data.results) {
        let circle = L.circle([restaurant.geocodes.main.latitude, restaurant.geocodes.main.longitude], {
            color: "red",
            fillColor: "red",
            radius: 200,
            fillOpacity: 0.5
        });
        circle.bindPopup(`<h1>${restaurant.name}</h1>`)
        circle.addTo(restaurantLayer);
    }

    //gym
    let gymResponse = await axios.get(foursquare.URL, {
        "headers": {
            "Accept": "application/json",
            "Authorization": foursquare.API_KEY
        },
        "params": {
            "ll": foursquare.centerpoint[0] + ',' + foursquare.centerpoint[1],
            "categories": foursquare.categories.gym,
            "radius": 30000,
            "limit": 5,
            "sort": "distance"
        }
    });

    for (let gym of gymResponse.data.results) {
        let marker = L.circle([gym.geocodes.main.latitude, gym.geocodes.main.longitude], {
            color: "green",
            fillColor: "green",
            radius: 200,
            fillOpacity: 0.5
        });
        marker.bindPopup(`<h1>${gym.name}</h1>`);
        marker.addTo(gymLayer);
    }

    //bar
    let barResponse = await axios.get(foursquare.URL, {
        "headers": {
            "Accept": "application/json",
            "Authorization": foursquare.API_KEY
        },
        "params": {
            "ll": foursquare.centerpoint[0] + ',' + foursquare.centerpoint[1],
            "categories": foursquare.categories.bar,
            "radius": 30000,
            "limit": 5,
            "sort": "distance"
        }
    });


    for (let bar of barResponse.data.results) {
        let marker = L.circle([bar.geocodes.main.latitude, bar.geocodes.main.longitude], {
            color: "blue",
            fillColor: "blue",
            radius: 200,
            fillOpacity: 0.5
        });
        marker.bindPopup(`<h1>${bar.name}</h1>`);
        marker.addTo(barLayer);
    }
}

document.querySelector("#btnSearch").addEventListener("click", async function () {
    let searchValue = document.querySelector('#searchValue').value;
    console.log(searchValue)

    // search mrt result
    let searchResponse = await axios.get(foursquare.URL, {
        "headers": {
            "Accept": "application/json",
            "Authorization": foursquare.API_KEY
        },
        "params": {
            "ll": singapore[0] + ',' + singapore[1],
            "categories": foursquare.categories.mrt,
            "radius": 30000,
            "limit": 1,
            "query": searchValue
        },
    });

    console.log(searchResponse.data);
    

    let searchPoint = [searchResponse.data.results[0].geocodes.main.latitude, searchResponse.data.results[0].geocodes.main.longitude]
    console.log(searchPoint);
    map.flyTo(searchPoint, 17);
    foursquare.centerpoint = searchPoint;
    main();
});

main();


