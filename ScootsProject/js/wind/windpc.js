
const apiURL = "//api.openweathermap.org/data/2.5/weather?zip=77660,mx&appid=35f1ed9250cdcba10033ff9e383b7d68&units=imperial"   //preston

//const apiURL = "//api.openweathermap.org/data/2.5/weather?zip=83287,us&appid=35f1ed9250cdcba10033ff9e383b7d68&units=imperial" //fish haven
//const apiURL = "//api.openweathermap.org/data/2.5/weather?zip=83276,us&appid=35f1ed9250cdcba10033ff9e383b7d68&units=imperial" //soda springs


//Go fetch it and then wait for a response.
fetch(apiURL)
  .then((response) => response.json())
  .then((wheatherInfo) => {
    //Once it comes back, display it to the console.
    console.log(wheatherInfo);
    document.getElementById('place2').innerHTML = wheatherInfo.name;
    document.getElementById('currentTemp2').innerHTML = wheatherInfo.main.temp;
    document.getElementById('windSpeed2').innerHTML = wheatherInfo.wind.speed;
    document.getElementById('humidity2').innerHTML = wheatherInfo.main.humidity + ' %';
    
    const iconcode = wheatherInfo.weather[0].icon;
    console.log(iconcode);
    //const icon_path = "//openweathermap.org/img/w/" + iconcode + ".png";
    //console.log(icon_path);
    //document.getElementById('weather_icon').src = icon_path;
    let windchill = 35.74 + (0.6215 * wheatherInfo.main.temp) - (35.75 * Math.pow(wheatherInfo.wind.speed,0.16))
    + (0.4275 * wheatherInfo.main.temp * Math.pow(wheatherInfo.wind.speed,0.16));
    windchill = Math.round(windchill);
    if(wheatherInfo.main.temp<=50  && wheatherInfo.wind.speed >3)
    {
        document.getElementById("chill2").textContent = "The Windchill is: " + windchill+  "\xB0F";
    }else{
        document.getElementById("chill2").textContent = "No Windchill today";
    }

 }); 



/* const tempNumber = document.getElementById("temp").textContent;

const speedNumber = document.getElementById("speed").textContent;

let windchill = 35.74 + (0.6215 * tempNumber) - (35.75 * Math.pow(speedNumber,0.16))
+ (0.4275 * tempNumber * Math.pow(speedNumber,0.16));

windchill = Math.round(windchill);

if(tempNumber<=50  && speedNumber >3)
{
    document.getElementById("chill").textContent = "The Windchill is: " + windchill+  "\xB0F";
}else{
    document.getElementById(chill).textContent = "No Windchill today";
} */
