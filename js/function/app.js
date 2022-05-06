
import APIS from "../constants/contants.js";
import {log} from "./leerUbicacion.js";
import {buscarClima} from "./leerCiudad.js";


document.addEventListener('DOMContentLoaded', (e) => {
    navigator.geolocation.getCurrentPosition(log);

})

export const getDate = () => {
    let date = new Date();
    return `${date.getDate()}-${( '0' + (date.getMonth() + 1)).slice(-2)}-${date.getFullYear()}`;
}

APIS.button.addEventListener("click", (e) => {
    e.preventDefault();
    const valorDeInput = APIS.inputElement.value;

    if (valorDeInput === ''){
        setTimeout(function vacio(){
            console.log('falta la ciudad o pais');
            /*APIS.inputElement.style.border = '1px solid aqua';*/
            APIS.validar.innerHTML = `<p class="valid">Escribe ciudad o pais</p>`;
            /*   showSpinner();*/
        }, 2000);
        APIS.validar.innerHTML = `<p class="valid">cargando ...</p>`;
    }else {
        /*APIS.inputElement.style.border = '';*/
        APIS.validar.innerHTML = '';
        buscarClima(valorDeInput);
    }



});
const btn = document.querySelector('.btnInicio');


btn.addEventListener('click', () => {
    APIS.buscarCiudad.classList.remove("hidden");
    APIS.inicio.classList.add("inicios");
})

