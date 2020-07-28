async function weather_data() {
    const api_key = "554d1f11a8df60eddbddf39182838a79";
    const api_url = "api.openweathermap.org/data/2.5/weather?q={Londom}&appid={"+api_key+"}";
    const response = await fetch(api_url);
    const data = await response.json();
    console.log(data);
}

weather_data();