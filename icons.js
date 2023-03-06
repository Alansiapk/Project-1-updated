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
