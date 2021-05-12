import {BaseUiComponent} from "../base-ui-component";
import html from "./add-new.html";
import {appHistory} from "../app-history";



function addBtn(movie, inputs) {
    const btn = movie.querySelector("button.btn.btn-primary.mr-3");
    btn.setAttribute("disabled", "disabled");
    btn.addEventListener("click", event => {
        const data = {}
        console.log(inputs)
        for (let i = 0; i < inputs.length; i++) {
            console.log(inputs[i])
            if (inputs[i].parentElement.innerText) {
                data[inputs[i].parentElement.innerText] = i.value
            } else if (inputs[i].parentElement.parentElement.innerText) {
                data[inputs[i].parentElement.parentElement.innerText] = i.value;
            } else {
                data[inputs[i].placeholder + i] = i.value;
            }
        }
        console.log(data)
    })
    return btn
}

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
        row.after(row.cloneNode(true));
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

function getAllInputs(movie) {
    const inputs =  [...movie.querySelectorAll("input"), ...movie.querySelectorAll("textarea")]
    const btn = movie.querySelector("button.btn.btn-primary.mr-3");
    inputs.forEach((el) => {
        el.addEventListener("input", () => {
            if (inputs.every((input) => input.value.length !== 0 )) btn.removeAttribute("disabled")
        })
    })
    return inputs
}

class AddNew extends BaseUiComponent {
    constructor(html, data) {
        super(html, data);
        this.html = this.render();
        this.inputs = getAllInputs(this.html);
        this.plusRowBtn = plusRow(this.html);
        this.addBtn = addBtn(this.html, this.inputs);
        this.poster = getPoster(this.html);
        this.btnX = getXBtn(this.html)
    }

}

export function addNewMovie() {
    const movie = (new AddNew(html, {})).html
    return movie;
}
