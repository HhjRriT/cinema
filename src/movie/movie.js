import {BaseUiComponent} from "../base-ui-component";
import {searchById} from "../allMovies";
import html from "./movie.html"

class Movie extends BaseUiComponent  {
    constructor(html, data) {
        super(html, data);
    }
}

export function getMovie(id) {
    const movie = (new Movie(html, searchById(id), id));
    return movie.render()

}
