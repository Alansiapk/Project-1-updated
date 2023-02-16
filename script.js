const FOURSQUARE_API_KEY = "fsq331OlQJLkuEtpOYZ/Wc3NNCUSfvlqMjdOpXhmXzYtnsg="
const START_POINT = [1.3521,103.8198]



async function loadData(lat,lng, query) {
    let response = await axios.get("https://api.foursquare.com/v3/places/search", {
        "headers": {
            "Accept": "application/json",
            "Authorization": FOURSQUARE_API_KEY
        },
        "params": {
            "ll": lat+",",lng,
            "query": query,
        },

    });
    console.log(response.data);
    return response.data;
}


document.querySelector("#btnSearch").addEventListener("click", async function () {
    let searchValue = document.querySelector('#searchValue').value;
        let searchResults = await loadData(START_POINT[0], START_POINT[1], searchValue);
        console.log(searchResults);

    
});



let map = L.map("map").setView(START_POINT,13)

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);