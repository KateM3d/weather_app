const api = {
    endpoint: "http://api.openweathermap.org/data/2.5/",
    key: "9792f094c713603c46830048bc0e283e"
}

const input = document.querySelector('#input');

input.addEventListener('keypress', enter);

function enter(e) {
    if (e.keyCode === 13) {
        getInfo(input.value);

    }
}

async function getInfo(data) {
    const res = await fetch(`${api.endpoint}weather?q=${data}&units=metric&appID=${api.key}`);

    const result = await res.json();
    console.log(result);
}