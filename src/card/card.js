import {BaseUiComponent} from "../base-ui-component";
import {searchById} from "../allMovies";
import html from "./card.html";
import { appHistory } from "../app-history";

class Card extends BaseUiComponent {
    constructor(html, data, id) {
        super(html, data);
        this.id = id;
    }
}

export function getCard(id) {
    const card = (new Card(html, searchById(id), id)).render()
    card.addEventListener("click", (event) => {
        event.preventDefault()
        appHistory.push({pathname: `/movie/${id}`})
    })
    return card;
}

