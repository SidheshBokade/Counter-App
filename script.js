//ID of all particular days,hours,mins,seconds 
const daysEl      = document.getElementById("days");
const hoursEl     = document.getElementById("hours");
const minsEl      = document.getElementById("mins");
const secondsEl   = document.getElementById("seconds");

const newYears = "6 oct 2021"; //days of particular ocaasion 

//function take incharge of countdown 
function countdown() {
    const newYearsDate = new Date(newYears);
    const currentDate  = new Date();

    // General formula 
    const totalSeconds = (newYearsDate - currentDate) / 1000;

    // deriative formulas for the each id's :=>
    const days         = Math.floor(totalSeconds / 3600 / 24); //1day   
    const hours        = Math.floor(totalSeconds / 3600) % 24; //1hr
    const mins         = Math.floor(totalSeconds / 60) % 60;//1min
    const seconds      = Math.floor(totalSeconds) % 60;//1sec

    daysEl.innerHTML         = days;
    hoursEl.innerHTML        = formatTime(hours);
    minsEl.innerHTML         = formatTime(mins);
    secondsEl.innerHTML      = formatTime(seconds);
}

function formatTime(time) {
    return time < 10 ? `0${time}` : time; 
}

// initial call
countdown();

setInterval(countdown, 1000);