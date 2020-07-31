let todayLat;
let todayLng;

let todayTemp;
let todayFeelsLike;
let todayCondition;

function geocodeLatLng() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
            position => {
                let todayLat = position.coords.latitude;
                let todayLng = position.coords.longitude;

                const api_url = `https://cors-anywhere.herokuapp.com/http://api.openweathermap.org/data/2.5/weather?lat=${todayLat}&lon=${todayLng}&units=imperial&appid=554d1f11a8df60eddbddf39182838a79`;

                fetch(api_url)
                    .then(response => {
                        return response.json();
                    })
                    .then(data => {


                        //Todays Weather

                        todayTemp = document.getElementById("todays-temp");
                        todayTemp.innerHTML = Math.round(data.main.temp) + "°";

                        todayFeelsLike = document.getElementById("todays-feels-like");
                        todayFeelsLike.innerHTML = "Feels like " + Math.round(data.main.feels_like) + "°";

                        todayCondition = document.getElementById("todays-condition");
                        todayCondition.innerHTML = data.weather[0].main;

/*
                        let sunny = document.createElement("img");
                        sunny.src = "sunny-desktop.png";
                        
                        let partlyCloudy = document.createElement("img");
                        partlyCloudy.src = "partly-cloudy-desktop.png"

                        if(data.weather[0].main == "Rain") {
                        var src = document.getElementById("today-weather-img-d");
                        src.appendChild(sunny);
                        }*/
                    })

            })
    }
    else {
        console("Geolocation doesn't work")
    }


}

geocodeLatLng();

