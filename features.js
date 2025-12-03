const factUrl = "https://uselessfacts.jsph.pl/api/v2/facts/random"
const todayUrl = "https://uselessfacts.jsph.pl/api/v2/facts/today"

const newFact = document.getElementById("factLocation");
const dailyFact = document.getElementById("factLocation");

function factFetch() {
    fetch(factUrl)
        .then((data) => data.json())
        .then((fact) => {
            newFact.textContent = fact.text
        })
}

function clickForFact(){
    const factButton = document.getElementById("newFactButton");
    factButton.addEventListener("click", factFetch);
}

clickForFact();


function dailyFetch() {
    fetch(todayUrl)
        .then((data) => data.json())
        .then((fact) => {
            dailyFact.textContent = fact.text
        })
}

function clickForTodayFact(){
    const factButton = document.getElementById("dailyFactButton");
    factButton.addEventListener("click", dailyFetch);
}

clickForTodayFact();


