import {getMovie} from "./movie/movie";
import {getCard} from "./card/card";
import { appHistory } from "./app-history";

const wrapper =  document.body.querySelector("main")
document.body.querySelector(".nav-link").addEventListener("click", (event) => {
    event.preventDefault();
    appHistory.push({pathname: '/'});
})

function renderRoute(pathname) {
    if (pathname === "/") {
        wrapper.innerHTML ="";
        wrapper.appendChild(getCard(1));
        wrapper.appendChild(getCard(2));
        wrapper.appendChild(getCard(3));
        wrapper.appendChild(getCard(4));
        return true;
    }
    if (pathname.startsWith("/movie/")) {
        wrapper.innerHTML ="";
        const id = pathname.slice(7)
        wrapper.appendChild(getMovie(+id))
        return true;
    }

}

appHistory.listen((listener) => {
    renderRoute(listener.location.pathname);
});

renderRoute(appHistory.location.pathname);