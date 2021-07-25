mapboxgl.accessToken = 'pk.eyJ1IjoiYW5raXRhLTEyMyIsImEiOiJja3I2M2dueWwwMjloMnZtYXcyZ3JveHh4In0.4MKO87mc6jXmROj2OCl37w';

var center = [77.75, 20.933333];
var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v11',
    center: center,
    zoom: 4
});
function setupMap(props) {
    // create the popup
    var popup = new mapboxgl.Popup({ offset: 25 }).setHTML(`<h2>${props.name}</h2><h4>state:${props.state}<h4><h4>lon:${props.lon} | lat:${props.lat} </h4> `);
    // create the marker
    var marker = new mapboxgl.Marker({
        draggable: false
    }).setLngLat([props.lon, props.lat])
        .addTo(map)
        .setPopup(popup);
}
let jsondata = async()=> {
    try {
        let data = await fetch("./data.json");
        let jasdata =await data.json();
        jasdata.map((elem, index) => {
            key = index;
            let curelem = jasdata[index];
            setupMap(curelem);
        })
    }
    catch (err) {
        console.log(err);
    }

}

jsondata();