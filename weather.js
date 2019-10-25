class Weather {
  constructor(city, country) {
    this.apiKey = 'd07f906a4da48e94608362cc317ea0fd';
    this.city = city;
    this.country = country;
  }

  // Fetch weather from API
  async getWeather() {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${this.city},${this.country}&appid=${this.apiKey}`);

    // http://api.openweathermap.org/data/2.5/weather?q=boston,us&appid=d07f906a4da48e94608362cc317ea0fd

    const responseData = await response.json();

    return responseData;
  }

  // Change weather location 
  changeLocation(city, country) {
    this.city = city;
    this.country = country;
  }
}