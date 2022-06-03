function computeSelectedPoints() {
    let points = [];
    for ([key, val] of Object.entries(categories)) {
        if (active_categories[key] === true) {
            for (let i = 0; i < val.length; i++) {
                points.push(val[i]);
            }
        }
    }
    console.log(points);
    return points;
}

let heat = L.heatLayer(computeSelectedPoints(), {
    maxZoom: 10
}).addTo(map);

function changeOverlay(e) {


    let category = e.name;
    if (category === "accesibility") {
        active_categories["bikes"] = active_categories["bikes"] !== true;
        active_categories["ebikes"] = active_categories["ebikes"] !== true;
        active_categories["repair"] = active_categories["repair"] !== true;
        active_categories["building"] = active_categories["building"] !== true;
        active_categories["parking"] = active_categories["parking"] !== true;
        active_categories["train"] = active_categories["train"] !== true;
        active_categories["bus"] = active_categories["bus"] !== true;
        active_categories["smoking"] = active_categories["smoking"] !== true;
    } else if (category === "food") {
        active_categories["white"] = active_categories["white"] !== true;
        active_categories["blue"] = active_categories["blue"] !== true;
        active_categories["coffee"] = active_categories["coffee"] !== true;
        active_categories["foodtruck"] = active_categories["foodtruck"] !== true;
        active_categories["freezone"] = active_categories["freezone"] !== true;
        active_categories["lunch"] = active_categories["lunch"] !== true;
    }
    heat.setLatLngs(computeSelectedPoints());
}

map.on('overlayadd', changeOverlay);
map.on('overlayremove', changeOverlay);