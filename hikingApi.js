function buttonClicked(){
    var city = document.getElementById("location_input").value;
    
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=9fd7a449d055dba26a982a3220f32aa2`)
    .then((response) => response.json())
    .then ((data) => {
        console.log(data); //output the API into console
        console.log(data.name);
        console.log(data.sys.country);
        console.log(data.main.temp -273.15) ;
        console.log(data.main.humidity);
        console.log(data.main.pressure);
        console.log(data.wind.speed );
        
        var nama = data.name;
        var country = data.sys.country;
        var temp = data.main.temp -273.15;
        var humidity = data.main.humidity;
        var pressure = data.main.pressure ;
        var wind = data.wind.speed;
        var weather = data.weather[0].main;

        // untuk gunung
        

        // temperature 
        if ( temp <=0){
            var resulttemp = " Very cold 🥶 Recommended to stay at home. The route is sliperry and dangerous."
        }
        if (temp <= 4 ){
            var resulttemp = " Cold 🧊 You're at risk for frostbite. Keep as much of skin covered as possible."
        }
        else if (temp <= 22){
            var resulttemp = " Mild 🌬️ Hiking sounds good today~"
        }
        else if (temp <= 30){
            var resulttemp = " 🔆 Ideal temperature to hiking 🔆"
        }
        else if(temp > 30 ){
            var resulttemp = " Hot 🔥 Recommended to wait until the temperature cool down."
        }
        else if (temp <= 37 ){
            var resulttemp = " Very Hot! 🥵 Recommended to limit activities & stay hydrated."
        }
        else if (temp => 37){
            var resulttemp = "Heat wave ♨️ Recommended to stay at home to avoid heat stroke."
        }

        //humidity 
        if (humidity < 31){
            var resulthumidity= " Poor low humidity levels"
        }
        else if (humidity > 30){
            var resulthumidity = " Maintain health levels"
        }
        else if (humidity >50){
            var resulthumidity =" Poor high humidity levels"
        }
        
        // pressure
        if (pressure >= 1000){
            var resultpressure =" Normal"
        }
        else if (pressure <=950 ){
            var resultpressure = " Clouds, rain & strong winds."
        }
        else{
            var resultpressure = " Dry weather."
        }


        // untuk weather 
        if (weather === 'Clouds'){
            var resultweather = " Cloudy days are common. You're good to go but stay alert to temperature! "
        }
        else if (weather === 'Clear'){
            var resultweather = " Remember to wear sunscreen and stay hydrated~"
        }
        else if(weather === 'Rain'){
            var resultweather = "Oh no :( Maybe next time? "
        }
        else if (weather === 'Snowy'){
            var resultweather = " It is freezing outside. Make sure to dress in warm clothes~"
        }
        else{
            var resultweather =  " You might having severe types of weather! STAY AT HOME!"
        }

        //wind speed 
        if (wind < 4){
            var resultwind = " Light air "
        }
        else if (wind > 3){
            var resultwind = " Light breeze"
        }

        document.getElementById("display1").innerHTML = "Place: " ;
        document.getElementById("display_1").innerHTML = nama+ (',')+ country;

        document.getElementById("display2").innerHTML = "Temperature: " + temp.toFixed(2) + "°C";
        document.getElementById("display_2").innerHTML =  (resulttemp);

        document.getElementById("display3").innerHTML= "Humidity: " + (data.main.humidity).toFixed(2) + "%";
        document.getElementById("display_3").innerHTML= (resulthumidity);

        document.getElementById("display4").innerHTML= "Pressure: " + pressure.toFixed(2) + " atm";
        document.getElementById("display_4").innerHTML= (resultpressure);

        document.getElementById("display5").innerHTML= "Weather: " + weather ;
        document.getElementById("display_5").innerHTML=  resultweather;

        document.getElementById("display6").innerHTML= "Wind: " + wind.toFixed(2) + " km/h";
        document.getElementById("display_6").innerHTML= resultwind;
    })
}
function changepage(){
    window.location.href = "crudpage.html"
  } 

    


