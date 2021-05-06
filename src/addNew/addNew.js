import {BaseUiComponent} from "../base-ui-component";
import html from "./add-new.html";
import {appHistory} from "../app-history";


class AddNew extends BaseUiComponent {
    constructor(html, data) {
        super(html, data);
        this.html = this.render();
        this.add = this.html.querySelector("button.btn.btn-primary.mr-3");
        this.add.setAttribute("disabled", "disabled");
        this.inputs = this.upDateInputs(this.html);
        this.poster = this.html.querySelector("#upload-poster");
        this.poster.addEventListener("change", (event) => {
            movie.querySelector(".custom-file-label").innerText = event.target.files[0].name;
        })

    }

    upDateInputs(html) {
        const inputs = [...html.querySelectorAll("input"), ...html.querySelectorAll("textarea")];
        for (let i of inputs) {
            i.addEventListener("input", () => {
                if (inputs.every(el => {
                    return (el.value.length > 3)
                })) {
                    this.add.removeAttribute("disabled")
                }
            })
        }
    }
}

export function addNewMovie() {
    const movie = (new AddNew(html, {})).html;
    // const add = movie.querySelector("button.btn.btn-primary.mr-3");
    // add.setAttribute("disabled", "disabled");
    // let inputs = [...movie.querySelectorAll("input"), ...movie.querySelectorAll("textarea")];
    // console.log(inputs)
    // for (let i of inputs) {
    //     i.addEventListener("input", () => {
    //         console.log(i.value)
    //         if (inputs.every((el) => {
    //             return el.value.length > 3
    //         })) {
    //             add.removeAttribute("disabled")
    //         }
    //     })
    // }
    // const poster = movie.querySelector("#upload-poster");
    // poster.addEventListener("change", (event) => {
    //     movie.querySelector(".custom-file-label").innerText = event.target.files[0].name;
    // })

    movie.addEventListener("click", (event) => {
        console.log(event)
        if (event.target.className === "btn btn-outline-danger" || event.target.className === "MYclose") {
            appHistory.push({pathname: '/'});
        }
        if (event.target.classList.contains("addBtn")) {
            const row = movie.querySelector(".MYrow");
            (row.querySelector("button")).addEventListener("click", () => row.style.display = "none")
            const newRow = row.cloneNode(true);
            (newRow.querySelector("button")).addEventListener("click", () => row.style.display = "none")
            row.after(newRow)
        }

    })
    return movie;
}