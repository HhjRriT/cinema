import {getCardByName, getCard} from "./card/card";
import {appHistory} from "./app-history";
import {addNewMovie} from "./addNew/addNew";
import {getMovieById} from "./movie/movie";

console.log("start")
const wrapper = document.body.querySelector("main")
document.body.querySelector(".nav-link").addEventListener("click", (event) => {
    event.preventDefault();
    appHistory.push({pathname: '/'});
})

const add = document.querySelector("#add-new")
add.addEventListener("click", (event) => {
    event.preventDefault()
    appHistory.push({pathname: `/addNewMovie`})
})

const search = document.querySelector(".search.btn")
const searchInput = document.querySelector("input");
search.addEventListener("click", (event) => {
    event.preventDefault()
    appHistory.push({pathname: `/search`})
})

function renderRoute(pathname) {
    if (pathname === "/") {
        wrapper.innerHTML = "";
        for (let i = 1; i < 10; i++) {
            if (getCard(i)) wrapper.appendChild(getCard(i))
        }
        return true;
    }
    if (pathname.startsWith("/movie/")) {

        wrapper.innerHTML = "";
        const id = pathname.slice(7)
        console.log(id)
        wrapper.appendChild(getMovieById(+id))
        return true;
    }
    if (pathname === "/addNewMovie") {
        wrapper.innerHTML = "";
        const modal = addNewMovie()
        wrapper.appendChild(modal)
        return true;
    }
    if (pathname === `/search`) {
        wrapper.innerHTML = "";
        for (let i of getCardByName(searchInput.value)) wrapper.appendChild(i)
        return true;
    }
    wrapper.innerHTML = "";
    wrapper.innerText = "404 error"
}

appHistory.listen((listener) => {
    renderRoute(listener.location.pathname);
});

renderRoute(appHistory.location.pathname);