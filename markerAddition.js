let accesibility_layer = L.layerGroup([])
let food_layer = L.layerGroup([])

let acc_points = []
let food_points = []

// parse a json from a file
let smth1 = fetch("accesibility.json", {mode: "no-cors"})
    .then((res) => res.json())
    .then((data) => data["features"])
    // add pins to the map
    .then((pins) => {
        pins.forEach((pin) => {
            let marker = L.marker([pin["geometry"]["coordinates"][1], pin["geometry"]["coordinates"][0]])
                //color the pin
                .setIcon(L.icon({
                    iconUrl: "./images/redpin16.png",
                    iconSize: [8, 8],
                    iconAnchor: [8, 8],
                    popupAnchor: [0, -8]
                    }))
                //.addTo(map);
            marker.bindPopup(pin["properties"]["title"]);
            accesibility_layer.addLayer(marker);
            acc_points.push(pin);
        });
    });

// console.log(acc_points);

let smth2 = fetch("food.json", {mode: "no-cors"})
    .then((res) => res.json())
    .then((data) => data["features"])
    .then((pins) => {
        pins.forEach((pin) => {
            let marker = L.marker([pin["geometry"]["coordinates"][1], pin["geometry"]["coordinates"][0]])
                .setIcon(L.icon({
                    iconUrl: "./images/greenpin16.png",
                    iconSize: [8, 8],
                    iconAnchor: [8, 8],
                    popupAnchor: [0, -8]
                    }))
                //.addTo(map);
            marker.bindPopup(pin["properties"]["title"]);
            food_layer.addLayer(marker);
            food_points.push(pin)
        });
    });

// console.log(food_points)


// acc_points = acc_points.concat(food_points)
// fetched_points = acc_points
// console.log(acc_points.length);

let parsed_acc_points = JSON.parse(JSON.stringify(accesibility))
let parsed_food_points = JSON.parse(JSON.stringify(food))

parsed_acc_points = parsed_acc_points["features"]
parsed_food_points = parsed_food_points["features"]

fetched_points = parsed_acc_points.concat(parsed_food_points)

console.log(fetched_points.length)
