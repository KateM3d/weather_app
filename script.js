const api = {
    endpoint: "http://api.openweathermap.org/data/2.5/",
    key: ""
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