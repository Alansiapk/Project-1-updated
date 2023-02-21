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

// const FOURSQUARE_API_KEY = "fsq331OlQJLkuEtpOYZ/Wc3NNCUSfvlqMjdOpXhmXzYtnsg="
// const fourSquareURL = "https://api.foursquare.com/v3/places/search"

const foursquare = {
    API_KEY: "fsq331OlQJLkuEtpOYZ/Wc3NNCUSfvlqMjdOpXhmXzYtnsg=",
    URL: "https://api.foursquare.com/v3/places/search",
    categories: {
        mrt: 19046,
        gym: 18021,
        restaurant: 13065,
        bar: 13003
    },
    centerpoint: "1.3521,103.8198"
}


async function main() {
    //MRT
    let mrtResponse = await axios.get(foursquare.URL, {
        "headers": {
            "Accept": "application/json",
            "Authorization": foursquare.API_KEY
        },
        "params": {
            "ll": foursquare.centerpoint,
            "categories": foursquare.categories.mrt,
            "radius": 30000,
            "limit": 50,
        },
    });
  
  

    for (let MRT of mrtResponse.data) {
        let marker = L.marker(MRT.coordinates);
        marker.bindPopup(`<h1>${MRT.name}</h1>`);
        marker.addTo(MRTLayer);
    }
    MRTLayer.addTo(map);

    //restaurant
    let restaurantResponse = await axios.get(foursquare.URL, {
        "headers": {
            "Accept": "application/json",
            "Authorization": foursquare.API_KEY
        },
        "params": {
            "ll": foursquare.centerpoint,
            "catagories": foursquare.categories.restaurant,
            "radius": 30000,
            "limit": 5,
        },
    });
    let restaurantLayer = L.layerGroup();
    for (let restaurant of restaurantResponse.data) {
        let circle = L.circle(restaurant.coordinates,{
            color: "red",
            fillColor: "red",
            radius: 200,
            fillOpacity:0.5
        });
        circle.bindPopup(`<h1>${restaurant.name}</h1>`)
        circle.addTo(restaurantLayer);
    }
    restaurantLayer.addTo(map);

    //gym
    let gymResponse = await axios.get(foursquare.URL, {
        "headers": {
            "Accept": "application/json",
            "Authorization": foursquare.API_KEY
        },
        "params": {
            "ll": foursquare.centerpoint,
            "categories": foursquare.categories.gym,
            "radius": 30000,
            "limit": 50,
        },
    });
    for (let gym of gymResponse.data) {
        let marker = L.marker(gym.coordinates, {
            color: "green",
            fillColor: "green",
            radius: 200,
            fillOpacity:0.5
        });
        marker.bindPopup(`<h1>${gym.name}</h1>`);
        marker.addTo(gymLayer);
    }
    gymLayer.addTo(map);

     //bar
     let barResponse = await axios.get(foursquare.URL, {
        "headers": {
            "Accept": "application/json",
            "Authorization": foursquare.API_KEY
        },
        "params": {
            "ll": foursquare.centerpoint,
            "categories": foursquare.categories.bar,
            "radius": 30000,
            "limit": 50,
        },
    });
    for (let bar of barResponse.data) {
        let marker = L.marker(bar.coordinates, {
            color: "green",
            fillColor: "green",
            radius: 200,
            fillOpacity:0.5
        });
        marker.bindPopup(`<h1>${bar.name}</h1>`);
        marker.addTo(barLayer);
    }
    barLayer.addTo(map);

    // create the base layers and the overlay
    let overlays = {
        'MRT': MRTLayer,
        'Restaurant': restaurantLayer,
        'Gym': gymLayer,
        'bar': barLayer
    }
    
    L.control.layers({}, overlays).addTo(map);

}
main();


// document.querySelector("#btnSearch").addEventListener("click", async function () {
//     let searchValue = document.querySelector('#searchValue').value;


    // let searchResults = await mrtResponse(singapore[0], singapore[1], searchValue);
    // searchResultLayer.clearLayers();
    // console.log(searchResults)

//     //restaurant
//     for (let result of searchResults.results) {
//         let coordinate = [result.geocodes.main.latitude, result.geocodes.main.longitude]
//         let marker = L.marker(coordinate).addTo(searchResultLayer);
//         marker.bindPopup(`<h1>${result.name}<h1>
//                 <h2>${result.location.formatted_address}</h2>
//                 `);
//     }


    // MRT
    let searchPoint = [searchResults.results[0].geocodes.main.latitude, searchResults.results[0].geocodes.main.longitude]
    map.flyTo(searchPoint, 15)

//     let searchResults2 = await loadMrtData(searchPoint[0], searchPoint[1], searchValue);
//     // searchResultLayer.clearLayers();
//     console.log(searchResults2)

//     for (let result of searchResults2.results) {
//         let coordinate = [result.geocodes.main.latitude, result.geocodes.main.longitude]
//         let marker = L.marker(coordinate).addTo(searchResultLayer);
//         marker.bindPopup(`<h1>${result.name}<h1>
//                 <h2>${result.location.formatted_address}</h2>
//                 `);
//     }


// });


// let searchResultLayer = L.layerGroup();
// searchResultLayer.addTo(map)


// //part 2 = 3 random marker
// //group 1



// getRandomLatLng(map)
// let group1 = L.layerGroup();

// for (let i = 0; i < 5; i++) {
//     let coordinate = getRandomLatLng(map);
//     L.marker(coordinate).addTo(group1);
// }
// group1.addTo(map);

// //layer control
// let circleGroup = L.layerGroup();
// for (let i = 0; i < 5; i++) {
//     let coordinate = getRandomLatLng(map);
//     let circle = L.circle(coordinate, {
//         'color': 'green',
//         'fillColor': 'green',
//         'fillOpacity': 0.5,
//         'radius': 250
//     });
//     circle.addTo(circleGroup);
// }

// circleGroup.addTo(map);

// let redCircleGroup = L.layerGroup();
// for (let i = 0; i < 5; i++) {
//     let coordinate = getRandomLatLng(map);
//     let circle = L.circle(coordinate, {
//         'color': 'red',
//         'fillColor': 'red',
//         'fillOpacity': 0.5,
//         'radius': 250
//     });
//     circle.addTo(redCircleGroup);
// }

// redCircleGroup.addTo(map);

// //toggle layer
// let baseLayers = {
//     'Markers': group1,

// };

// let overlays = {
//     'MRT': redCircleGroup,
//     'Restaurant': circleGroup
// }

// L.control.layers(baseLayers, overlays).addTo(map);

