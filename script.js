let lat;
let lng;

let weatherDesc;
let temp;


function geocodeLatLng() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
            position => {
                let lat = position.coords.latitude;
                let lng = position.coords.longitude;

                const api_url = `https://cors-anywhere.herokuapp.com/http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&units=imperial&appid=554d1f11a8df60eddbddf39182838a79`;

                fetch(api_url)
                    .then(response => {
                        return response.json();
                    })
                    .then(data => {
                        //console.log(data);

                        
                        temp = document.getElementById("temp");
                        temp.innerHTML = Math.round(data.main.temp);

                        weatherDesc = document.getElementById("condition");
                        weatherDesc.innerHTML = data.weather[0].description;

                        console.log(data.main);
                    })

            })
    }
    else {
        console("Geolocation doesn't work")
    }


}

geocodeLatLng();

