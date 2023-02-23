const API_KEY = "d248ee52fe1bbd58cd48f70d02aa26bc"

navigator.geolocation.getCurrentPosition((position) => {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;

    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`;
    fetch(url).then(res => res.json().then(data => {
        const weather = document.querySelector("#weather span:first-child");
        weather.innerText = `${data.weather[0].main} / ${data.main.temp}`;

        const city = document.querySelector("#weather span:last-child");
        city.innerText = data.name;
    }));
}, () => alert("Cannot find out where you are."))


