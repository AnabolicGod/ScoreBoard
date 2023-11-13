let scoreHome = document.getElementById("score-home")

let score1 = 0

function home1() {
    score1 += 1
    scoreHome.innerText = score1
}

function home2() {
    score1 += 2
    scoreHome.innerText = score1
}

function home3() {
    score1+= 3
    scoreHome.innerText = score1
}

let scoreGuest = document.getElementById("score-guest")

score2 = 0

function guest1() {
    score2 += 1
    scoreGuest.innerText = score2
}

function guest2() {
    score2 += 2
    scoreGuest.innerText = score2
}

function guest3() {
    score2 += 3
    scoreGuest.innerText = score2
}

function gameReset() {
    score1 = 0
    scoreHome.textContent = score1
    score2 = 0
    scoreGuest.textContent = score2
}

const startingMinutes = 12;
let time = startingMinutes * 60;

const countdownEl = document.getElementById("countdown");

setInterval(updateCountdown, 1000);

function updateCountdown() {
    const minutes = Math.floor(time / 60);
    let seconds = time % 60;
    seconds = seconds < 10 ? '0' + seconds : seconds;
    countdownEl.innerText = `${minutes}:${seconds}`;
    time--;
}

//highlight the leader. If homescore bigger than awayscore then HOME lights up or something//

