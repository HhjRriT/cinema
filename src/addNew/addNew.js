import {BaseUiComponent} from "../base-ui-component";
import html from "./add-new.html";
import {appHistory} from "../app-history";
import {saveNew} from "../allMovies";

function getPoster(movie) {
    const poster = movie.querySelector("#upload-poster");
    poster.addEventListener("change", (event) => {
        movie.querySelector(".custom-file-label").innerText = event.target.files[0].name;
    })
    return poster
}

export function plusRow(movie, count) {
    const row = movie.querySelector(".MYrow");
    const btn = movie.querySelector(".addBtn");
    btn.addEventListener("click", () => {
        const newRow = row.cloneNode(true)
        newRow.querySelectorAll("input").forEach((el) => el.value = "")
        newRow.querySelector("button").addEventListener("click", () => {
            newRow.style.display = "none";
        })
        row.parentNode.appendChild(newRow);
    })
    if (count) {
        for (let i = 0; i < count; i++) {
            const newRow = row.cloneNode(true)
            newRow.querySelectorAll("input").forEach((el) => el.value = "")
            newRow.querySelector("button").addEventListener("click", () => {
                newRow.style.display = "none";
            })
            row.parentNode.appendChild(newRow)
        }
    }
    return btn
}

export class AddNew extends BaseUiComponent {
    static getAllInputs(html) {
        const wrapper = document.body.querySelector(".modal-body") || html.querySelector(".modal-body")
        const inputs = [...wrapper.querySelectorAll("input"), ...wrapper.querySelectorAll("textarea")]
        const importantInpust = inputs.filter((i) => (!i.parentElement.parentElement.classList.contains("MYrow")))
        const btn = html.querySelector("button.btn.btn-primary.mr-3");
        importantInpust.forEach((el) => {
            el.addEventListener("input", () => {
                btn.disabled = true
                if (importantInpust.every((input) => input.value.length > 2)) btn.removeAttribute("disabled")
            })
        })
        return inputs
    }

    constructor(html, data, rows) {
        super(html, data);
        this.html = this.render();
        this.rows = rows
        this.inputs = AddNew.getAllInputs(this.html)
        this.plusRowBtn = plusRow(this.html, this.rows);
        this.addBtn = this.addBtn();
        this.poster = getPoster(this.html);
    }

    addBtn() {
        const btn = this.html.querySelector("button.btn.btn-primary.mr-3");
        btn.disabled = true;
        btn.addEventListener("click", event => {
            const inputs = AddNew.getAllInputs(this.html)
            const data = {}
            data.extra = []
            for (let i = 0; i < inputs.length; i++) {
                if (inputs[i].classList.contains("stars")) {
                    console.log("yes")
                    data.stars = inputs[i].value
                } else if (inputs[i].parentElement.innerText) {
                    data[inputs[i].parentElement.innerText] = inputs[i].value
                } else if (inputs[i].parentElement.parentElement.innerText) {
                    data[inputs[i].parentElement.parentElement.innerText] = inputs[i].value
                } else {
                    const roll = [inputs[i].value];
                    const name = inputs[i].parentNode.parentNode.querySelectorAll("input")[1].value;
                    if (roll && name) data.extra.push({[roll]: name})
                    i++
                }
            }
            const sortedData = {}

            sortedData.id = 0;
            sortedData.name = data["Название фильма:"];
            sortedData.origin = data["Оригинальное название фильма:"];
            sortedData.year = data["Год:"];
            sortedData.country = data["Страна:"];
            sortedData.tagline = data["Слоган:"];
            sortedData.director = data["Режиссер:"];
            sortedData.imdb = data["Рейтинг IMDB:"];
            sortedData.description = data["Описание:"];
            sortedData.likes = [0, 0];
            sortedData.extra = data.extra;
            sortedData.poster = null;
            sortedData.stars = data.stars;
            console.log(data.stars)
            const id = saveNew(sortedData)
            appHistory.push({pathname: `/movie/${id}`})
        })
        return btn
    }
}

export function addNewMovie(rows) {
    const movie = (new AddNew(html, {}, rows))
    return movie.html;
}