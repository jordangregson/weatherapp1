let day = new Date();
let hours = day.getHours();

console.log(hours);


let bckLat;
let bckLng;

let bckCondition;
function geocodeLatLng() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
            position => {
                bckLat = position.coords.latitude;
                bckLng = position.coords.longitude;

                const api_url = `https://cors-anywhere.herokuapp.com/http://api.openweathermap.org/data/2.5/weather?lat=${bckLat}&lon=${bckLng}&units=imperial&appid=554d1f11a8df60eddbddf39182838a79`;

                fetch(api_url)
                    .then(response => {
                        return response.json();
                    })
                    .then(data => {

                        let weather = data.weather[0].main;


                        if(hours < 8) {
                            document.body.style.backgroundColor = "rgb(68, 67, 67)";
                        } 

                        else if(hours < 19 && weather == "Clear") {
                            document.body.style.backgroundColor = "rgb(112, 165, 214)";
                        }

                        else if(hours < 19 && weather == "Clouds") {
                            document.body.style.backgroundColor = "rgb(170, 170, 170)";
                        }

                        else if(hours < 19 && weather == "Rain" || weather == "Drizzle") {
                            document.body.style.backgroundColor = "rgb(88, 115, 133)";
                        }

                        else if(hours < 19 && weather == "Clouds") {
                            document.body.style.backgroundColor = "rgb(34, 55, 70)";
                        }

                        else if(hours < 19 && weather == "Snow") {
                            document.body.style.backgroundColor = "rgb(230, 230, 230)";
                        }

                        else if(hours > 19) {
                            document.body.style.backgroundColor = "rgb(68, 67, 67)";
                        }

                        else {
                            document.body.style.backgroundColor = "gray";
                        }





                        /*
                        if(hours < 5) {
                            document.body.style.backgroundColor = "rgb(0, 0, 34)";
                        }
                    
                        //Morning
                        else if(hours < 9) {
                            document.body.style.backgroundColor = "rgb(213, 171, 6)";
                        }
                    
                        //Afternoon (Middle of the day)
                        else if(hours < 18) {
                            document.body.style.backgroundColor = "rgb(240, 220, 69)";
                        }
                    
                        //Evening
                        else if(hours < 20) {
                            document.body.style.backgroundColor = "rgb(240, 145, 3)";
                        }
                    
                        //Night
                        else if(hours <= 24) {
                            document.body.style.backgroundColor = "rgb(20, 20, 138)";
                        }
                    
                        //Late Night
                        else if(hours < 4) {
                            document.body.style.backgroundColor = "rgb(0, 0, 34)";
                        }
                        */
                    })

                })
        }
        else {
            console("Geolocation doesn't work")
        }
    
    
    }
    
    geocodeLatLng();
    