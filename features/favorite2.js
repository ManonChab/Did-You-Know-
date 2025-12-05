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

    console.log("added:", object);
    console.log(arrayFav);

}

async function clickToFav () {
    const favButton = document.getElementById("full-star")
    let fact = await factFetch();
    const factText = fact.text || fact;
    favButton.addEventListener("click", () => addToFav(factPlace.textContent))
}

clickToFav();

async function toggleFavList() {

        const parent = document.querySelector(".listFav")
        parent.innerHTML = "";

        arrayFav.forEach(fact => {

        const listItem = document.createElement("li");
        listItem.textContent = fact.text;
        listItem.classList.add("favFact")

        if (parent)
        parent.appendChild(listItem);

        const currentContent = document.querySelector("#factLocation");
        const listFav = document.querySelector(".listFav");
        const other = document.querySelector(".elements");

         if (arrayFav.length >= 1 && listItem) {
            listItem.style.display = "block";
            currentContent.style.display = "none";
            other.style.display = "none";
         }

         if (arrayFav.length ==0){
            currentContent.style.display = "block";
         }
})};


function btn () {
    const favButton = document.getElementById("button-full-star");
    favButton.addEventListener("click", toggleFavList)
}

btn();

export {arrayFav}
