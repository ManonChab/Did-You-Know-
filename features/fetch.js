const factUrl = "https://uselessfacts.jsph.pl/api/v2/facts/random"
const todayUrl = "https://uselessfacts.jsph.pl/api/v2/facts/today"

const factPlace = document.getElementById("factLocation");
const source = document.getElementById("source");

function factFetch() {
    fetch(factUrl)
        .then((data) =>  data.json())
        .then(result => {
            console.log(result);
            result.text
        })
        .then((fact) => {factPlace.textContent = fact.text })
        .then((link) => {source.ATTRIBUTE_NODE = link.source_url})
}

function clickForFact(){
    const factButton = document.getElementById("newFactButton");
    factButton.addEventListener("click", factFetch);
}

clickForFact();

function linkToSource (){
    source.getAttribute("href")
    source.setAttribute("href", link.source_url)
}

linkToSource();


function dailyFetch() {
    fetch(todayUrl)
        .then((data) => data.json())
        .then((fact) => {factPlace.textContent = fact.text})
        .then((link) => {source.ATTRIBUTE_NODE = link.source_url })
}

function clickForTodayFact(){
    const factButton = document.getElementById("dailyFactButton");
    factButton.addEventListener("click", dailyFetch);
}

clickForTodayFact();


export {factUrl, todayUrl}

