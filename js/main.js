var weather3Days = [];
   function getForcast() {
    var weather3D = new XMLHttpRequest();
    weather3D.open('GET', 'http://api.weatherapi.com/v1/forecast.json?key=27dc94248dc64ae3857135911240101&q=lond&days=3');
    weather3D.send();
    weather3D.addEventListener('loadend', function () {
        if (weather3D.status == 200) {
         weather3Days = JSON.parse(weather3D.response).forecast.forecastday
            console.log(weather3Days);
            displayAllWeather()
        
        }
        else {
            console.log('error');
        }
    })
   }
getForcast(function() {
displayAllWeather()
});

var allCities=[];    

function getSearch(searchInput) {
    var search  = new XMLHttpRequest();
    search.open('GET', `http://api.weatherapi.com/v1/forecast.json?key=27dc94248dc64ae3857135911240101&q=${searchInput}&days=3`);
    search.send();
    search.addEventListener('loadend', function () {
        if (search.status == 200) {
             allCities = JSON.parse(search.response);
            console.log(allCities);
            console.log('hii');
            
            displayAllWeather();
            
        }
        else {
            console.log('error');
        }
    })
}

document.querySelector(".searchInput").addEventListener('keyup',function(e) {
    getSearch(e.target.value)
    displayAllWeather()
});





function displayAllWeather() {
    var cartoona = '';
    // for (let i = 0; i < weather3Days.length; i++) {
    cartoona += `    
    <div class="col-lg-4">
        <div class="card f-card">
            <div class="header d-flex justify-content-between">
                
                <div class="day-num">${weather3Days[0].date}</div>
            </div>
            <div class="body ps-3">
                <p class="city  py-3 name">cairo</p>
                <div class='d-flex '>
                <p class="temp text-white lon">${weather3Days[0].day.avgtemp_c}ºc</p>
                <img src='https://${weather3Days[0].day.condition.icon} 'class="w-100 icon-status"></img>
                </div>
                <div >
                    <p class="temp-status text-info">${weather3Days[0].day.condition.text}</p>
                </div>
            </div>
            <div class="footer"></div>
        </div>
    </div>
    <div class="col-lg-4">
                    <div class="card ">
                        <div class=" header d-flex justify-content-between">
                            <p class="day-name w-50 m-auto ">${weather3Days[1].date}</p>
                        </div>
                        <div class="body m-5 flex-wrap ps-3 d-flex justify-content-center align-items-center text-center">
                        <img src='https://${weather3Days[1].day.condition.icon} 'class=" icon-status"></img>
                            <p class="temp1 text-white w-100 mb-1 fa-2x">${weather3Days[1].day.maxtemp_c}ºc</p>
                            <p class="temp2  w-100">${weather3Days[1].day.mintemp_c}º</p>
                            <p class="temp-status text-info w-100">${weather3Days[1].day.condition.text}</p>
                            
                        </div>
                        <div class="footer"></div>
                    </div>
    </div>
                <div class="col-lg-4">
                    <div class="card f-card">
                        <div class=" header d-flex justify-content-between">
                            <p class="day-name w-50 m-auto ">${weather3Days[2].date}</p>
                        </div>
                        <div class="body m-5 flex-wrap ps-3 d-flex justify-content-center align-items-center text-center">
                        <img src='https://${weather3Days[2].day.condition.icon} 'class=" icon-status"></img>
                            <p class="temp1 text-white w-100 mb-1 fa-2x">${weather3Days[2].day.maxtemp_c}ºc</p>
                            <p class="temp2  w-100">${weather3Days[2].day.mintemp_c}º</p>
                            <p class="temp-status text-info w-100">${weather3Days[2].day.condition.text}</p>
                            
                        </div>
                        <div class="footer"></div>
                    </div>
                </div>
    `
    document.querySelector('.row').innerHTML = cartoona;
    }



