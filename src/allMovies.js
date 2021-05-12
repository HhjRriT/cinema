const data = [
    {
        id: 1,
        name: "Гори, гори ясно",
        origin: "Brightburn",
        year: 2019,
        country: "USA",
        people: [["director", " David Yarovesky"], ["Writers", " Brian Gunn", "Mark Gunn"]],
        imdb: 6.4,
        title: "Что, если потерпевший крушение на Земле инопланетный ребенок со сверхспособностями вместо того, чтобы стать героем для человечества, окажется чем-то гораздо более зловещим?",
        staring: ["Элизабет Бэнкс", "Дэвид Денман", "Джексон А. Данн"],
        likes: [124, 21]
    },
    {
        id: 2,
        name: "Гори, гори ясно 2",
        origin: "Brightburn",
        year: 2019,
        country: "USA",
        people: [["director", " David Yarovesky"], ["Writers", " Brian Gunn", "Mark Gunn"]],
        imdb: 6.4,
        title: "Что, если потерпевший крушение на Земле инопланетный ребенок со сверхспособностями вместо того, чтобы стать героем для человечества, окажется чем-то гораздо более зловещим?",
        staring: ["Элизабет Бэнкс", "Дэвид Денман", "Джексон А. Данн"],
        likes: [124, 21]
    },
    {
        id: 3,
        name: "Гори, гори ясно 3",
        origin: "Brightburn",
        year: 2019,
        country: "USA",
        people: [["director", " David Yarovesky"], ["Writers", " Brian Gunn", "Mark Gunn"]],
        imdb: 6.4,
        title: "Что, если потерпевший крушение на Земле инопланетный ребенок со сверхспособностями вместо того, чтобы стать героем для человечества, окажется чем-то гораздо более зловещим?",
        staring: ["Элизабет Бэнкс", "Дэвид Денман", "Джексон А. Данн"],
        likes: [124, 21]
    },
    {
        id: 4,
        name: "Гори, гори ясно 4",
        origin: "Brightburn",
        year: 2019,
        country: "USA",
        people: [["director", " David Yarovesky"], ["Writers", " Brian Gunn", "Mark Gunn"]],
        imdb: 6.4,
        title: "Что, если потерпевший крушение на Земле инопланетный ребенок со сверхспособностями вместо того, чтобы стать героем для человечества, окажется чем-то гораздо более зловещим?",
        staring: ["Элизабет Бэнкс", "Дэвид Денман", "Джексон А. Данн"],
        likes: [124, 21]
    }
]

const moviesList = getMovie("movies");
if (!moviesList) localStorage.setItem("movies", JSON.stringify(data));

export function searchById(id) {
    const result = moviesList.find((el) => el.id === id)
    if (result) return result
}

export function searchByName(name) {
    return moviesList.filter((el) => el.name.includes(name))
}

export function saveNew(movie) {
    movie.id = getMovie("movies").length + 1
    moviesList.push(movie)
    localStorage.setItem("movies", JSON.stringify(moviesList))
    return movie.id
}

function getMovie(key) {
    try {
        return JSON.parse(localStorage.getItem(key))
    } catch (error) {
        console.error("error at arr in localstorage");
        return;
    }
}
