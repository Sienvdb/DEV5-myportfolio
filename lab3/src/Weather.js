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
    console.log(data)
    const temp = data.current.temp_c;

    const weather = data.current.condition.text;
    document.querySelector(".weather__summary").innerHTML = weather;

    const icon = data.current.condition.icon;
    this.getSuitableDisneyCharacter(temp, weather);
  }

  getSuitableDisneyCharacter(temp, weather){
    var movie;
    var weather;
    console.log(weather)
    if(temp < 0){
        movie = "frozen";
    }
    else if(temp < 10){
        movie = "Queen Arianna";
    }
    else if(temp < 20){
        movie = "Aladdin";
    }
    else if(temp < 30){
        movie = "Moana";
    }
    console.log(temp)
    this.getDisneyMovie(movie);
  }

  getDisneyMovie(movie){
    console.log(movie)
    const url = "https://api.disneyapi.dev/character?name=" + movie;
    fetch(url)
        .then(response => response.json())
        .then(data => {
            console.log(data.data[0]);
            console.log("Watch " + data.data[0].films[0] + " to become one with the weather");
            this.displayMovie(data.data[0])
        });
  }

  displayMovie(data){
    const movie = data.name;
    //set image in weather__icon
    document.querySelector(".weather__icon").style.backgroundImage = "url(" + data.imageUrl + ")";

    //set movie in weather__summary
    document.querySelector(".weather__summary").innerHTML = "Watch " + movie + " to see a movie with the same weather";

  }

}
