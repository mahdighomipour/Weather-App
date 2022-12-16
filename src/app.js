function toInsert(showCity) {
	let insertCity = document.querySelector("#cityCurrentTemp");
	let cityName = document.querySelector("#cityName");
	let hem = document.querySelector("#humidity");
	let wind = document.querySelector("#wind");
	let desc = document.querySelector("#description");
	let currentTemp = Math.round(showCity.data.main.temp);
	insertCity.innerHTML = `${currentTemp}`;
	hem.innerHTML = `${showCity.data.main.humidity}`;
	wind.innerHTML = `${showCity.data.wind.speed}`;
	cityName.innerHTML = `${showCity.data.name}`;
	desc.innerHTML = `${showCity.data.weather[0].description}`;
}

function start(event) {
	event.preventDefault();
	let city3 = document.querySelector("#search-name-form");
	let cityName = city3.value;
	let endPiont = "https://api.openweathermap.org/data/2.5/weather?q=";
	let apiKey = "f09d3949047ab6c9e3bcaf79cf61f619";
	let units = "metric";
	axios
		.get(`${endPiont}${cityName}&appid=${apiKey}&units=${units}`)
		.then(toInsert);
}
let clickBtn = document.querySelector(".searchForm");
clickBtn.addEventListener("submit", start);
