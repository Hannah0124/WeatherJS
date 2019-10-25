 // Init storage 
 const storage = new Storage();

 // Get stored location data 
 const weatherLocation = storage.getLocationData();

 // Init weather object 
 const weather = new Weather(weatherLocation.city, weatherLocation.country);

 // Init UI
 const ui = new UI();

 // Get weather on DOM load
 document.addEventListener('DOMContentLoaded', getWeather);

 // Change location event 
 document.getElementById('w-change-btn').addEventListener('click', (e) => {
   const city = document.getElementById('city').value;
   const country = document.getElementById('country').value;

   // Change location
   weather.changeLocation(city, country);

   // Set location in LS
   storage.setLocationData(city, country);

   // Get and display weather
   getWeather();

   // Close modal (jQuery)
   $('#locModal').modal('hide');
 });

 // Calculate temperature
function getTemp(temp) {
  let celsius = (temp - 273.15).toFixed(2);
  let fahrenheit = (celsius * 9/5 + 32).toFixed(2);
  return `${fahrenheit}°F (${celsius}°C)`
 }
 
function getWeather() {
  weather.getWeather()
    .then(results => {
      ui.paint(results);
    })
    .catch(err => console.log(err));
}


