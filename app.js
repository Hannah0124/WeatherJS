 // Init weather object 
 const weather = new Weather('Boston', 'US');

 // Init UI
 const ui = new UI();

 // Get weather on DOM load
 document.addEventListener('DOMContentLoaded', getWeather);

 // weather.changeLocation('Miami', 'US');

function getWeather() {
  weather.getWeather()
    .then(results => {
      ui.paint(results);
    })
    .catch(err => console.log(err));
}

// Calculate temperature
function getTemp(temp) {
  let celsius = (temp - 273.15).toFixed(2);
  let fahrenheit = (celsius * 9/5 + 32).toFixed(2);
  return `${fahrenheit}°F (${celsius}°C)`
 }
