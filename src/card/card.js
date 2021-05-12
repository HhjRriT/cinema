import {BaseUiComponent} from "../base-ui-component";
import {searchById} from "../allMovies";
import html from "./card.html";
import { appHistory } from "../app-history";
import {searchByName} from "../allMovies";

const noResult = []
noResult.push(document.createElement("div"))
noResult[0].innerText = "no result"

class Card extends BaseUiComponent {
    constructor(html, data, id) {
        super(html, data);
        this.id = id;
    }
}

export function getCard(id) {
    const result = searchById(id)
    if (!result) return false
    const card = (new Card(html, result, id)).render()
    card.addEventListener("click", (event) => {
        event.preventDefault()
        appHistory.push({pathname: `/movie/${id}`})
    })
    return card;
}


export function getCardByName(name) {
    const movies = searchByName(name);
    if (!movies[0]) return noResult;
    for (let i = 0; i < movies.length; i ++) {
        const id = movies[i].id;
        movies[i] = (new Card(html, movies[i], id)).render()
        movies[i].addEventListener("click", (event) => {
            event.preventDefault()
            appHistory.push({pathname: `/movie/${id}`})
        })
    }
    console.log(movies)
    return movies;
}

