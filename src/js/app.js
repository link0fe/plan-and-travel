const button = document.querySelector('register-submit');
const name = document.querySelector('register-name');
const surname = document.querySelector('register-surname');
const login = document.querySelector('register-login');
const email = document.querySelector('register-email');
const password = document.querySelector('register-password');
const rePassword = document.querySelector('register-repassword');


document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault();
    console.log(event);
    const registerData = { 
        name: document.getElementsByClassName('register-name')[0].value,
        surname: document.getElementsByClassName('register-surname')[0].value,
        login: document.getElementsByClassName('register-login')[0].value,
        email: document.getElementsByClassName('register-email')[0].value,
        password: document.getElementsByClassName('register-password')[0].value,
        rePassword: document.getElementsByClassName('register-repassword')[0].value

        
    };
    console.log(registerData)
});

var map = L.map('map').setView([51.505, -0.09], 13);
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

// button.addEventListener("click", showConsole);
