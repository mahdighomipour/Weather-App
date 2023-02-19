export function toInsert(showCity) {
	let currentDate = formatDay(showCity.data.dt);
	let insertCity = document.querySelector("#cityCurrentTemp");
	let cityName = document.querySelector("#cityName");
	let currebtDateInsert = document.querySelector("#currentDate");
	let hem = document.querySelector("#humidity");
	let wind = document.querySelector("#wind");
	let desc = document.querySelector("#description");
	let currentTemp = Math.round(showCity.data.main.temp);
	let iconSrc = document.querySelector("#icon");
	currebtDateInsert.innerHTML = `${currentDate}`;
	insertCity.innerHTML = `${currentTemp}`;
	hem.innerHTML = `${showCity.data.main.humidity}`;
	wind.innerHTML = `${showCity.data.wind.speed}`;
	cityName.innerHTML = `${showCity.data.name}`;
	desc.innerHTML = `${showCity.data.weather[0].description}`;
	let iconSource = `http://openweathermap.org/img/wn/${showCity.data.weather[0].icon}@2x.png`;
	iconSrc.setAttribute("src", iconSource);
	iconSrc.setAttribute("alt", showCity.data.weather[0].description);
	lat = showCity.data.coord.lat;
	lon = showCity.data.coord.lon;
	console.log(units);

	let end2 = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${apiKey}&units=${units}`;
	axios.get(end2).then(toInsertForecast);
}
