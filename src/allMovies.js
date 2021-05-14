const data = [
    {
        "id": 1,
        "name": "Гори, гори ясно",
        "origin": "Brightburn",
        "year": 2019,
        "country": "USA",
        "tagline": "«Imagine What He Could Become»",
        "director": "David Yarovesky",
        "imdb": 6.4,
        "description": "Что, если потерпевший крушение на Земле инопланетный ребенок со сверхспособностями вместо того, чтобы стать героем для человечества, окажется чем-то гораздо более зловещим?",
        "likes": [
            0,
            0
        ],
        "extra": [
            {"сценарий": "Брайан Ганн, Марк Ганн"},
            {"продюсер": "Джеймс Ганн, Брайан Ганн, Марк Ганн"},
            {"оператор": "Майкл Даллаторре"},
            {"композитор": "Тим Уильямс"}

        ],
        "poster": null,
        "stars": "Элизабет Бэнкс,Дэвид Денман,Джексон А. Данн,Абрахам Клинкскейлз,Кристиан Финлейсон,Дженнифер Холлэнд,Эмми Хантер,Мэтт Джонс,Мередит Хагнер,Бекки Уолстром"

    },
    {
        "id": 2,
        "name": "Гори, гори ясно 22",
        "origin": "Brightburn",
        "year": 2019,
        "country": "USA",
        "tagline": "«Imagine What He Could Become»",
        "director": "David Yarovesky",
        "imdb": 6.4,
        "description": "Что, если потерпевший крушение на Земле инопланетный ребенок со сверхспособностями вместо того, чтобы стать героем для человечества, окажется чем-то гораздо более зловещим?",
        "likes": [
            0,
            0
        ],
        "extra": [
            {"сценарий": "Брайан Ганн, Марк Ганн"},
            {"продюсер": "Джеймс Ганн, Брайан Ганн, Марк Ганн"},
            {"оператор": "Майкл Даллаторре"},
            {"композитор": "Тим Уильямс"}

        ],
        "poster": null,
        "stars": "Элизабет Бэнкс,Дэвид Денман,Джексон А. Данн,Абрахам Клинкскейлз,Кристиан Финлейсон,Дженнифер Холлэнд,Эмми Хантер,Мэтт Джонс,Мередит Хагнер,Бекки Уолстром"

    },
    {
        "id": 3,
        "name": "Гори, гори ясно 3",
        "origin": "Brightburn",
        "year": 2019,
        "country": "USA",
        "tagline": "«Imagine What He Could Become»",
        "director": "David Yarovesky",
        "imdb": 6.4,
        "description": "Что, если потерпевший крушение на Земле инопланетный ребенок со сверхспособностями вместо того, чтобы стать героем для человечества, окажется чем-то гораздо более зловещим?",
        "likes": [
            0,
            0
        ],
        "extra": [
            {"сценарий": "Брайан Ганн, Марк Ганн"},
            {"продюсер": "Джеймс Ганн, Брайан Ганн, Марк Ганн"},
            {"оператор": "Майкл Даллаторре"},
            {"композитор": "Тим Уильямс"}

        ],
        "poster": null,
        "stars": "Элизабет Бэнкс,Дэвид Денман,Джексон А. Данн,Абрахам Клинкскейлз,Кристиан Финлейсон,Дженнифер Холлэнд,Эмми Хантер,Мэтт Джонс,Мередит Хагнер,Бекки Уолстром"

    },
    {
        "id": 4,
        "name": "Гори, гори ясно  4",
        "origin": "Brightburn",
        "year": 2019,
        "country": "USA",
        "tagline": "«Imagine What He Could Become»",
        "director": "David Yarovesky",
        "imdb": 6.4,
        "description": "Что, если потерпевший крушение на Земле инопланетный ребенок со сверхспособностями вместо того, чтобы стать героем для человечества, окажется чем-то гораздо более зловещим?",
        "likes": [
            0,
            0
        ],
        "extra": [
            {"сценарий": "Брайан Ганн, Марк Ганн"},
            {"продюсер": "Джеймс Ганн, Брайан Ганн, Марк Ганн"},
            {"оператор": "Майкл Даллаторре"},
            {"композитор": "Тим Уильямс"}

        ],
        "poster": null,
        "stars": "Элизабет Бэнкс,Дэвид Денман,Джексон А. Данн,Абрахам Клинкскейлз,Кристиан Финлейсон,Дженнифер Холлэнд,Эмми Хантер,Мэтт Джонс,Мередит Хагнер,Бекки Уолстром"

    }
]

export function searchById(id) {
    const result = (loadMovies("movies")).find((el) => el.id === id)
    if (result) return result
    return false
}

export function searchByName(name) {
    return loadMovies("movies").filter((el) => el.name.includes(name))
}

export function saveNew(movie) {
    const oldMoviesList = loadMovies("movies")
    movie.id = (oldMoviesList[oldMoviesList.length - 1]).id + 1
    oldMoviesList.push(movie)
    localStorage.setItem("movies", JSON.stringify(oldMoviesList))
    return movie.id
}

function loadMovies(key) {
    try {
        JSON.parse(localStorage.getItem(key)) || localStorage.setItem("movies", JSON.stringify(data))
        return JSON.parse(localStorage.getItem(key))
    } catch (error) {
        console.error("error at arr in localstorage");
    }
}

export function updateMovie(movie) {
    const oldMovies = loadMovies("movies");
    const id = movie.id -1 ;
    oldMovies[id] = movie;
    localStorage.setItem("movies", JSON.stringify(oldMovies))
    return id
}

export function deleteMovieById(id) {
    const oldMovies = loadMovies("movies");
    const toDel = oldMovies.find((el) => el.id === id)
    const index = oldMovies.indexOf(toDel)
    oldMovies.splice((index), 1);
    localStorage.setItem("movies", JSON.stringify(oldMovies));
}
