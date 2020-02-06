class UI {
    constructor(){
        this.city = document.getElementById('w-city')
        this.region = document.getElementById('w-region')
        this.country = document.getElementById('w-country')
        this.tempuratureF = document.getElementById('w-tempurature-f')
        this.feelsLike_f = document.getElementById('w-feelslike_f')
        this.tempuratureC = document.getElementById('w-tempurature-c')
        this.feelsLike_c = document.getElementById('w-feelslike_c')
        this.string = document.getElementById('w-string')
        this.icon = document.getElementById('w-icon')
        this.wind = document.getElementById('w-wind')
        this.humidity = document.getElementById('w-humidity')

    }

    updateUI(weather){
        this.city.textContent = weather.location.name;
        this.region.textContent = weather.location.region;
        this.country.textContent = weather.location.country;
        this.tempuratureF.textContent =`Current tempurature: ${weather.current.temp_f} F (${weather.current.temp_c} C)`;
        this.feelsLike_f.textContent =  `Feels like: ${weather.current.feelslike_f} F (${weather.current.feelslike_c} C)`;
        this.string.textContent = weather.current.condition.text
        this.icon.setAttribute('src', weather.current.condition.icon)
        this.wind.textContent = `Wind: ${weather.current.wind_mph} mph from the ${weather.current.wind_dir}`;
        this.humidity.textContent = `Humidity: ${weather.current.humidity}%`

        if(weather.location.region == weather.location.name){
            this.region.textContent = '';
        }

    }
}