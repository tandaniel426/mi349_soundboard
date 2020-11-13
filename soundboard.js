function playHorn () {
    document.getElementById("horn-sound").play();
}

function playAlarm () {
    document.getElementById("alarm-sound").play();
}

function playBell() {
    document.getElementById("bell-sound").play();
}

function playCheering () {
    document.getElementById("cheering-sound").play();
}

let hornButton = document.getElementById("horn");
let alarmButton = document.getElementById("alarm");
let bellButton = document.getElementById("bell");
let cheeringButton = document.getElementById("cheering");

hornButton.onmouseenter = function () {
    playHorn();
}

hornButton.onclick = function () {
    playHorn();
}

alarmButton.onmouseenter = function () {
    playAlarm();
}

alarmButton.onclick = function () {
    playAlarm();
}

bellButton.onmouseenter = function () {
    playBell();
}

bellButton.onclick = function () {
    playBell();
}

cheeringButton.onmouseenter = function () {
    playCheering();
}

cheeringButton.onclick = function () {
    playCheering();
}