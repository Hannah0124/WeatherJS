 // Init weather object 
 const weather = new Weather('Boston', 'US');

 // Get weather on DOM load
 document.addEventListener('DOMContentLoaded', getWeather);

 // weather.changeLocation('Miami', 'US');

function getWeather() {
  weather.getWeather()
    .then(results => {
      console.log(results);
    })
    .catch(err => console.log(err));
}
