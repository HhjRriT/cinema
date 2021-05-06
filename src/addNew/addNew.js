import {BaseUiComponent} from "../base-ui-component";
import html from "./add-new.html";
import {appHistory} from "../app-history";
import {movies} from "../allMovies";



class AddNew extends BaseUiComponent {
    constructor(html, data) {
        super(html, data);
        this.html = this.render();

    }
}

export function addNewMovie() {
    const movie = (new AddNew(html, {})).html;
    const add = movie.querySelector("button.btn.btn-primary.mr-3");
    add.setAttribute("disabled", "disabled");
    let inputs = [...movie.querySelectorAll("input"), ...movie.querySelectorAll("textarea")];
    isReady(inputs, add)
    const poster = movie.querySelector("#upload-poster");
    poster.addEventListener("change", (event) => {
        movie.querySelector(".custom-file-label").innerText = event.target.files[0].name;
    })
    const row = movie.querySelector(".MYrow");
    movie.addEventListener("click", (event) => {
        console.log(event)
        if (event.target.className === "btn btn-outline-danger" || event.target.className === "MYclose") {
            appHistory.push({pathname: '/'});
        }
        if (event.target.classList.contains("addBtn")) {
            const newRow = row.cloneNode(true);
            row.after(newRow);
            (movie.querySelectorAll(".MYrow")).forEach((el,i) => {
                (el.querySelector("button")).addEventListener(("click"), ()=> {if(i!==0)el.hidden = true})
            })
        }
        if (event.target.className === "btn btn-primary mr-3") {
            inputs = [...movie.querySelectorAll("input"), ...movie.querySelectorAll("textarea")]
            const extra = []
            const basic = []
            for (let i of inputs) {
                if (i.placeholder) {
                    extra.push(i.value)
                }else {
                    basic.push(i.value)
                }
            }
            if (basic.some(el => {
                return el === ""
            })) {
                alert("не все ввели")
            }else {

                const newMovie = {
                    id: 5,
                    name: "Гори, гори ясно 6666",
                    origin: "Brightburn",
                    year : 2019,
                    country : "USA",
                    people: [["director", " David Yarovesky"], ["Writers"," Brian Gunn","Mark Gunn"]],
                    imdb : 6.4,
                    title : "Что, если потерпевший крушение на Земле инопланетный ребенок со сверхспособностями вместо того, чтобы стать героем для человечества, окажется чем-то гораздо более зловещим?",
                    staring: ["Элизабет Бэнкс", "Дэвид Денман", "Джексон А. Данн"],
                    likes : [124,21]
                }
                movies.push(newMovie)
                appHistory.push({pathname: `/movie/${newMovie.id}`})
            }


        }

    })
    return movie;
}

function isReady (arr, btn) {
    for (let i of arr) {
        i.addEventListener("input", () => {
            console.log(i.value)
            if (arr.every((el) => {
                return el.value.length > 3
            })) {
                btn.removeAttribute("disabled")
            }
        })
    }
}