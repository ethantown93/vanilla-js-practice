const weatherStorage = new Storage();

class Weather {
    
    constructor(location){
        this.apiKey = '89ebb922beee4145bff202623200102';
        this.location = location
    }

    // fetch the weather from api
    async getWeather(){
        const response = await fetch(`http://api.weatherapi.com/v1/current.json?key=${this.apiKey}&q=${this.location}`);

        const reponseData = await response.json();

        return reponseData;
    }

    // change the location
    changeLocation(location){
        this.location = location;
        weatherStorage.setLocationData(location);
    }

}