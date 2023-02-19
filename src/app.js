import { toInsert } from `./fetch.js`

function formatDay(time) {
	let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
	let date = new Date(time * 1000);
	let day = date.getDay();
	return days[day];
}
function toInsertForecast(response) {
	let forecast = response.data.daily;
	let insertToDivForecast = document.querySelector("#forecastSection");
	let forecastObject = `<div class="row">`;
	forecast.forEach(function (data, index) {
		if (index < 6) {
			forecastObject += `<div class="col-2">
			<div class="dateForecast">
			${formatDay(data.dt)}<hr>
			</div>
			<div class="forecastIcon">
			<img src="http://openweathermap.org/img/wn/${
				data.weather[0].icon
			}@2x.png" alt="" width="45"/>
			</div>
			<span class="min">${Math.round(data.temp.min)}°</span>
			<span class="max">${Math.round(data.temp.max)}°</span>
			</div>`;
		}
	});
	forecastObject += `</div>`;
	insertToDivForecast.innerHTML = forecastObject;
}



function start(event) {
	event.preventDefault();
	let city3 = document.querySelector("#search-name-form");
	let cityName = city3.value;
	let endPiont = "https://api.openweathermap.org/data/2.5/weather?q=";
	console.log(units);
	axios
		.get(`${endPiont}${cityName}&appid=${apiKey}&units=${units}`)
		.then(toInsert);
}

function tocelsius(event1) {
	event1.preventDefault();
	activeLinkF.classList.remove("deactive");
	activeLinkF.classList.add("active");
	activeLinkC.classList.remove("active");
	activeLinkC.classList.add("deactive");
	let currentTempTo = document.querySelector("#cityCurrentTemp").innerHTML;
	let currentTempToInsert = document.querySelector("#cityCurrentTemp");
	let tofc = Math.round(((currentTempTo - 32) * 5) / 9);
	currentTempToInsert.innerHTML = `${tofc}`;
}
function tofahrenheit(event2) {
	event2.preventDefault();
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
let units = "metric";
