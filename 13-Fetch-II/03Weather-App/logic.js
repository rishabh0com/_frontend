let APIkey = "aa2338a405271c2dbb7943eb7c748def";
let city = document.querySelector("#inputBox");
// let apiURL = ;
// let display_weather = document.querySelector("#display_weather");
let map = document.querySelector("#map");
//map api

// weather detail function
async function fetchWeather (){

    try {
        
        //for temprature detail
        let response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city.value}&units=metric&appid=${APIkey}`);
        let data = await response.json();
        console.log(data)
        document.getElementById("heading").style.display = 'none'
        //catch city temp detail from data
        const temp = data.main.temp;
        const temp_min = data.main.temp_min;
        const temp_max = data.main.temp_max;
        const pressure = data.main.pressure;
        const visibility = data.visibility;
        const city_name = data.name;
        const sunrise = new Date(data.sys.sunrise * 1000).toLocaleTimeString();
        const sunset = new Date(data.sys.sunset * 1000).toLocaleTimeString();
        const wind = data.wind.speed;
        const clouds = data.clouds.all;
        const icon_src = `http://openweathermap.org/img/wn/${data.weather[0].icon}.png`;
        
        //display map in map div
        map.innerHTML =   `<div class="mapouter"><div class="gmap_canvas"><iframe id="gmap_canvas" src="https://maps.google.com/maps?q=${city_name}&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe><a href="https://embedgooglemap.net/124/"></a><br><style>.mapouter{text-align:right;}</style><a href="https://www.embedgooglemap.net"></a><style>.gmap_canvas {overflow:hidden;background:none!important;}</style></div></div>`
        
        // temp detail innerhtml
        document.getElementById("display_weather").innerHTML = `
        <div id="name_icon_sun">
        <div id="name_temp">
            <div class="n_t" id="name" style="color:white">${city_name}</div>
            <div class="n_t" id="temprature" style="color: yellow;">${temp} °C</div>
            <img class="n_t" id="icon" src="${icon_src}" alt="Icon">     
        </div>
        <div id="ss">
            <div class="ss">Sunrise : <span>${sunrise}</span></div>
            <div class="ss">Sunset : <span>${sunset}</span></div>
        </div>
        </div>
        <div id="weather_detail">
        <div class="detail_divs" id="temp_m">
            <div class="actual_detail_divs" >Temprature Min : <span id="temp_min">${temp_min} °C</span></div>
            <div class="actual_detail_divs" >Temprature Max : <span id="temp_max">${temp_max} °C</span></div>
        </div>
        <div class="detail_divs" id="p_v">
            <div class="actual_detail_divs" >Pressure : <span id="pressure">${pressure}</span></div>
            <div class="actual_detail_divs" >Visibility : <span id="visibility">${visibility}</span></div>
        </div>
        <div class="detail_divs" id="w_c">
            <div class="actual_detail_divs" >Wind : <span id="wind">${wind}</span></div>
            <div class="actual_detail_divs" >Clouds : <span id="clouds">${clouds}</span> </div>
        </div>
        </div>
        
        `

        // display_weather.innerHTML = output
    } catch (error) {
        console.error(error);
    }
}

// forcast detail function
async function fetchForcast(){
    try {
        let response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city.value}&appid=${APIkey}&units=metric`)
        let data = await response.json()
        
        const dailyFor = data.list.filter((item,index)=> index % 8 == 0)
        console.log(dailyFor)
        dailyFor.forEach(ele => {
            document.querySelector("#weather_forcast").innerHTML += `
            <div class="forcast_divs">
            <div id="icon">
                <img src="${`http://openweathermap.org/img/wn/${ele.weather[0].icon}.png`}" alt="">
            </div>
            <div id="tempr">${ele.main.temp} °C</div>
            <div id="date">${new Date(ele.dt_txt).toLocaleDateString()}</div>
        </div>
`
        });
    } catch (error) {
        console.error(error)
    }
}



document.querySelector("#Searchbtn").addEventListener("click",()=>{
    document.querySelector("#weather_forcast").innerHTML = " ";
    document.getElementById("display_weather").innerHTML = " ";
    fetchWeather();
    fetchForcast();
    
})



