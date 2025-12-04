import { factUrl, todayUrl, factFetch, dailyFetch, factPlace, source, fact} from "./fetch2.js"

function createFavList() {

    const body =document.querySelector(".factFrame")

    const container = document.createElement("div");
    container.classList.add("container");
    body.appendChild(container)

    const listFav = document.createElement("ul");
    listFav.classList.add("listFav");
    container.appendChild(listFav)
}

const arrayFav = [];

function addToFav(patata) {
    const fact = document.querySelector(".factLocation");
    console.log(patata);

    const object = {
        text: patata
    };

    arrayFav.push(patata)
    console.log(object);

    console.log("added:", object);
    console.log(arrayFav);

}

async function clickToFav () {
    const favButton = document.getElementById("empty-star")
    let currentFact = await factFetch()
    favButton.addEventListener("click", addToFav(currentFact))
}

createFavList();
clickToFav();

export {arrayFav}
