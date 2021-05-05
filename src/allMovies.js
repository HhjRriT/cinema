export function searchById(id) {
    return movies.find((el)=>{
        return el.id === id
    })
}

const movies = [
    {
        id: 1,
        name: "Гори, гори ясно",
        origin: "Brightburn",
        year : 2019,
        country : "USA",
        people: [["director", " David Yarovesky"], ["Writers"," Brian Gunn","Mark Gunn"]],
        imdb : 6.4,
        title : "Что, если потерпевший крушение на Земле инопланетный ребенок со сверхспособностями вместо того, чтобы стать героем для человечества, окажется чем-то гораздо более зловещим?",
        staring: ["Элизабет Бэнкс", "Дэвид Денман", "Джексон А. Данн"],
        likes : [124,21]
    },
    {
        id: 2,
        name: "Гори, гори ясно 2",
        origin: "Brightburn",
        year : 2019,
        country : "USA",
        people: [["director", " David Yarovesky"], ["Writers"," Brian Gunn","Mark Gunn"]],
        imdb : 6.4,
        title : "Что, если потерпевший крушение на Земле инопланетный ребенок со сверхспособностями вместо того, чтобы стать героем для человечества, окажется чем-то гораздо более зловещим?",
        staring: ["Элизабет Бэнкс", "Дэвид Денман", "Джексон А. Данн"],
        likes : [124,21]
    },
    {
        id: 3,
        name: "Гори, гори ясно 3",
        origin: "Brightburn",
        year : 2019,
        country : "USA",
        people: [["director", " David Yarovesky"], ["Writers"," Brian Gunn","Mark Gunn"]],
        imdb : 6.4,
        title : "Что, если потерпевший крушение на Земле инопланетный ребенок со сверхспособностями вместо того, чтобы стать героем для человечества, окажется чем-то гораздо более зловещим?",
        staring: ["Элизабет Бэнкс", "Дэвид Денман", "Джексон А. Данн"],
        likes : [124,21]
    },
    {
        id: 4,
        name: "Гори, гори ясно 4",
        origin: "Brightburn",
        year : 2019,
        country : "USA",
        people: [["director", " David Yarovesky"], ["Writers"," Brian Gunn","Mark Gunn"]],
        imdb : 6.4,
        title : "Что, если потерпевший крушение на Земле инопланетный ребенок со сверхспособностями вместо того, чтобы стать героем для человечества, окажется чем-то гораздо более зловещим?",
        staring: ["Элизабет Бэнкс", "Дэвид Денман", "Джексон А. Данн"],
        likes : [124,21]
    }
]
