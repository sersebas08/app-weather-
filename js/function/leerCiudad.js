import APIS from "../constants/contants.js";
import {estraerLocalStorage} from "./localStorage.js";


export function buscarClima(data) {
    const ciudad = APIS.inputElement.value;
    fetch(`https://api.openweathermap.org/data/2.5/weather?units=metric&q=${ciudad}&lang=es&appid=${APIS.API_KEY}&q=${data}&`)
        .then(function(response){
            return response.json();})
        .then(function (data){
            leerCiudad(data);
            estraerLocalStorage(data);
            APIS.inputElement.value = '';
            console.log('localstorage: ', data);
        })
        .catch(function (err){
            console.log("este es el error", err);})
}

export function leerCiudad(data){

    let icon = data.weather[0].icon;
    const urlIcon = `https://openweathermap.org/img/wn/${icon}.png`;
    let horaLocal = new Date(data.dt*1000).toLocaleString("sp-SP", {
        timeStyle: "short",
        dateStyle: "long"
    });
    let dataAppi = {
        temp:  Math.round(data.main.temp),
        tempMaxima: Math.round(data.main.temp_max),
        tempMinima : Math.round(data.main.temp_min),
        description: data.weather[0].description,
        humidity: data.main.humidity,
        speed: data.wind.speed,
        pressure: data.main.pressure,
        ciudad: data.name,
        pais: data.sys.country
    };

    APIS.resultDiv.innerHTML = `<div class="divUbica opacity-80 hover:shadow-xl max-w-sm p-3">
                                <p>${dataAppi.ciudad}</p>
                                <p class="pais">${dataAppi.pais}</p>
                                <div class="divTemp">
                                    <p class="temp">${dataAppi.temp}</p>
                                    <p class="Cel">°C</p>
                                    <div>
                                        <p>Max: ${dataAppi.tempMaxima}°C / Min: ${dataAppi.tempMinima}°C</p>
                                    </div>
                                </div>
                                <div class="divDesc mt-4 mb-4">
                                    <img src="${urlIcon}" alt="iconos_del_tiempo_actual">
                                    <p class="text-center"><span>${dataAppi.description}</span></p>
                                </div>
                                <div class="divState mt-4">
                                    <p>Viento: ${dataAppi.speed} m/s</p>
                                    <p>Humedad:  ${dataAppi.humidity} %</p>
                                    <p>Presion:  ${dataAppi.pressure} hPa</p>
                                </div>
                                <p class="divUbica__p m-auto text-center w-full text-slate-600 pt-2 border-t-2 border-slate-500"><span class="mr-2 ">Ultima actualizacion</span>${horaLocal}</p>
                                
                                  <!--<p>${APIS.video}</p>-->
                            </div>`;

}