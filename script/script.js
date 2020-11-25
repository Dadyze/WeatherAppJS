const grad1 = document.getElementById("grad");
const vrijeme = document.getElementById("vrijeme");
const detaljno = document.getElementById("detaljnoVrijeme");
const temp = document.getElementById("temperatura");
const image = document.getElementById("slika");

const feels = document.getElementById("FeelsLike")
const hum = document.getElementById("Humitidy")
const pres = document.getElementById("Pressure")
const maxT = document.getElementById("maxTemp")
const windS = document.getElementById("windSpeed")

const grad = prompt("Unesi Grad: ");
fetch("https://community-open-weather-map.p.rapidapi.com/forecast?q="+grad+"&units=metric", {
	"method": "GET",
	"headers": {
		"x-rapidapi-key": "9f4676cc63msh64cb622bbccd245p161641jsn61171766e9bd",
		"x-rapidapi-host": "community-open-weather-map.p.rapidapi.com"
	}
})
    .then(res =>{
        return res.json();
    })
    .then(data => {
        console.log(data);
        grad1.innerText = data.city.name + " ,"+data.city.country;
        vrijeme.innerText=data.list[0].weather[0].main;
        detaljno.innerText=data.list[0].weather[0].description;
        temp.innerText=parseInt(data.list[0].main.temp) +"°";
        image.setAttribute("src", "http://openweathermap.org/img/wn/"+data.list[0].weather[0].icon+"@2x.png");
        feels.innerText = data.list[0].main.feels_like +"°";
        hum.innerText = data.list[0].main.humidity +"%";
        pres.innerText=data.list[0].main.pressure + "hPa";
        maxT.innerText=data.list[0].main.temp_max +"°";
        windS.innerText=data.list[0].wind.speed + "m/s";


    })