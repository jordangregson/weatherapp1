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
                        
                        //Temperature for tomorrow
                        //data.daily[0].temp.day
                        
                        //Feels like for tomorrow
                        //data.daily[0].feels_like.day

                        //Condition for tomorrow
                        //data.daily[0].weather.main

                        tomTemp = document.getElementById("tomorrows-temp");
                        tomTemp.innerHTML = Math.round(data.daily[0].temp.day) +"°";

                        tomFeelsLike = document.getElementById("tomorrows-feels-like");
                        tomFeelsLike.innerHTML = "It's gonna feel like " + Math.round(data.daily[0].feels_like.day) + "°";

                        tomCondition = document.getElementById("tomorrows-condition");
                        tomCondition.innerHTML = data.daily[0].weather[0].main;
                        
                    })

            })
    }
    else {
        console("Geolocation doesn't work")
    }


}

geocodeLatLng();

