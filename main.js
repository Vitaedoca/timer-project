let sec = 0
let min = 0
let hr = 0

let interval

let timer = document.querySelector(".watch")

function twoDigits(digit) {
    if(digit < 10) {
        return ("0" + digit)
    } else {
        return digit
    }
}
function start() {
    watch()
    interval = setInterval(watch, 1000);
}
function pause() {
    clearInterval(interval)
}
function stop() {
    clearInterval(interval)
    sec = 0;
    min = 0;
    hr = 0;
    timer.innerHTML = `00 : 00 : 00`;
}
function watch(){
    sec++;
    if(sec == 60) {
        min++;
        sec = 0;
    }else if(min == 60) {
        hr++;
        min = 0;
        sec = 0;
    }
    timer.innerHTML = `${twoDigits(hr)} : ${twoDigits(min)} : ${twoDigits(sec)}`;
}