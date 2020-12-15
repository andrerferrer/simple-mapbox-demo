console.log(process.env)
// output: {}

// reason:
// https://stackoverflow.com/questions/57057155/why-is-process-env-returning-an-empty-object-while-process-env-prop-returns-the

import { loadMap, apiKey } from './plugins/load_map'

const form = document.querySelector('form');

const fetchAPI = (event) => {
  event.preventDefault();
  const city = event.currentTarget
                    .querySelector('#cityInput')
                    .value
  const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${city}.json?access_token=${apiKey}`
  
  fetch(url)
    .then(res => res.json())
    .then(loadMap)
}

form.addEventListener('submit', fetchAPI)
