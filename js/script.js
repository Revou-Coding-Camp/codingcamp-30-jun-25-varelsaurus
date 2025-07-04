const sesiwelcome = document.getElementById('welcome-section');
const gambarawal = document.getElementById('gambarwelcome');
const salam = document.getElementById('salaman');

gambarawal.onload = function() {
    sesiwelcome.style.visibility = 'visible';
} 

window.onload = function() {
    let namauser = prompt('Siapa nama kamu?');
    salam.textContent = `Hi ${namauser}, Welcome To Website`;
}