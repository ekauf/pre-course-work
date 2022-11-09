// if a name, is a coaches name, log "It's a coach"
const coachName = "Andy";
if (coachName == "Andy") {
    console.log("it's a coach")
}
// if a greeting, is bonjour, log "comment ca va"
const greeting = "sveiki"
if (greeting == "bonjour") {
    console.log("comment ca va")
}

// if a score, reaches ten, log "you won the game"
const score = "10"
if (score == "10") {
    console.log("you won the game")    
}

// if age, is greater than 65, "time to retire"
let age = 50;
if (age >= 65) {
    console.log("time to retire")
}

// if has covid, log "time to isolate", else "keep social distancing"
const hasCovid = false;
const isShielding = true;
if (hasCovid || isShielding) {
    console.log("time to isolate")
} else {
    console.log("keep social distancing")
}

// if age, greater than 18, and is British, "you can vote in the next election"
const isBritish = true;
age = 18
if (age >17 && isBritish) {
    console.log("you can vote in the next election")
}