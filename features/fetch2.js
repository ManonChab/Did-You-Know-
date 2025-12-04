import {arrayFav} from "./favorite2.js"

const factUrl = "https://uselessfacts.jsph.pl/api/v2/facts/random"
const todayUrl = "https://uselessfacts.jsph.pl/api/v2/facts/today"

const factPlace = document.getElementById("factLocation");
const source = document.getElementById("source");

let fact = null

async function factFetch() {
    try {

        const response = await fetch("https://uselessfacts.jsph.pl/api/v2/facts/random")

        if (!response.ok){
            throw new Error("not fetching");
        }

        const data = await response.json();
        console.log(data);

        fact = factPlace.textContent = data.text

        const getSource = source.href = data.source_url

        return fact
  
    }
    catch(error){
        console.log(error);
    }


}

function noTitle(){
    const title = document.getElementById("title")
    title.textContent = " "
}

function clickForFact(){
    const factButton = document.getElementById("newFactButton");
    factButton.addEventListener("click", factFetch);
    const title = document.getElementById("title")
    factButton.addEventListener("click", noTitle )
}

clickForFact();

async function dailyFetch() {
    try {

        const response = await fetch("https://uselessfacts.jsph.pl/api/v2/facts/today")

        if (!response.ok){
            throw new Error("not fetching");
        }

        const data = await response.json();
        console.log(data);

        fact = factPlace.textContent = data.text

        const getSource = source.href = data.source_url
  
    }
    catch(error){
        console.log(error);
    }
}

function dailyTitle(){
    const title = document.getElementById("title")
    title.textContent = "DAILY FACT"
}

function clickForTodayFact(){
    const factButton = document.getElementById("dailyFactButton");
    factButton.addEventListener("click", dailyFetch);
    const title = document.getElementById("title")
    factButton.addEventListener("click", dailyTitle )
}

clickForTodayFact();

export {factUrl, todayUrl, factFetch, dailyFetch, factPlace, source, fact}