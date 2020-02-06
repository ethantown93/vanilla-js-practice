class Storage {
    constructor(){
        this.location;
        this.defaultLocation = 'San Diego'
    }

    getLocationData(){
        if(localStorage.getItem('location') == null){
            this.location = this.defaultLocation;
        } else {
            this.location = localStorage.getItem('location');
            console.log(this.location)
        }

        return this.location;
    }

    setLocationData(location){
        localStorage.setItem('location', location);
    }
}