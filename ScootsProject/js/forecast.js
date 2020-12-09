const apiURLP = "https://api.openweathermap.org/data/2.5/forecast?zip=77723,mx&appid=35f1ed9250cdcba10033ff9e383b7d68&units=imperial"   //preston

fetch(apiURLP)
    .then(response => response.json())
    .then(jsObject => {
        console.log(jsObject);
        
        const forecast = jsObject.list.filter(x =>x.dt_txt.includes('18:00:00'));
        console.log(forecast);

        const weekdays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

        for(let day = 0; day < forecast.length; day++){

            //while(day<3){
                const d = new  Date(forecast[day].dt_txt);
                document.getElementById(`dayofweek${day+1}`).textContent = weekdays[d.getDay()];            
                document.getElementById(`forecast${day+1}`).textContent = forecast[day].main.temp;

                const iconcode = forecast[day].weather[0].icon;
                console.log(iconcode);
                const icon_path = "//openweathermap.org/img/w/" + iconcode + ".png";
                console.log(icon_path);
                if(day==0){
                    document.getElementById('weather_icon').src = icon_path;
                }else if(day==1){
                    document.getElementById('weather_icon1').src = icon_path;
                }else if(day==2){
                    document.getElementById('weather_icon2').src = icon_path;
                }else if(day==3){
                    document.getElementById('weather_icon3').src = icon_path;
                }else if(day==4){
                    document.getElementById('weather_icon4').src = icon_path;
                }else {}
            //}
        }
    });





