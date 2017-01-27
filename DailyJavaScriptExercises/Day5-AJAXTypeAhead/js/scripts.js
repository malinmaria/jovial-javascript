const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';

cities = [];

fetch(endpoint)
  .then(blob => blob.json())
  .then(data => cities.push(...data));

function findMatch(wordToMatch, cities){
  return cities.filter(place => {
    //need to figure out if what was typed matches to any city or state names
    const regex = new RegExp(wordToMatch, 'gi'); //flags: g-global i-insensitive case
    return place.city.match(regex) || place.state.match(regex);
  })
}
