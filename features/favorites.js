import { factUrl, todayUrl, factFetch, dailyFetch, factPlace, source} from "./fetch2.js"



function createFavorite() {

        const listFav = document.createElement("div");
        listFav.classList.add("list");

        const favP = document.createElement("p");
        favP.classList.add("favorite");
        favP.textContent = ("FAVORITE FACT HERE")


        const favSource = document.createElement("a");
        favSource.classList.add("favSource");
        

        const favPage = document.querySelector(".favoritePage")
        console.log(favPage);

    favPage.appendChild(listFav)
    listFav.appendChild(favP)
    listFav.appendChild(favSource)
    }


createFavorite();

function clickToCreate () {
    const favButton = document.getElementById("empty-star")
    favButton.addEventListener("click", createFavorite)
}

clickToCreate();

function clickToFavPage() {
    const favPageButton = document.getElementById("button-full-star")
}
