function toInsertForecast(response) {
	let days = ["Fri", "Sat", "Sun", "Mon", "Tue", "Wed", "Thu"];
	let insertToDivForecast = document.querySelector("#forecastSection");
	let forecastObject = `<div class="row">`;
	days.forEach(function (day) {
		forecastObject += `<div class="col-2">
			${day}
			<img src="https://ssl.gstatic.com/onebox/weather/64/fog.png" alt="" />
			<span class="min">min</span>
			<span class="max">max</span>
			</div>`;
	});
	forecastObject += `</div>`;
	insertToDivForecast.innerHTML = forecastObject;
	console.log(response.data.daily);
}

function toInsert(showCity) {
	let insertCity = document.querySelector("#cityCurrentTemp");
	let cityName = document.querySelector("#cityName");
	let hem = document.querySelector("#humidity");
	let wind = document.querySelector("#wind");
	let desc = document.querySelector("#description");
	let currentTemp = Math.round(showCity.data.main.temp);
	let iconSrc = document.querySelector("#icon");
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

	let end2 = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${apiKey}`;
	axios.get(end2).then(toInsertForecast);
}

function start(event) {
	event.preventDefault();
	let city3 = document.querySelector("#search-name-form");
	let cityName = city3.value;
	let endPiont = "https://api.openweathermap.org/data/2.5/weather?q=";
	let units = "metric";
	axios
		.get(`${endPiont}${cityName}&appid=${apiKey}&units=${units}`)
		.then(toInsert);
}

function tocelsius(event) {
	event.preventDefault();
	activeLinkF.classList.remove("deactive");
	activeLinkF.classList.add("active");
	activeLinkC.classList.remove("active");
	activeLinkC.classList.add("deactive");
	let currentTempTo = document.querySelector("#cityCurrentTemp").innerHTML;
	let currentTempToInsert = document.querySelector("#cityCurrentTemp");
	let tofc = Math.round(((currentTempTo - 32) * 5) / 9);
	currentTempToInsert.innerHTML = `${tofc}`;
}
function tofahrenheit(event) {
	event.preventDefault();
	activeLinkC.classList.remove("deactive");
	activeLinkC.classList.add("active");
	activeLinkF.classList.remove("active");
	activeLinkF.classList.add("deactive");
	let currentTempTo = document.querySelector("#cityCurrentTemp").innerHTML;
	let currentTempToInsert = document.querySelector("#cityCurrentTemp");
	let tofc = Math.round((currentTempTo * 9) / 5 + 32);
	currentTempToInsert.innerHTML = `${tofc}`;
}

let clickBtn = document.querySelector(".searchForm");
clickBtn.addEventListener("submit", start);
let clickCelsiusLink = document.querySelector("#celsiusLink");
let clickFahrenheitLink = document.querySelector("#fahrenheitLink");
clickCelsiusLink.addEventListener("click", tocelsius);
clickFahrenheitLink.addEventListener("click", tofahrenheit);

let activeLinkF = document.querySelector("#fahrenheitLink");
let activeLinkC = document.querySelector("#celsiusLink");
let apiKey = "62231151ce343c4d68652e1617efc22f";
