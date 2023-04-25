const Timer = document.getElementById("stopwatch");
var IMG = document.getElementById("changeImg");
const Head = document.getElementById("Heading");

var hr = 0;
var min = 0;
var sec = 0;
// var mlSec = 0;
var stoptime = true;

function startTimer() {
    if (stoptime == true) {
        stoptime = false;
        Head.style.display = "none";
        IMG.setAttribute("src", "images/unicorn-galloping-2-2018.gif");
        timerCycle();
    }
}

function stopTimer() {
    if (stoptime == false) {
        stoptime = true;
        Head.style.display = "block";
        Head.innerHTML = "Reset To Karle Bhai!!!!";
        IMG.setAttribute("src", "");
        IMG.setAttribute("width", "12%")
    }
}



function timerCycle() {
    if (stoptime == false) {
        // mlSec = parseInt(mlSec)
        sec = parseInt(sec);
        min = parseInt(min);
        hr = parseInt(hr);

        // mlSec++

        // if(mlSec == 1000){
        //     sec = sec + 1;
        //     mlSec = 0
        // }

        sec++
        if (sec == 60) {
            min = min + 1;
            sec = 0;
        }
        if (min == 60) {
            hr = hr + 1;
            min = 0;
            sec = 0;
        }

        // if (mlSec < 10) {
        //     mlSec = "0" + mlSec;
        // }
        if (sec < 10) {
            sec = "0" + sec;
        }
        if (min < 10) {
            min = "0" + min;
        }
        if (hr < 10) {
            hr = "0" + hr;
        }


        Timer.innerHTML = hr + ":" + min + ":" + sec;

        setTimeout("timerCycle()", 1000);
    }
}

function resetTimer() {
    Head.style.display = "block";
    Head.innerHTML = "STOP WATCH";
    Timer.innerHTML = "00:00:00";
    stoptime = true;
    hr = 0;
    sec = 0;
    min = 0;
    // mlSec = 0;
}