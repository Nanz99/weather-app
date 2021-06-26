
const API__ID = 'bdf67afeedb02678f23c2dafe1ef5550';
const searchInput = document.querySelector('#search-input');
const cityName = document.querySelector('.city-name');
const weatherState = document.querySelector('.weather-state');
const weatherIcon = document.querySelector('.weather-icon');
const temp = document.querySelector('.temp');
const sunRise = document.querySelector('.sun-rise');
const sunSet = document.querySelector('.sun-set');
const humidity = document.querySelector('.humidity');
const windSpeed = document.querySelector('.wind-speed');
const defaultValue ='--';

searchInput.addEventListener('change', (e) => {
   fetch(`https://api.openweathermap.org/data/2.5/weather?q=${e.target.value}&appid=${API__ID}&units=metric&lang=vi`)
      .then( async res => {
         const data = await res.json();
         console.log('Search Input',data);
         cityName.innerHTML = data.name || defaultValue;
         weatherState.innerHTML = data.weather[0].description || defaultValue;
         weatherIcon.setAttribute('src',`http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`);
         temp.innerHTML = Math.round(data.main.temp)  || defaultValue;
         sunRise.innerHTML = moment.unix(data.sys.sunrise).format('H:mm') || defaultValue;
         sunSet.innerHTML = moment.unix(data.sys.sunset).format('H:mm') || defaultValue;
         humidity.innerHTML = data.main.humidity || defaultValue;
         windSpeed.innerHTML = (data.wind.speed * 3.6).toFixed(2) || defaultValue;
      })
});

