var mymap = L.map('map').setView([48.15273, 17.07367], 16);

L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', {
    maxZoom: 18,
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, ' +
        'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1
}).addTo(mymap);

var schoolIcon = L.icon({
    iconUrl: 'icons/school.svg',
    iconSize: [30, 30],
    popupAnchor: [0, -15] // point from which the popup should open relative to the iconAnchor
});

var marker = L.marker([48.15273, 17.07367], { icon: schoolIcon }).addTo(mymap);

var blocka = L.polygon([
    [48.151818247033496, 17.07254469394684],
    [48.151818247033496, 17.073875069618225],
    [48.15197035092735, 17.073875069618225],
    [48.15197035092735, 17.07254469394684],
    [48.151818247033496, 17.07254469394684]
]).addTo(mymap);

var blockb = L.polygon([
    [48.15246960642209, 17.07299530506134],
    [48.15233181954863, 17.07299530506134],
    [48.15232824066387, 17.074100375175476],
    [48.152301399020224, 17.07409769296646],
    [48.152301399020224, 17.074178159236908],
    [48.15232645122139, 17.074178159236908],
    [48.15232466177886, 17.074357867240906],
    [48.15246423810928, 17.07435518503189],
    [48.15246960642209, 17.07299530506134]
]).addTo(mymap);

var blockc = L.polygon([
    [48.15282570325154, 17.072812914848328],
    [48.15282570325154, 17.073875069618225],
    [48.1529724358995, 17.073875069618225],
    [48.1529724358995, 17.072812914848328],
    [48.15282570325154, 17.072812914848328]
]).addTo(mymap);

var blockd = L.polygon([
    [48.15348062865663, 17.073188424110413],
    [48.15333926568372, 17.073191106319427],
    [48.153334344813715, 17.07411579787731],
    [48.15330884575255, 17.074114456772804],
    [48.15330929310459, 17.074183523654938],
    [48.15333568686922, 17.07418486475944],
    [48.15333389746188, 17.074365913867947],
    [48.1534752604496, 17.07437127828598],
    [48.15348062865663, 17.073188424110413]
]).addTo(mymap);

var blocke = L.polygon([
    [48.153833139690114, 17.072815597057343],
    [48.153833139690114, 17.07389384508133],
    [48.153983448226825, 17.07389384508133],
    [48.153983448226825, 17.072815597057343],
    [48.153833139690114, 17.072815597057343]
]).addTo(mymap);

marker.bindPopup("<b>Fakulta elektrotechniky <br> a informatiky STU</b><br>Ilkovičova 9");
blocka.bindPopup("<b>Blok A</b><br>Inštitút komunikácie a aplikovanej lingvistiky<br>Ústav jadrového a fyzikálneho inžinierstva");
blockb.bindPopup("<b>Blok B</b><br>Ústav elektrotechniky<br>Ústav multimediálnych informačných a komunikačných technológií");
blockc.bindPopup("<b>Blok C</b><br>Ústav elektroenergetiky a aplikovanej elektrotechniky<br>Ústav informatiky a matematiky");
blockd.bindPopup("<b>Blok D</b><br>Ústav automobilovej mechatroniky<br>Ústav robotiky a kybernetiky");
blocke.bindPopup("<b>Blok E</b><br>Ústav elektroniky a fotoniky");

var busIcon = L.icon({
    iconUrl: 'icons/bus.svg',
    iconSize: [30, 30],
    popupAnchor: [0, -15] // point from which the popup should open relative to the iconAnchor
});

var tramIcon = L.icon({
    iconUrl: 'icons/tram.svg',
    iconSize: [30, 30],
    popupAnchor: [0, -15] // point from which the popup should open relative to the iconAnchor
});

var busMarker1 = L.marker([48.154121230665346, 17.075118273496628], { icon: busIcon }).addTo(mymap);
var busMarker2 = L.marker([48.15461062373844, 17.074561715126038], { icon: busIcon }).addTo(mymap);
var busMarker3 = L.marker([48.15464730566373, 17.075776755809784], { icon: busIcon }).addTo(mymap);
var busMarker4 = L.marker([48.154056812947935, 17.076922059059143], { icon: busIcon }).addTo(mymap);
var busMarker5 = L.marker([48.14792244424671, 17.072303295135498], { icon: busIcon }).addTo(mymap);
var busMarker6 = L.marker([48.14833226011215, 17.07202970981598], { icon: busIcon }).addTo(mymap);
var tramMarker1 = L.marker([48.148131826560636, 17.072472274303436], { icon: tramIcon }).addTo(mymap);
var tramMarker2 = L.marker([48.14813898491524, 17.071774899959564], { icon: tramIcon }).addTo(mymap);

busMarker1.bindPopup("<b>ZOO</b><br>Autobusy: 31, 39, N31");
busMarker2.bindPopup("<b>ZOO</b><br>Autobusy: 31, 39, N31");
busMarker3.bindPopup("<b>ZOO</b><br>Autobusy: 30, 32, 37, 92, 192, N29");
busMarker4.bindPopup("<b>ZOO</b><br>Autobusy: 30, 32, 37, 92, 192, N29");
busMarker5.bindPopup("<b>Botanická záhrada</b><br>Autobusy: 29, 32, N29, N33, N34");
busMarker6.bindPopup("<b>Botanická záhrada</b><br>Autobusy: 29, 32, N29, N33, N34");
tramMarker1.bindPopup("<b>Botanická záhrada</b><br>Električky: 4, 9");
tramMarker2.bindPopup("<b>Botanická záhrada</b><br>Električky: 4, 9");


L.Routing.control({
    waypoints: [
        L.latLng(0, 0),
        L.latLng(48.15273, 17.07367)
    ], geocoder: L.Control.Geocoder.nominatim()
}).addTo(mymap);

var pinIcon = L.icon({
    iconUrl: 'icons/pin.svg',
    iconSize: [10, 10],
    popupAnchor: [0, -15]
});



function onMapClick(e) {
    var lat = e.latlng.lat.toFixed(5);
    var lon = e.latlng.lng.toFixed(5);
    console.log(lat + " " + lon);
    var mark = L.marker([lat, lon], { icon: pinIcon }).addTo(mymap);
    mark.bindPopup("Latitude: " + lat + "<br> Longitude: " + lon).openPopup();
}

mymap.on('click', onMapClick);
