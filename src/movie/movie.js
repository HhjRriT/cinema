import {BaseUiComponent} from "../base-ui-component";
import {searchById} from "../allMovies";
import html from "./movie.html"

class Movie extends BaseUiComponent {
    constructor(html, data, id) {
        super(html, data);
        this.id = id;
        this.name = data.name;
        this.title = data.title;
        this.imdb = data.imdb;
    }
}

export function getMovie(id) {
    return (new Movie(html, searchById(id), id))

}



