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

function plusRow(movie) {
    const row = movie.querySelector(".MYrow");
    const btn = movie.querySelector(".addBtn");
    btn.addEventListener("click", (event) => {
        const newRow = row.cloneNode(true)
        newRow.querySelectorAll("input").forEach((el) => el.value = "")
        row.after(newRow);
        (movie.querySelectorAll(".MYrow")).forEach((el, i) => {
            (el.querySelector("button")).addEventListener(("click"), () => {
                if (i !== 0) el.hidden = true
            })
        })
    })
    return btn
}

function getXBtn(movie) {
    const btn = movie.querySelector(".MYclose")
    btn.addEventListener("click", (event) => {
        appHistory.push({pathname: '/'})
    })
}


class AddNew extends BaseUiComponent {
    constructor(html, data) {
        super(html, data);
        this.html = this.render();
        this.inputs = null
        this.plusRowBtn = plusRow(this.html);
        this.addBtn = this.addBtn();
        this.poster = getPoster(this.html);
        this.btnX = getXBtn(this.html)
    }

    getAllInputs() {
        const wrapper = document.body.querySelector(".modal-body") || this.html.querySelector(".modal-body")
        const inputs = [...wrapper.querySelectorAll("input"), ...wrapper.querySelectorAll("textarea")]
        const btn = this.html.querySelector("button.btn.btn-primary.mr-3");
        inputs.forEach((el) => {
            el.addEventListener("input", () => {
                btn.disabled = true
                if (inputs.every((input) => input.value.length > 2)) btn.removeAttribute("disabled")
            })
        })
        this.inputs = inputs

        return inputs
    }

    addBtn() {
        const btn = this.html.querySelector("button.btn.btn-primary.mr-3");
        btn.addEventListener("click", event => {
            const inputs = this.getAllInputs()
            const data = {}
            data.extra = []
            for (let i = 0; i < inputs.length; i++) {
                if (inputs[i].parentElement.innerText) {
                    data[inputs[i].parentElement.innerText] = inputs[i].value
                } else if (inputs[i].parentElement.parentElement.innerText) {
                    data[inputs[i].parentElement.parentElement.innerText] = inputs[i].value
                } else {
                    const roll = [inputs[i].value];
                    const name = inputs[i].parentNode.parentNode.querySelectorAll("input")[1].value;
                    if (roll && name ) data.extra.push({[roll]: name})
                    i++
                }
            }
            console.log(data)
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
            sortedData.likes = [0,0];
            sortedData.extra = data.extra;
            sortedData.poster = null;
            sortedData.stars = data["В ролях:↵Укажите актеров через запятую."];
            saveNew(sortedData)
        })
        return btn
    }

}

export function addNewMovie() {
    const movie = (new AddNew(html, {}))
    movie.getAllInputs()
    return movie.html;
}
