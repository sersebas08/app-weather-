
const API_KEY = 'e24e9c3bdaacbd6fef27b5084cba3013';
const button = document.querySelector('.sendButton');
const resultDiv = document.querySelector('.main');
const resultDivHeader = document.querySelector('.headers');
const main = document.querySelector('#main');
const inputElement = document.querySelector('.search');
const validar = document.querySelector('.validar');
const buscarCiudad = document.querySelector('.buscarCiudad');
const inicio = document.querySelector('.inicio');
const video = '<iframe width="360" height="115" src="https://www.youtube.com/embed/ykGmIVLaItg" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';

const APIS = {
    API_KEY,
    button,
    resultDiv,
    resultDivHeader,
    main,
    video,
    inputElement,
    validar,
    buscarCiudad,
    inicio
};

export default APIS;