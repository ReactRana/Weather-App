const button = document.getElementById("search-btn");
const input = document.getElementById("city-input");
const weather_img = document.querySelector(".weather-img");
const temperature = document.querySelector(".temp");
const description = document.querySelector(".dest");
const locality = document.querySelector(".loca");
const humidity = document.getElementById("humidity");
const wind_speed = document.getElementById("wind-speed");


 async function checkweather(city_name){
    const api_key = "4ca82cb7916ad764ab5a74ef63bad418";
    const weather_api_key = `https://api.openweathermap.org/data/2.5/weather?q=${city_name}&appid=${api_key}`;

    const weather_data =  await fetch(`${weather_api_key}`).then(response => response.json());
    console.log(weather_data);

    temperature.innerHTML = `${Math.round(weather_data.main.temp - 273.15)}°C`;
    description.innerHTML = `${weather_data.weather[0].description}`;

    humidity.innerHTML = `${weather_data.main.humidity}%`;

    switch(weather_data.weather[0].main){
        case 'Clouds':
        weather_img.src ="cloud.png";
        break;
        case 'Clear':
        weather_img.src = "clear.png";
        break;
        case 'Rain':
        weather_img.src = "rain.png";
        break;
        case 'mist':
        weather_img.src = "mist.png";
        break;
        case 'Snow':
        weather_img.src = "snow.png";
        break; 
        
    }
    

}

button.addEventListener("click", ()=>{
    checkweather(input.value)
});