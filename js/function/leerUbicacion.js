import {leerLocalSorage} from "./localStorage.js";
import {getDate} from "./app.js";
import APIS from "../constants/contants.js";


export const log = position => {
    const { latitude, longitude } = position.coords;

    fetch(`https://api.openweathermap.org/data/2.5/weather?units=metric&lat=${latitude}&lon=${longitude}&lang=es&appid=${APIS.API_KEY}`)
        .then(response => response.json())
        .then(data => leerUbicacion(data))
        .catch(function (err){console.log("este es el error", err);})
}


function leerUbicacion(data){

    leerLocalSorage();

    let msn = '';


    let hora = new Date(data.dt*1000).getHours();

   /* const nubo = data.clouds.all;*/
    let dataAppi = {
        temp : Math.round(data.main.temp),
        city : data.name,
        desc : data.weather[0].description
    }

    let icon = data.weather[0].icon;
    const urlIcon = `https://openweathermap.org/img/wn/${icon}.png`;

    msn += `<li class="text-xs"><i class="bi bi-geo-alt-fill mr-2"></i>${dataAppi.city}</li>`
    msn += `<li class="imgLi m-auto text-xs"><span><img src="${urlIcon}" alt=""></span>${dataAppi.desc}</li>`
    msn += `<li class="m-auto text-xs"><span></span>${dataAppi.temp} °C</li>`
    msn += `<li class="m-auto text-xs"><span></span>${getDate()}</li>`
    APIS.resultDivHeader.innerHTML = `<ul class="ulHeader">${msn}</ul>`;

    if (hora >= 6 && hora <= 18){
        APIS.main.classList.remove("noche");
        APIS.main.classList.add("dia");
    } else {
        APIS.main.classList.remove("dia");
        APIS.main.classList.add("noche");
    }

}