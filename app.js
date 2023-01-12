const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'f5b9837d3amshf514261d029baf3p185ff6jsne5d2d11a8a08',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};

getWeather = (city) => {
    cityName.innerHTML = city.toUpperCase();
    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city, options)
	.then(response => response.json())
	.then(response => {
        console.log(response)
        temp.innerHTML = response.temp
        feels_like.innerHTML = response.feels_like
        wind_speed.innerHTML = response.wind_speed
        humidity.innerHTML = response.humidity
        })
	.catch(err => console.error(err));
}

submit.addEventListener("click",(e)=>{
    e.preventDefault()
    getWeather(city.value)
})

getWeather("Kolkata")