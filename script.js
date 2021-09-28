const api = {
    endpoint: "http://api.openweathermap.org/data/2.5/",
    key: "9792f094c713603c46830048bc0e283e"
}


const input = document.querySelector('#input');



input.addEventListener('keypress', enter);

function enter(e) {
    if (e.keyCode === 13) {
        getInfo(input.value);
        document.querySelector('#container_show').style.display = "block";
    }

}

async function getInfo(data) {
    const res = await fetch(`${api.endpoint}weather?q=${data}&units=metric&appID=${api.key}`);

    const result = await res.json();

    displayResult(result);

}

function displayResult(result) {
    let city = document.querySelector('#city');
    let temperature = document.querySelector('#temperature');
    let feelsLike = document.querySelector('#feelsLike');
    let conditions = document.querySelector('#conditions');
    let variation = document.querySelector('#variation');

    getTodaysDate();

    city.textContent = `${result.name},${result.sys.country}`;
    temperature.innerHTML = `${Math.round(result.main.temp)}<span>&#176C</span>`;
    feelsLike.innerHTML = `<span>Feels like:</span>${Math.round(result.main.feels_like)}<span>&#176C</span>`;
    conditions.textContent = `${result.weather[0].main}`;
    variation.innerHTML = `<span>Min:</span> ${Math.round(result.main.temp_min)}<span>&#176C</span><span> Max:</span> ${Math.round(result.main.temp_max)}<span>&#176C</span>`;
}

function getTodaysDate() {
    const myDate = new Date();
    let showDate = document.querySelector('#date');

    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    let day = days[myDate.getDay()];
    let todaysDate = myDate.getDate();
    let month = months[myDate.getMonth()];
    let year = myDate.getFullYear();


    showDate.textContent = `${day}, ${todaysDate} ${month} ${year}`;
}