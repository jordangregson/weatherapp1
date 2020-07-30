let lat;
let lng;

let todayTemp;
let todayFeelsLike;
let todayCondition;



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
                        console.log(data);

                        //Todays Weather
                        
                        todayTemp = document.getElementById("todays-temp");
                        todayTemp.innerHTML = Math.round(data.main.temp) +"°";

                        todayFeelsLike = document.getElementById("todays-feels-like");
                        todayFeelsLike.innerHTML = "Feels like " + Math.round(data.main.feels_like) + "°";

                        todayCondition = document.getElementById("todays-condition");
                        todayCondition.innerHTML = data.weather[0].description;


                        //Tomorrows Weather

                        


                        
                    })

            })
    }
    else {
        console("Geolocation doesn't work")
    }


}

geocodeLatLng();

