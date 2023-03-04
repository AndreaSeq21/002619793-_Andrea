var hour = 0;
var min = 0;
var sec = 0;

var hourHeadingValue = document.getElementById("hour");
var minHeadingValue = document.getElementById("min");
var secHeadingValue = document.getElementById("sec");

var interval;

 function timerFunc() {
    sec++;
    secHeadingValue.innerHTML = sec;
    if(sec >= 60){
        min++;
        minHeadingValue.innerHTML = min;
        sec = 0;
    } else if(min >= 60){
        hour++;
        hourHeadingValue.innerHTML = hour;
        min = 0;
    }
}

async function start() {
    interval = setInterval(timerFunc, 1000);
    await disableStartBtnFunc();
}

function stop() {
    clearInterval(interval);
    enableStartBtnFunc();
}

function reset() {
    hour = 0;
    min = 0;
    sec = 0;
    hourHeadingValue.innerHTML = hour;
    minHeadingValue.innerHTML = min;
    secHeadingValue.innerHTML = sec;
    stop();
}

function enableStartBtnFunc() {
    document.getElementById("startButton").disabled = false;
}

function disableStartBtnFunc() {
    return new Promise(resolve => {
        setTimeout(() => {
          resolve(document.getElementById("startButton").disabled = false) ;
        }, 0);
      });
}

