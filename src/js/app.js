import { FormHandler } from './formHandler.js';

document.addEventListener('DOMContentLoaded', () => {
    const registrationForm = new FormHandler('.registrationForm');
    console.log(registrationForm);
});


var map = L.map('map').setView([51.505, -0.09], 13);
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

// button.addEventListener("click", showConsole);
