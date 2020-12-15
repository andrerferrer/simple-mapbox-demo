import mapboxgl from 'mapbox-gl';
const apiKey = process.env.MAPBOX_API_KEY

const loadMap = (data) => {
  const coordinates = data.features[0].geometry.coordinates
  console.log(coordinates)
  
  mapboxgl.accessToken = apiKey;
  const map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v9',
    center: coordinates,
    zoom: 12
  });
  new mapboxgl.Marker()
  .setLngLat(coordinates)
  .addTo(map);
}

export { loadMap, apiKey };
