let categories = {
    "bikes" : [],
    "ebikes" : [],
    "repair" : [],
    "building" : [],
    "parking" : [],
    "train" : [],
    "bus" : [],
    "smoking" : [],
    "white": [],
    "blue": [],
    "coffee": [],
    "foodtruck": [],
    "freezone": [],
    "lunch": []
}

let active_categories = {
    "bikes" :  false,
    "ebikes" :  false,
    "repair" :  false,
    "building" :  false,
    "parking" :  false,
    "train" :  false,
    "bus" :  false,
    "smoking" :  false,
    "white":  false,
    "blue":  false,
    "coffee":  false,
    "foodtruck":  false,
    "freezone":  false,
    "lunch":false
}

// console.log(food.features.length);

fetched_points.forEach((point) => {
    // console.log(point)
    let classes = point["properties"]["icon_classes"];
    let words = classes.split(" ");

    for (let j = 0; j < words.length; j++) {
        let word = words[j];
        if (word in categories) {
            categories[word].push(new Object({lat: point["geometry"]["coordinates"][1], lng: point["geometry"]["coordinates"][0]}));
        }
    }
});
//
// console.log("categories:", categories)