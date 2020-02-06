// initialize storage
const storage = new Storage();

// get location data from local storage
const locationData = storage.getLocationData();

// initialize weather object
const weather = new Weather(locationData);
const ui = new UI();


// get weather when the DOM loads
document.addEventListener('DOMContentLoaded',getWeather);

// change location event
document.getElementById('w-change-btn').addEventListener('click',(e) => {
    const location = document.getElementById('location').value;
    console.log('1')
    weather.changeLocation(location);

    getWeather();
    $('#locModal').modal('hide');
})

function getWeather(){
    weather.getWeather().then(results => {
        ui.updateUI(results)
    }).catch(err => console.log(err))
}



