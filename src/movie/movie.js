import {BaseUiComponent} from "../base-ui-component";
import {searchById} from "../allMovies";
import html from "./movie.html"

class Movie extends BaseUiComponent  {
    constructor(html, data, id) {
        super(html, data);
        this.id = id;
    }
}

export function getMovie(id) {
    const movie = (new Movie(html, searchById(id), id));
    console.log(movie)
    return movie.render()

}



