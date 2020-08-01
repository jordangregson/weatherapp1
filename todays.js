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

                        let weather = data.weather[0].main;

                        if (weather == "Clouds") {
                            let partlyCloudy = document.createElement("img");
                            partlyCloudy.src = "clouds.png"

                            var src = document.getElementById("today-weather-img");
                            src.appendChild(partlyCloudy);
                        }

                        else if (weather == "Rain" || weather == "Drizzle") {
                            let partlyCloudy = document.createElement("img");
                            partlyCloudy.src = "rain.png"

                            var src = document.getElementById("today-weather-img");
                            src.appendChild(partlyCloudy);
                        }

                        else if (weather == "Clear") {
                            let partlyCloudy = document.createElement("img");
                            partlyCloudy.src = "sunny.png"

                            var src = document.getElementById("today-weather-img");
                            src.appendChild(partlyCloudy);
                        }

                        else if (weather == "Snow") {
                            let partlyCloudy = document.createElement("img");
                            partlyCloudy.src = "snow.png"

                            var src = document.getElementById("today-weather-img");
                            src.appendChild(partlyCloudy);
                        }

                        else if (weather == "Thunderstorm") {
                            let partlyCloudy = document.createElement("img");
                            partlyCloudy.src = "thunder.png"

                            var src = document.getElementById("today-weather-img");
                            src.appendChild(partlyCloudy);
                        }

                        else {
                            let partlyCloudy = document.createElement("img");
                            partlyCloudy.src = "fog.png"

                            var src = document.getElementById("today-weather-img");
                            src.appendChild(partlyCloudy);
                        }

                        console.log(data.weather[0].main)
                    })

            })
    }
    else {
        console("Geolocation doesn't work")
    }


}

geocodeLatLng();

