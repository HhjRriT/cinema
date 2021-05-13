import {BaseUiComponent} from "../base-ui-component";
import {searchById, loadMovies, updateMovie} from "../allMovies";
import html from "./movie.html"

class Movie extends BaseUiComponent {
    constructor(html, data, id) {
        super(html, data);
        this.html = this.render()
        this.id = id
    }

    likes() {
        const btns = this.html.querySelector(".text-center")
        const lukesNumber =btns.querySelectorAll("span")
        const likePlus = (btns.querySelectorAll("button"))[0]
        const likeMinus = (btns.querySelectorAll("button"))[1]
        likePlus.addEventListener("click", (event)=>{
            const movie = searchById(this.id)
            movie.likes[0] +=1
            updateMovie(movie)
            lukesNumber[0].innerText = +lukesNumber[0].innerText + 1
        })
        likeMinus.addEventListener("click", (event)=>{
            const movie = searchById(this.id)
            movie.likes[1] +=1
            updateMovie(movie)
            lukesNumber[1].innerText = +lukesNumber[1].innerText + 1
        })
    }
}

export function getMovieById(id) {
    const movie = (new Movie(html, searchById(id), id));
    movie.likes()
    return movie.html
}
