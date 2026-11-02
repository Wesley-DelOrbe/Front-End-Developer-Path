let homeScoreboard = document.getElementById("home-scoreboard") 

let guestScoreboard = document.getElementById("guest-scoreboard") 

//Home

let homeScore = 0

function increment1H(){
    homeScore += 1
    homeScoreboard.textContent = homeScore
}
function increment2H(){
    homeScore += 2
    homeScoreboard.textContent = homeScore
}
function increment3H(){
    homeScore += 3
    homeScoreboard.textContent = homeScore
}

//Guest

let guestScore = 0

function increment1G(){
    guestScore += 1
    guestScoreboard.textContent = guestScore
}
function increment2G(){
    guestScore += 2
    guestScoreboard.textContent = guestScore
}
function increment3G(){
    guestScore += 3
    guestScoreboard.textContent = guestScore
}

// New Game

function newGame(){
    homeScore = 0
    guestScore = 0
    homeScoreboard.textContent = homeScore
    guestScoreboard.textContent = guestScore
}