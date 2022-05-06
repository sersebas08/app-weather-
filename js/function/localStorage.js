import {leerCiudad} from "./leerCiudad.js";
import APIS from "../constants/contants.js";

export function estraerLocalStorage (data){
    localStorage.setItem("ciudad" , JSON.stringify(data));
}
export function leerLocalSorage(){
    if(localStorage.getItem('ciudad')){
        const apis = JSON.parse(localStorage.getItem('ciudad'));
        APIS.buscarCiudad.classList.remove("hidden");
        leerCiudad(apis);
        if(apis){
            APIS.inicio.classList.add("hidden");
        } else {
            console.log('No hay ciudad o pais en localStorage');
        }
    }else {
        console.log('No hay ciudad o pais en localStorage');

    }
}

