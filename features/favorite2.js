import { factUrl, todayUrl, factFetch, dailyFetch, factPlace, source, fact} from "./fetch2.js"

function createFavList() {

    const body =document.querySelector(".factFrame")

    const container = document.createElement("div");
    container.classList.add("container");
    body.appendChild(container)

    const listFav = document.createElement("ul");
    listFav.classList.add("listFav");
    container.appendChild(listFav)

    console.log("listFav created", listFav);
}

function needFavList () {
    let listFav = document.querySelector(".listFav");
    if (!listFav){
        createFavList();
    }
}

needFavList();

const arrayFav = [];

function addToFav(fact) {
    const listFav = document.querySelector(".factLocation");

    const object = {
        text: factPlace.textContent}

    arrayFav.push(object)

    console.log("added:", object);
    console.log(arrayFav);
}

async function clickToFav () {
    const favButton = document.getElementById("empty-star")
    let fact = await factFetch();
    const factText = fact.text || fact;
    favButton.addEventListener("click", () => addToFav(factText))
}

clickToFav();

export {arrayFav}
