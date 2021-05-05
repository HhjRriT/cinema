import {getMovie} from "./movie/movie";
import {getCard} from "./card/card";
import { appHistory } from "./app-history";

const wrapper =  document.body.querySelector("main")



function renderRoute(pathname) {
    switch (pathname) {
        case "/": {
            wrapper.innerHTML = "";
            wrapper.appendChild(getCard(1))
            wrapper.appendChild(getCard(2))
            wrapper.appendChild(getCard(3))
            wrapper.appendChild(getCard(4))
            break;
        }
        case "/home": {
            wrapper.innerHTML = "";

            // const home = new Home();
            // wrapper.appendChild(home.render());
            break;
        }
        case "/1": {
            wrapper.innerHTML = "";
            wrapper.appendChild(getCard(4))

            // const about = new About();
            // wrapper.appendChild(about.render());
            break;
        }
        default: {
            wrapper.innerHTML = "44";
            break;
        }
    }
}

appHistory.listen((listener) => {
    renderRoute(listener.location.pathname);
});

renderRoute(appHistory.location.pathname);
