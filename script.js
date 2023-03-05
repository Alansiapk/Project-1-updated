// Icon::Places
const restaurantIcon = L.icon({
    iconUrl: 'img/restaurant.png',
    iconSize: [45, 45],
    iconAnchor: [23, 45],
    popupAnchor: [0, 0]
})

const mrtIcon = L.icon({
    iconUrl: 'img/mrt.png',
    iconSize: [45, 45],
    iconAnchor: [23, 45],
    popupAnchor: [0, 0]
})
const gymIcon = L.icon({
    iconUrl: 'img/gym.png',
    iconSize: [45, 45],
    iconAnchor: [23, 45],
    popupAnchor: [0, 0]
})

const barIcon = L.icon({
    iconUrl: 'img/bar.png',
    iconSize: [45, 45],
    iconAnchor: [23, 45],
    popupAnchor: [0, 0]
});

// Icon::Weather
const sunnyIcon = L.icon({
    iconUrl: 'img/sunny.png',
    iconSize: [45, 45],
    iconAnchor: [23, 45],
    popupAnchor: [0, 0]
});
const cloudyIcon = L.icon({
    iconUrl: 'img/cloudy.png',
    iconSize: [45, 45],
    iconAnchor: [23, 45],
    popupAnchor: [0, 0]
});
const cloudyDayIcon = L.icon({
    iconUrl: 'img/cloudyday.png',
    iconSize: [45, 45],
    iconAnchor: [23, 45],
    popupAnchor: [0, 0]
});
const nightIcon = L.icon({
    iconUrl: 'img/night.png',
    iconSize: [45, 45],
    iconAnchor: [23, 45],
    popupAnchor: [0, 0]
});
const cloudyNightIcon = L.icon({
    iconUrl: 'img/cloudnight.png',
    iconSize: [45, 45],
    iconAnchor: [23, 45],
    popupAnchor: [0, 0]
});
const drizzleIcon = L.icon({
    iconUrl: 'img/drizzle.png',
    iconSize: [45, 45],
    iconAnchor: [23, 45],
    popupAnchor: [0, 0]
});
const showerIcon = L.icon({
    iconUrl: 'img/shower.png',
    iconSize: [45, 45],
    iconAnchor: [23, 45],
    popupAnchor: [0, 0]
});
const thunderIcon = L.icon({
    iconUrl: 'img/thunder.png',
    iconSize: [45, 45],
    iconAnchor: [23, 45],
    popupAnchor: [0, 0]
});

// //http://www.weather.gov.sg/forecasting-2/
// if (area.forecast == 'Cloudy') {
//     L.marker([lat, lng], { icon: cloudyIcon }).bindPopup(`<h5>${area.name}</h5>${area.forecast}`).addTo(weatherOverlay)
// }

// if (area.forecast == 'Fair & Warm' || area.forecast == 'Fair (Day)') {
//     L.marker([lat, lng], { icon: sunnyIcon }).bindPopup(`<h5>${area.name}</h5>${area.forecast}`).addTo(weatherOverlay)
// }

// if (area.forecast == 'Partly Cloudy (Day)') {
//     L.marker([lat, lng], { icon: cloudyDayIcon }).bindPopup(`<h5>${area.name}</h5>${area.forecast}`).addTo(weatherOverlay)
// }

// if (area.forecast == 'Partly Cloudy (Night)') {
//     L.marker([lat, lng], { icon: cloudyNightIcon }).bindPopup(`<h5>${area.name}</h5>${area.forecast}`).addTo(weatherOverlay)
// }

// if (area.forecast == 'Fair (Night)') {
//     L.marker([lat, lng], { icon: nightIcon }).bindPopup(`<h5>${area.name}</h5>${area.forecast}`).addTo(weatherOverlay)
// }

// if (area.forecast == 'Light Showers' || area.forecast == 'Light Rain') {
//     L.marker([lat, lng], { icon: drizzleIcon }).bindPopup(`<h5>${area.name}</h5>${area.forecast}`).addTo(weatherOverlay)
// }

// if (area.forecast == 'Showers' || area.forecast == 'Moderate Rain') {
//     L.marker([lat, lng], { icon: showerIcon }).bindPopup(`<h5>${area.name}</h5>${area.forecast}`).addTo(weatherOverlay)
// }

// if (area.forecast == 'Thundery Showers' || area.forecast == 'Heavy Thundery Showers') {
//     L.marker([lat, lng], { icon: thunderIcon }).bindPopup(`<h5>${area.name}</h5>${area.forecast}`).addTo(weatherOverlay)
// }
// }
const WeatherIcons = {
    'Cloudy': cloudyIcon,
    'Fair & Warm': sunnyIcon,
    'Fair (Day)': sunnyIcon,
    'Partly Cloudy (Day)': cloudyDayIcon,
    'Partly Cloudy (Night)': cloudyNightIcon,
    'Fair (Night)': nightIcon,
    'Light Showers': drizzleIcon,
    'Light Rain': drizzleIcon,
    'Showers': showerIcon,
    'Moderate Rain': showerIcon,
    'Thundery Showers': thunderIcon,
    'Heavy Thundery Showers': thunderIcon
};


let singapore = [1.3521, 103.8198] //start point change to singapore

let map;
let MRTLayer;
let restaurantLayer;
let gymLayer;
let barLayer;
let weatherOverlay;

const weatherAPIURL = 'https://api.data.gov.sg/v1/environment/2-hour-weather-forecast';
const foursquare = {
    API_KEY: "fsq331OlQJLkuEtpOYZ/Wc3NNCUSfvlqMjdOpXhmXzYtnsg=",
    URL: "https://api.foursquare.com/v3/places/search",
    categories: {
        mrt: "19046",
        gym: "18021",
        restaurant: "13065",
        bar: "13003"
    },
    radius: 3000,
    limit: 10
}

//step to generate functional map
initializeMap();
initializeLayers();
addLayersToMap();
loadWeatherData();
initializeListeners();
emailListeners();

//step 1 InitializeMap
function initializeMap() {
    map = L.map('map');
    map.setView(singapore, 12);

    L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
        attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
        maxZoom: 18,
        id: 'mapbox/dark-v11',
        tileSize: 512,
        zoomOffset: -1,
        accessToken: 'pk.eyJ1IjoiYWxhbnNpYXBrMDMxNSIsImEiOiJjbGV0anBzcXYwM2RwM3Fxem51bXk5bmthIn0.y_gqZeRJdFFqfxkVarw2_Q' //demo access token
    }).addTo(map);
}

//step 2 InitializeLayers
function initializeLayers() {
    MRTLayer = L.layerGroup({
        iconCreateFunction: function (cluster) {
            return L.divIcon({
                html: `<div class="customMRTMarkerClusterIcon">
                ${cluster.getChildCount()}
                </div>`
            })
        }
    });
    restaurantLayer = L.markerClusterGroup({
        iconCreateFunction: function (cluster) {
            return L.divIcon({
                html: `<div class="customRestaurantMarkerClusterIcon">
                ${cluster.getChildCount()}
                </div>`
            })
        }
    });
    gymLayer = L.markerClusterGroup({
        iconCreateFunction: function (cluster) {
            return L.divIcon({
                html: `<div class="customGymMarkerClusterIcon">
                ${cluster.getChildCount()}
                </div>`
            })
        }
    });
    barLayer = L.markerClusterGroup({
        iconCreateFunction: function (cluster) {
            return L.divIcon({
                html: `<div class="customBarMarkerClusterIcon">
                ${cluster.getChildCount()}
                </div>`
            })
        }
    });
    weatherOverlay = L.layerGroup();
}

//step 3 : add layer to map
function addLayersToMap() {
    MRTLayer.addTo(map);
    restaurantLayer.addTo(map);
    gymLayer.addTo(map);
    barLayer.addTo(map);
    weatherOverlay.addTo(map);
}

//step 4: load weather data
function loadWeatherData() {
    axios.get(weatherAPIURL).then((response) => {
        // The area_metadata field in the response provides longitude/latitude information for the areas.
        let weatherAreaCordinates = response.data.area_metadata;
        let weatherArray = [];
        for (let weather of response.data.items[0].forecasts) {
            weatherArray.push(weather.forecast);
        }
        for (let i = 0; i < weatherArray.length; i++) {
            weatherAreaCordinates[i].forecast = weatherArray[i];
        }
        for (let area of weatherAreaCordinates) {
            let lat = area.label_location.latitude;
            let lng = area.label_location.longitude;
            L.marker([lat, lng], { icon: WeatherIcons[area.forecast] }).bindPopup(`<h5>${area.name}</h5>${area.forecast}`).addTo(weatherOverlay);
        }
    });
}
// if (area.forecast == 'Cloudy') {
//     //     L.marker([lat, lng], { icon: cloudyIcon }).bindPopup(`<h5>${area.name}</h5>${area.forecast}`).addTo(weatherOverlay)
//     // }
// let response = await axios.get(weatherAPIURL);

//step 5 function initializeListeners
function initializeListeners() {
    document.querySelector("#weather-toggle").addEventListener('click', function () {
        if (map.hasLayer(weatherOverlay)) {
            map.removeLayer(weatherOverlay);
        }
        else {
            weatherOverlay.addTo(map);
        }
    });

    const checkboxes = document.querySelectorAll(".filterCheckBox");
    for (let checkbox of checkboxes) {
        checkbox.addEventListener('change', async function (event) {
            const checkboxName = checkbox.name;
            if (checkbox.checked) {
                if (checkboxName == 'restaurant-checkbox') {
                    restaurantLayer.addTo(map);
                }
                else if (checkboxName == 'bar-checkbox') {
                    barLayer.addTo(map);
                }
                else if (checkboxName == 'gym-checkbox') {
                    gymLayer.addTo(map);
                }
            } else {
                if (checkboxName == 'restaurant-checkbox') {
                    map.removeLayer(restaurantLayer);
                }
                else if (checkboxName == 'bar-checkbox') {
                    map.removeLayer(barLayer);
                }
                else if (checkboxName == 'gym-checkbox') {
                    map.removeLayer(gymLayer);
                }
            }
        });
    }
    document.querySelector("#btnSearch").addEventListener("click", async function () {
        let searchValue = document.querySelector('#searchValue').value;
        console.log(searchValue);

        // search mrt result
        let searchResponse = await axios.get(foursquare.URL, {
            "headers": {
                "Accept": "application/json",
                "Authorization": foursquare.API_KEY
            },
            "params": {
                "ll": singapore[0] + ',' + singapore[1],
                // "categories": foursquare.categories.mrt,
                "radius": 50000,
                "limit": 1,
                "query": searchValue
            },

        });
        let searchPoint = [searchResponse.data.results[0].geocodes.main.latitude, searchResponse.data.results[0].geocodes.main.longitude]
        map.flyTo(searchPoint, 17);
        searchNearby(searchPoint);
    });
}

//step 6 search nearby

function searchNearby(searchPoint) {
    MRTLayer.clearLayers();
    restaurantLayer.clearLayers();
    gymLayer.clearLayers();
    barLayer.clearLayers();

    let sort = "distance";

    //MRT
    search(searchPoint, foursquare.categories.mrt, foursquare.radius, foursquare.limit, sort).then((mrtResponse) => {
        for (let MRT of mrtResponse.data.results) {
            let marker = L.marker([MRT.geocodes.main.latitude, MRT.geocodes.main.longitude], { icon: mrtIcon });
            marker.bindPopup(`<h1>${MRT.name}</h1>${MRT.location.address}`);
            marker.addTo(MRTLayer);
        }
    });

    //restaurant
    search(searchPoint, foursquare.categories.restaurant, foursquare.radius, foursquare.limit, sort).then((restaurantResponse) => {
        for (let restaurant of restaurantResponse.data.results) {
            let restaurantMarker = L.marker([restaurant.geocodes.main.latitude, restaurant.geocodes.main.longitude], { icon: restaurantIcon });
            restaurantMarker.bindPopup(`<h1>${restaurant.name}</h1>${restaurant.location.address}`)
            restaurantMarker.addTo(restaurantLayer);
        }
    });

    //gym
    search(searchPoint, foursquare.categories.gym, foursquare.radius, foursquare.limit, sort).then((gymResponse) => {
        for (let gym of gymResponse.data.results) {
            let gymMarker = L.marker([gym.geocodes.main.latitude, gym.geocodes.main.longitude], { icon: gymIcon });
            gymMarker.bindPopup(`<h1>${gym.name}</h1>${gym.location.address}`);
            gymMarker.addTo(gymLayer);
        }
    });

    //bar
    search(searchPoint, foursquare.categories.bar, foursquare.radius, foursquare.limit, sort).then((barResponse) => {
        for (let bar of barResponse.data.results) {
            let barMarker = L.marker([bar.geocodes.main.latitude, bar.geocodes.main.longitude], { icon: barIcon });
            barMarker.bindPopup(`<h1>${bar.name}</h1>${bar.location.address}`);
            barMarker.addTo(barLayer);
        }
    });
}

function search(searchPoint, category, radius, limit, sort) {
    return axios.get(foursquare.URL, {
        "headers": {
            "Accept": "application/json",
            "Authorization": foursquare.API_KEY
        },
        "params": {
            "ll": searchPoint.join(','),
            "categories": category,
            "radius": radius,
            "limit": limit,
            "sort": sort
        },
    })
}

//validation

function emailListeners(){
    document.querySelector('#email-submit').addEventListener('click', function () {
    let isEmailInvalid = false;
    let email = document.querySelector('#txt-email').value;

    if (!email.includes('@') || !email.includes('.')) {
        isEmailInvalid = true;
    }

    if (isEmailInvalid) {
        document.querySelector('#txtEmailError').innerHTML = `<small>Please enter a valid email</small>`;
        document.querySelector('#txtEmailError').style.color = "red";
    }
    else {
        document.querySelector('#txtEmailError').innerHTML = "";
    }
})
}






















