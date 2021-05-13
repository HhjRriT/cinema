import {BaseUiComponent} from "../base-ui-component";
import {deleteMovieById, searchById, searchByName} from "../allMovies";
import html from "./card.html";
import {appHistory} from "../app-history";
import {AddNew} from "../addNew/addNew";

const noResult = []
noResult.push(document.createElement("div"))
noResult[0].innerText = "no result"

class Card extends BaseUiComponent {
    constructor(html, data, id) {
        super(html, data);
        this.id = id;
        this.html = this.render();
        this.removeBtn = this.findButtons()[1]
        this.changeBtn = this.findButtons()[2]
        this.link = this.goToMovie()

    }
    findButtons () {
        const buttons = this.html.querySelectorAll("button")
        buttons[1].addEventListener("click", this.removeMovie.bind(this))
        buttons[0].addEventListener("click", this.changeMovie())
        return buttons
    }

    removeMovie() {
        if (confirm("You want to del this moovie?")) {
            deleteMovieById(this.id)
        }
    }

    goToMovie () {
        this.html.querySelector("a").addEventListener("click", (event) => {
            event.preventDefault()
            appHistory.push({pathname: `/movie/${this.id}`})
        })
    }
    changeMovie () {
        // const inputs = (new AddNew({},{})).getAllInputs.apply(this)
        console.log(inputs)
    }
}

export function getCard(id) {
    const result = searchById(id)
    if (!result) return false
    return (new Card(html, result, id)).html;
}

export function getCardByName(name) {
    const movies = searchByName(name);
    if (!movies[0]) return noResult;
    for (let i = 0; i < movies.length; i++) {
        const id = movies[i].id;
        movies[i] = (new Card(html, movies[i], id)).render()
        movies[i].addEventListener("click", (event) => {
            event.preventDefault();
            appHistory.push({pathname: `/movie/${id}`});
        })
    }
    return movies;
}

