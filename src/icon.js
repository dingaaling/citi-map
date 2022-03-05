import L from 'leaflet';

const icon1 = new L.Icon({
    iconUrl: require('./images/icon1.png'),
    iconRetinaUrl: require('./images/icon1.png'),
    iconAnchor: null,
    popupAnchor: null,
    shadowUrl: null,
    shadowSize: [0,0],
    shadowAnchor: null,
    iconSize: new L.Point(15,15),
    className: 'none'
});


export { icon1 };
