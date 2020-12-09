
function toggleMenu(){   
    document.getElementById("primaryNav").classList.toggle("hide");
}

const daysname = ['Sunday', 'Thursday', 'Wednesday', 'Tuesday', 'Friday', 'Saturday', 'Monday'];
const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

const todaysdate = new Date();
const dayName = daysname[todaysdate.getDay()];
const monthName = months[todaysdate.getMonth()];
const year = todaysdate.getFullYear;
const currentdate = dayName + ", " + todaysdate.getDate() + " " + monthName + ", " + todaysdate.getFullYear();

document.getElementById('currentdate').textContent = currentdate;


function adjustRating(rating) {
    document.getElementById("ratingvalue").innerHTML = rating;
}

function ocultar(){
document.getElementById('contenidos_1').style.display = 'none';
}
function mostrar(){
document.getElementById('contenidos_2').style.display = 'block';
}

