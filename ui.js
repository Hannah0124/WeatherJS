 class UI {
   constructor() {
     this.location = document.getElementById('w-location');
     this.desc = document.getElementById('w-desc');
     this.string = document.getElementById('w-string');
     this.details = document.getElementById('w-details');
     this.icon = document.getElementById('w-icon');
     this.humidity = document.getElementById('w-humidity');
     this.tempmin = document.getElementById('w-temp-min');
     this.tempmax = document.getElementById('w-temp-max');
     this.wind = document.getElementById('w-wind');
   }


   paint(weather) {
     this.location.textContent = `${weather.name}, ${weather.sys.country}`;
     this.desc.textContent = weather.weather[0].description;  // or weather[0]
     this.string.textContent = getTemp(weather.main.temp);
     this.icon.setAttribute('src', `http://openweathermap.org/img/w/${weather.weather[0].icon}.png`);
     this.humidity.textContent = `Relative humidity: ${weather.main.humidity}%`;
     this.tempmin.textContent = `Lowest temp: ${getTemp(weather.main.temp_min)}`;
     this.tempmax.textContent = `Highest temp: ${getTemp(weather.main.temp_max)}`;
     this.wind.textContent = `Wind speed: ${weather.wind.speed} meter/sec`;
   }
 }