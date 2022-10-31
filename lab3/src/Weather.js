export default class Weather {
  constructor(api_key) {
    this.apiKey = api_key;

    // check if there is a weather object in local storage

    //check if timestamp is older than 10 minutes
    if(
        localStorage.getItem("weather") &&
        Date.now() - localStorage.getItem("timestamp") < 600000
    ){
        //get weather from local storage
        const weatherData = JSON.parse(localStorage.getItem("weather"));
        this.displayWeather(weatherData);
        console.log
    }
    else{
        this.getLocation();
    }

  }
  
  getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(this.getWeather.bind(this));
    } else {
      console.log("Geolocation is not supported by this browser.");
    }
  }

  getWeather(position) {
    console.log(position);
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;

    const url = "https://api.weatherapi.com/v1/current.json?key=" + this.apiKey + "&q=" + lat + "," + lon + "&aqi=no";

    fetch(url)
        .then(response => response.json())
        .then(data => {
            //save to local storage
            localStorage.setItem("weather", JSON.stringify(data));
            //save timestamp
            localStorage.setItem("timestamp", Date.now()); //miliseconden sinds 1970
            this.displayWeather(data);
        });
  }

  displayWeather(data){
    const temp = data.current.temp_c;
    document.querySelector(".weather__temp").innerHTML = temp + "°C";

    const weather = data.current.condition.text;
    document.querySelector(".weather__summary").innerHTML = weather;

    const icon = data.current.condition.icon;
    // create an image element
    const img = document.createElement("img");
    // set the src attribute to the icon url
    img.src = icon;
    // append the image to the weather__icon div
    document.querySelector(".weather__icon").appendChild(img);
    this.getStravaRoute();
  }

  getStravaRoute(){
    const url = "https://api.disneyapi.dev/characters";
    fetch(url)
        .then(response => response.json())
        .then(data => {
            console.log(data);
        });
  }

}
