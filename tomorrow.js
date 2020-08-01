let tomLat;
let tomLng;

let tomTemp;
let tomFeelsLike;
let tomCondition;



function geocodeLatLng() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
            position => {
                let tomLat = position.coords.latitude;
                let tomLng = position.coords.longitude;

                const api_url = `https://api.openweathermap.org/data/2.5/onecall?lat=${tomLat}&lon=${tomLng}&units=imperial&appid=554d1f11a8df60eddbddf39182838a79`;

                fetch(api_url)
                    .then(response => {
                        return response.json();
                    })
                    .then(data => {

                        tomTemp = document.getElementById("tomorrows-temp");
                        tomTemp.innerHTML = Math.round(data.daily[0].temp.day) +"°";

                        tomFeelsLike = document.getElementById("tomorrows-feels-like");
                        tomFeelsLike.innerHTML = "It's gonna feel like " + Math.round(data.daily[0].feels_like.day) + "°";

                        tomCondition = document.getElementById("tomorrows-condition");
                        tomCondition.innerHTML = data.daily[0].weather[0].main;
                        

                        let weather = data.daily[0].weather[0].main;

                        console.log(data.daily[0].weather[0].main);
                        

                        if (weather == "Clouds") {
                            let partlyCloudy = document.createElement("img");
                            partlyCloudy.src = "clouds.png"

                            var src = document.getElementById("tomorrow-weather-img");
                            src.appendChild(partlyCloudy);
                        }

                        else if (weather == "Rain" || weather == "Drizzle") {
                            let partlyCloudy = document.createElement("img");
                            partlyCloudy.src = "rain.png"

                            var src = document.getElementById("tomorrow-weather-img");
                            src.appendChild(partlyCloudy);
                        }

                        else if (weather == "Clear") {
                            let partlyCloudy = document.createElement("img");
                            partlyCloudy.src = "sunny.png"

                            var src = document.getElementById("tomorrow-weather-img");
                            src.appendChild(partlyCloudy);
                        }

                        else if (weather == "Snow") {
                            let partlyCloudy = document.createElement("img");
                            partlyCloudy.src = "snow.png"

                            var src = document.getElementById("tomorrow-weather-img");
                            src.appendChild(partlyCloudy);
                        }

                        else if (weather == "Thunderstorm") {
                            let partlyCloudy = document.createElement("img");
                            partlyCloudy.src = "thunder.png"

                            var src = document.getElementById("tomorrow-weather-img");
                            src.appendChild(partlyCloudy);
                        }

                        else {
                            let partlyCloudy = document.createElement("img");
                            partlyCloudy.src = "fog.png"

                            var src = document.getElementById("tomorrow-weather-img");
                            src.appendChild(partlyCloudy);
                        }
                        
                    })

            })
    }
    else {
        console("Geolocation doesn't work")
    }


}

geocodeLatLng();

