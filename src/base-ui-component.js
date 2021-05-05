import template from "lodash.template";

function renderTemplate(html, data) {
    const tmpl = template(html);
    const string = tmpl(data);

    const container = document.createElement("div");
    container.innerHTML = string;

    return container.firstChild;
}

export class BaseUiComponent {
    constructor(html, data) {
        this._element = renderTemplate(html, data);
    }

    render() {
        return this._element;
    }
}
