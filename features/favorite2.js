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


    const object = {
        text: factPlace.textContent}

    arrayFav.push(object)

    const listItem = document.createElement("li");
    listItem.textContent = object.text;
    listItem.classList.add("favFact")

    console.log("added:", object);
    console.log(arrayFav);
    console.log(listItem);
}

async function clickToFav () {
    const favButton = document.getElementById("full-star")
    let fact = await factFetch();
    const factText = fact.text || fact;
    favButton.addEventListener("click", () => addToFav(factPlace.textContent))
}

clickToFav();

async function toggleFavList() {
    const body = document.querySelector(".factFrame");
    const favButton = document.getElementById("button-full-star");

    favButton.addEventListener("click", () => {
        const currentContent = document.querySelector(".factFrame");
        const listFav = document.querySelector(".listFav");
        const listItem = document.querySelector(".favFact")

         if (arrayFav.length >= 1) {
            currentContent.style.display = "none";
            listItem.style.display = "block";
         }

    });
}

toggleFavList();

export {arrayFav}
