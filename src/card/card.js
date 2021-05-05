import {BaseUiComponent} from "../base-ui-component";
import {searchById} from "../allMovies";
import html from "./card.html"

class Card extends BaseUiComponent {
    constructor(html, data, id) {
        super(html, data);
        this.id = id;
    }
}

export function getCard(id) {
    return (new Card(html, searchById(id), id)).render()

}

